import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { X } from "@phosphor-icons/react";

import { Container, Nav, Title, HeaderSideMenu, Button } from "./styles";
import {Footer} from '../Footer';
import { Search } from "../Search";

export function SideMenu({menuIsOpen, onCloseMenu, search}) {
  
  const navigate = useNavigate();
  const {user, signOut} = useAuth();

  return (
    <Container data-menu-is-open={menuIsOpen}>
      <HeaderSideMenu>
        <Title>
        {
          menuIsOpen &&
          <Button onClick={onCloseMenu}>
            <X />
          </Button>
        }   
          <p>
            Menu
          </p>
        </Title>
      </HeaderSideMenu>

      <Nav>
        <Search search={search} />
        {
          <>
            {[USER_ROLE.ADMIN].includes(user.role) && <Link to="/new-dish">Novo Prato</Link>}
          </>
        }
        
        <a onClick={signOut} href="#">Sair</a>
      </Nav>

      <Footer />
    </Container>
  );
}