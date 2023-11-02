import { useEffect, useState,useRef } from 'react';

import { useNavigate } from 'react-router-dom';

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
import react_icon from "../../assets/react.svg";

import {api} from '../../services/api'
import { useAuth } from "../../hooks/auth";


export function NewDish() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [imageView, setImageView] = useState(null);

  const [image, setImage] = useState(null);
  const [imageFile, setImageFile] = useState(null)

  const [menuIsOpen, setMenuIsOpen] = useState(false);
  
  const { user } = useAuth()

  const navigate = useNavigate();

  const inputFileRef = useRef(null);

  function handleBack(){
    navigate(-1);
  }

    
  const handleCustomButtonClick = () => {
    inputFileRef.current.click();
  };

  function handleChangeImage(event) {
    const file = event.target.files[0];
    setImageFile(file);

    const imagePreview = URL.createObjectURL(file);
    setImageView(imagePreview);

}
  
  
  function handleAddIngredient() {
    setIngredients(prevState => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredient(deleted) {
    setIngredients(prevState => prevState.filter(Ingredient => Ingredient !== deleted));
  }

  
  async function handleNewProduct() {
    if(!title){
      return alert("Digite o nome do produto");
    }
    
    if(!category){
      return alert("Você deixou o produto sem categoria;")
    }
    
    if(newIngredient){
      return alert("Você deixou um ingrediente no campo para adicionar, mas não clicou em adicionar. Clique para adicionar ou deixe o campo vazio;")
    }
    
    const formData = new FormData();
    formData.append("image", image);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);
    formData.append("price", price);

    ingredients.map(ingredient => (
        formData.append("ingredients", ingredient)
    ))
    
    
    await api
            .post("/products",formData)
            .then(alert("Prato adicionado com sucesso!"), navigate("/"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro ao criar o prato!");
                }
            });  
  }
  
  return (
    <Container>
      <Header onOpenMenu={() =>setMenuIsOpen(true)}/>
      
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() =>setMenuIsOpen(false)}
      />

      <Form>
        <header>
          <ButtonText
            title="voltar"
            onClick={handleBack}
            />
        </header>

        <h1>Novo prato</h1>

        <img src={imageView ? imageView : react_icon} />

        <div className='first-row'>
 
          <div class="dish_img">
            <p>Imagem do prato</p>

            <div class="send_img">
                <button type="button" onClick={handleCustomButtonClick}>
                  <img src={send_icon}/>
                  Selecione a imagem
                </button>

                <input
                  id="image"
                  type="file"
                  accept="image/*" 
                  ref={inputFileRef}
                  onChange={(e) => {
                    handleChangeImage(e);
                    setImage(e.target.files[0]);
                  }}
                />
            </div>
          </div>

          <div class="name">
            <p>Nome</p> 
              <input type="text" name="" placeholder="Ex.: Salada Ceasar" onChange={e => setTitle(e.target.value)}/>
          </div>

          <div class="category">
            <p>Categoria</p>
            <div class="drop_down_category">
              <select defaultValue={'default'} onChange={e => setCategory(e.target.value)}>
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
            <input type="number" name="" placeholder="R$ 00,00" onChange={e => setPrice(e.target.value)}/>
          </div>
        
        </div>

        <div class="description">
          <p>Descrição</p>
          <textarea type="text" name="" placeholder="Fale brevemente sobre o prato, seus ingredientes e composição" onChange={e => setDescription(e.target.value)}/>
          
        </div>
        
        <footer>
          <Button
            title="Salvar Alterações"
            onClick={handleNewProduct}
          />
        </footer>
      </Form>

      <Footer/>
      
    
    </Container>

  )
}