import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useAuth } from '../../hooks/auth';

import { USER_ROLE } from '../../utils/roles';

import { Container, Menu, Logo_food_explorer } from './styles';
import { List, Receipt } from "@phosphor-icons/react";

import { Search } from "../Search";
import { Button } from '../Button';

import { PolygonTitle } from '../PolygonTitle';

import sign_out from '../../assets/signout.svg';
import { useCart } from '../../hooks/cart';

import receipt from '../../assets/receipt.svg';

export function Header({onOpenMenu, search}) {
    const { signOut, user } = useAuth();
    const navigate = useNavigate();
    
    const { cart, orders } = useCart();

    const[cartNumber, setCartNumber] = useState("0");

    return (
        <Container isAdmin={user.role === USER_ROLE.ADMIN} isCustomer={user.role === USER_ROLE.CUSTOMER}>
            <Menu onClick={onOpenMenu}>
                <List />
            </Menu>

            <Logo_food_explorer>
                <PolygonTitle/>
                
                {
                    <>
                        {[USER_ROLE.ADMIN].includes(user.role) && <p>{user.role}</p>}
                    </>
                }    
            </Logo_food_explorer>
            
            {
                <>
                    {[USER_ROLE.CUSTOMER].includes(user.role) && <div className='receipt'>
                    <img src={receipt} alt="receipt" />
                    </div>}
                </>
            } 

    
             <Search search={search}/>
    

            {
                <>
                    {
                        [USER_ROLE.ADMIN].includes(user.role) && 
                        <div className="new_dish">
                            <Button title="Novo prato" onClick={() => navigate('/new-dish')} />
                        </div>
                    }

                    {
                        [USER_ROLE.CUSTOMER].includes(user.role) && <div className="pedidos">
                        <Button 
                        title= {`Pedidos:(${cartNumber.length})`}icon={<img src="src\assets\receipt.svg" 
                        alt="receipt" />} 
                        onClick={() => navigate('/work-in-progress')} />
                        </div>
                    }
                </>
            }
            <div className='sign-out'>
                <button type="button" onClick={signOut}>
                    <img src={sign_out} alt="sign out" /> 
                </button>
            </div>

        </Container>
    );
}