import { useState, useRef } from 'react';
import { api } from "../../services/api";
import { useParams } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { useNavigate } from 'react-router-dom';
import { useEffect } from "react";

import { Container, Form } from "./styles";
import { Header } from '../../components/Header';
import {Footer} from '../../components/Footer';
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Ingredient } from '../../components/Ingredient';
import { ButtonText } from '../../components/ButtonText';
import { IngredientItem } from '../../components/IngredientItem';

import { SideMenu } from "../../components/SideMenu";

import send_icon from "../../assets/send.svg";

export function EditDish() {
  const { user } = useAuth()
  const params = useParams();
  const [data, setData] = useState(null);
  
  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  const [image, setImage] = useState();
  const [imageFile, setImageFile] = useState(null)
  
  
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  
  const navigate = useNavigate();

  const inputFileRef = useRef(null);
  
  const handleCustomButtonClick = () => {
    inputFileRef.current.click();
  };

  function handleBack(){
    navigate(-1);
  }
 
  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImage(imagePreview);
}
  
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(Ingredient => Ingredient !== deleted));
  }
  
  async function handleUpdateProduct() {
    if (!image) {
        return alert("Erro: Você não carregou a nova imagem do prato!");
    }
    
    if (!title) {
        return alert("Erro: Você não informou o nome do prato!");
    }

    if (ingredients.length < 1) {
        return alert("Erro: Adicione pelo menos um ingrediente!")
    }

    if (newIngredient) {
        return alert("Erro: Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique no sinal de + para adicionar!");
    }

    if (!category) {
        return alert("Erro: Você não selecionou a categoria do prato!");
    }

    if (!price) {
        return alert("Erro: Você não informou o preço do prato!");
    }

    if (!description) {
        return alert("Erro: Você não informou uma descrição para o prato!");
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);
    
    ingredients.map(ingredient => (
        formData.append("ingredients", ingredient)
    ))

    await api
        .put(`/products/${params.id}`, formData)
        .then(alert("Prato atualizado com sucesso!"), navigate("/"))
        .catch((error) => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Erro ao atualizar o prato!");
            }
        });  
    
    }

    useEffect(() => {
      async function fetchProduct() {
        const response = await api.get(`/products/${params.id}`);
        setData(response.data);
        
        const { title, description, category, price, ingredients } = response.data;
        setTitle(title);
        setDescription(description);
        setCategory(category);
        setPrice(price);
        setIngredients(ingredients.map(ingredient => ingredient.name));
    }

    fetchProduct();
}, [])

// Remove Dish Function
async function handleRemoveProduct() {
    const isConfirm = confirm("Tem certeza que deseja remover este item?");

    if(isConfirm) {
        await api.delete(`/products/${params.id}`)
        .then(() => {
            alert("Item removido com sucesso!");
            navigate("/");
        })
    } else {
        return
    }
}

  return (
    <Container>
      <Header onOpenMenu={() =>setMenuIsOpen(true)}/>
      
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() =>setMenuIsOpen(false)}
      />
      {
        data &&
        <Form>
          <header>
            <ButtonText
              title="voltar"
              onClick={handleBack}
              />
          </header>

          <h1>Editar prato</h1>
          
          <img src={image ? image : imageURL} />

          <div className='first-row'>

          
          <div class="dish_img">
              <p>Imagem do prato</p>
            
              <div class="send_img">
                <button type="button" onClick={handleCustomButtonClick}>
                  <img src={send_icon}/>
                  Selecione a imagem
                </button>

                <input id="imagem"
                  type="file"
                  accept="image/*" 
                  ref={inputFileRef}
                  onChange={handleChangeImage}
                  />
              </div>
            </div>

            <div class="name">
              <p>Nome</p> 
                <input 
                type="text" 
                placeholder="Salada Ceasar"
                value={title}
                onChange={e => setTitle(e.target.value)}
                />
            </div>

            <div class="category">
              <p>Categoria</p>
              <div class="drop_down_category">
                <select value={category} onChange={e => setCategory(e.target.value)}>
                  <option value="default" disabled>Selecione a categoria</option>
                  <option value="dishes">Pratos</option>
                  <option value="drinks">Bebidas</option>
                  <option value="dessert">Sobremesas</option>
                </select> 
              </div>
            </div>

          </div>

          <div className='second-row'>
            
            <div class="ingredients">
              <p>Ingredientes</p>
              <div className="ingredients_list">
                  {
                    ingredients.map((ingredient,index) => (
                      <IngredientItem 
                        key={String(index)}
                        value={ingredient}
                        onClick ={() => handleRemoveIngredient(ingredient)}
                      />
                    ))
                  }

                  <IngredientItem 
                    isNew 
                    placeholder="Adicionar"
                    value={newIngredient}
                    onChange = {e => setNewIngredient(e.target.value)}
                    onClick = {handleAddIngredient}
                  />
              </div>
            </div>

            <div class="price">
              <p>Preço</p> 
              <input 
              placeholder="R$ 00,00"
              type="number"
              value={price} 
              onChange={e => setPrice(e.target.value)}/>
            </div>
          
          </div>

          <div class="description">
            <p>Descrição</p>
            <textarea 
              type="text" 
              defaultValue={description} 
              onChange={e => setDescription(e.target.value)}
              placeholder="A Salada César é uma opção refrescante para o verão."
            />
            
          </div>
          
          <footer>
            <Button
              title="Excluir Prato"
              onClick={handleRemoveProduct}
            />
            
            <Button
              title="Salvar Alterações"
              onClick={handleUpdateProduct}
            />
          </footer>
        </Form>
      }

      <Footer/>
      
    
    </Container>

  )
}