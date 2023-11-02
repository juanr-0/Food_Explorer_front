import { useEffect, useState } from "react";

import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { Container, Panorama, FoodSection,FoodWrapUp, PageContent } from "./styles";
import { Header } from '../../components/Header';
import { FoodItem } from '../../components/FoodItem';
import {Footer} from '../../components/Footer';
import { SideMenu } from "../../components/SideMenu";
import {Carousel} from '../../components/Carousel';

import {api} from '../../services/api'


export function Home() {
  const {user} = useAuth();
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("")



  useEffect(() => {
    async function fetchProducts() {
      const response = await api.get(`/products?title=${search}`);
      setProducts(response.data);
    }
    fetchProducts();
    }, [search])

  return (
    <Container>
      <SideMenu 
        menuIsOpen={menuIsOpen}
        onCloseMenu={() =>setMenuIsOpen(false)}
        search={setSearch} 
      />
     
      <Header 
        onOpenMenu={() =>setMenuIsOpen(true)} 
        search={setSearch} 
      />
      

      <PageContent>
        <Panorama>
          <img src="src\assets\foods.svg" alt="polygon" />
          <div className='text-panorama'>
          <h1>Sabores inigualáveis</h1>
          <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
          </div>
        </Panorama>

        <FoodWrapUp>
          <FoodSection>
            <h2>Refeições</h2>
            <Carousel items={[products]}>     
                {
                  products.filter(product => product.category == "dishes").map((product,index) => (
                    <FoodItem
                      key={index} 
                      data={[product]}
                    />
                  ))
                }
  
            </Carousel>

          </FoodSection>
          
          <FoodSection>
            <h2>Sobremesas</h2>
            
            <Carousel items={[products]}>     
                {
                  products.filter(product => product.category == "dessert").map((product,index) => (
                    <FoodItem
                      key={index} 
                      data={[product]}
                    />
                  ))
                }
  
            </Carousel>
          </FoodSection>

          <FoodSection>
            <h2>Bebidas</h2>
            <Carousel items={[products]}>     
                {
                  products.filter(product => product.category == "drinks").map((product,index) => (
                    <FoodItem
                      key={index} 
                      data={[product]}
                    />
                  ))
                }
  
            </Carousel>
          </FoodSection>
          
        </FoodWrapUp>
       
      </PageContent>
    
      <Footer/>
    </Container>
  )
}