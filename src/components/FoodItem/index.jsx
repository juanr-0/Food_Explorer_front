import { FiPlus, FiMinus } from "react-icons/fi";
import { Link } from "react-router-dom";
import { api } from '../../services/api';

import imagePlaceholder from '../../assets/polygon.svg';

import {
  Container,
  FoodItemContainer,
  FoodImage,
  FoodName,
  FoodPrice,
  EditItem,
  ItemInfo,
  Quantity,
  FoodDescription,
} from "./styles";

import { Pencil } from "@phosphor-icons/react";

import { Button } from "../../components/Button";
import { useState } from "react";
import { useAuth } from "../../hooks/auth";
import { USER_ROLE } from "../../utils/roles";
import { useNavigate } from "react-router-dom";

import { useCart } from '../../hooks/cart';


export function FoodItem({ data, ...rest }) {
  const { user } = useAuth();
  const navigate = useNavigate();
  
  const [quantity, setQuantity] = useState(1);

  const { handleAddDishToCart } = useCart();

  const increase = () => {
      if (quantity > 19) {
          alert("A quantidade máxima é de 20 unidades")
          return;
      }
      setQuantity(count => count + 1);
  };
   
  const decrease = () => {
      if (quantity < 2) {
          alert("A quantidade mínima é 1 unidade")
          return;
      }
      setQuantity(count => count - 1);
  };


  return (
    <Container>
      <FoodItemContainer>
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <div key={index}>
              {USER_ROLE.ADMIN.includes(user.role) && (
                <EditItem>
                  <Link to={`/product/${item.id}`}>
                    <Pencil />
                  </Link>
                </EditItem>
              )}
              {USER_ROLE.CUSTOMER.includes(user.role) && (
                <EditItem>
                  <img src="src\assets\fav.svg" />
                </EditItem>
              )}

              <ItemInfo>
                <FoodImage src={item.image ? `${api.defaults.baseURL}/files/${item.image}` : imagePlaceholder} alt={item.title} />

                <FoodName>
                  <Link to={`/product/${item.id}`}>
                    {item.title}
                  </Link>
                </FoodName>
                
                <FoodDescription>{item.description}</FoodDescription>

                <FoodPrice>R$ {item.price}</FoodPrice>

                {USER_ROLE.CUSTOMER.includes(user.role) && (
                  <Quantity>
                    <FiMinus onClick={decrease}/>
                    <p>
                      {quantity}
                    </p>
                    <FiPlus onClick={increase}/>
                  </Quantity>
                )}
              </ItemInfo>

              {USER_ROLE.CUSTOMER.includes(user.role) && (
                <div className="add_button">
                    <Button title="incluir"  onClick={() => handleAddDishToCart(data, quantity, imageURL)} />
                </div>
              )}
            </div>
          ))
        ) : (
          <div>Erro: dados inválidos</div>
        )}
      </FoodItemContainer>
    </Container>
  );
}

