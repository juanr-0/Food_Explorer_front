import { useEffect, useState } from "react";
import{FiPlus,FiMinus} from "react-icons/fi"

import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from '../../utils/roles';
import { api } from "../../services/api";
import { useParams } from "react-router-dom";

import { Container,Content, Quantity} from "./styles";


import { Header } from '../../components/Header';
import {Footer} from '../../components/Footer';
import { Button } from '../../components/Button';
import { Ingredient } from '../../components/Ingredient';
import { Section } from '../../components/Section'
import { SideMenu } from "../../components/SideMenu";

import arrow_left from '../../assets/arrowLeft.svg';

import receipt from '../../assets/receipt.svg';


export function Product(quantity) {
  const navigate = useNavigate();
  const {user} = useAuth();

  const [data, setData] = useState("");
  const params = useParams();


  const [menuIsOpen, setMenuIsOpen] = useState(false);
  

  useEffect(() => {
    async function fetchProductInfo() {
        const response = await api.get(`/products/${params.id}`);
        setData(response.data);
    }

    fetchProductInfo();
}, []);

  return (
    <Container>
       <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() =>setMenuIsOpen(false)}
      />

      <Header onOpenMenu={() =>setMenuIsOpen(true)}/>
        <button onClick={() => navigate('/')}>
          <img src={arrow_left } alt="arrowLeft"/>
          <p>Voltar</p>
        </button>

        <Content>
          <img src={`${api.defaults.baseURL}/files/${data.image}`} alt="product"/>
          <div className="details">
            <div className="title">
              <p>{data.title}</p>
            </div>
            
              <p>{data.description}</p>
              
              <li> 
                  {
                    data.ingredients && data.ingredients.map(ingredient => (
                      <Ingredient
                       key={String(ingredient.id)}
                       title={ingredient.name}
                      />
                    ))
                 }
              </li>

              {
              <>
                {[USER_ROLE.ADMIN].includes(user.role) && <Button title="Editar Prato" onClick={() => navigate(`/edit-dish/${data.id}`)} />}

                {[USER_ROLE.CUSTOMER].includes(user.role) && 
                <div className="info">
                  <Quantity>
                    <FiMinus/>
                    <p>01</p>
                    <FiPlus/>
                  </Quantity>
                  <div className="order">
                    <Button title="pedir ∙ R$ 25,00" icon={<img src={receipt} alt="receipt" />} onClick={() => navigate('/edit-dish')} />
                  </div>
                </div>}
              </>
            }
          </div>
          
        </Content>

      <Footer/>
    </Container>
  )
}