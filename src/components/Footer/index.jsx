
import { Container, Logo_food_explorer } from './styles';

import gray_polygon from '../../assets/grayPolygon.svg';

export function Footer() {
    return (
        <Container>

            <Logo_food_explorer>
                <img src={gray_polygon} alt="polygon" />
                <p>
                  food explorer
                </p>
            </Logo_food_explorer>

            <p>© 2023 - Todos os direitos reservados.</p>
        </Container>
    );
}