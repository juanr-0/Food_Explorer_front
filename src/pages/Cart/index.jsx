import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiTruck, FiTag, FiShoppingCart } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';

import { Container, FoodSection,FoodWrapUp, PageContent } from "./styles";
import { Header } from '../../components/Header';
import { FoodItem } from '../../components/FoodItem';
import {Footer} from '../../components/Footer';
import { SideMenu } from "../../components/SideMenu";
import {Carousel} from '../../components/Carousel';
import { ButtonText } from '../../components/ButtonText';
import { OrderCard } from '../../components/OrderCard';

import {api} from '../../services/api'
import { useCart } from '../../hooks/cart';


export function Cart() {
  const {user} = useAuth();
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const navigate = useNavigate();

  const { cart, total, handleResetCart} = useCart();


  const [products, setProducts] = useState([]);

  const [search, setSearch] = useState("")
  
  function handleBack(){
    navigate(-1);
  }

  function handleCreatedCart(cart) {
    return {
      orderStatus: '🔴 Pendente',
      paymentMethod: pixActive ? 'pix': 'creditCard',
      totalPrice: total,
      cart: cart.map(item => (
        {
          id: item.id,
          title: item.title,
          quantity: item.quantity
        }
      ))
    }
}

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
          <ButtonText
            title="voltar"
            onClick={handleBack}
          />
            <div className="card-wrapper">
                                
                                <div className="order-wrapper">
                                    <h2>Meu pedido</h2>
                                    <div className="details">
                                        {
                                            cart && 
                                                cart.map(item => (
                                                    <OrderCard 
                                                        key={String(item.id)} 
                                                        data={item}
                                                    />
                                                ))
                                        }
                                    </div>

                                    <div className="total">
                                        <p>Total: R$<span>{total}</span></p>
                                    </div>
                                </div>
                              </div>

       
      </PageContent>
    
      <Footer/>
    </Container>
  )
}