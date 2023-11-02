import { Link } from "react-router-dom";
import { Container } from "./styles";

export function ComingSoon() {
  return (
    <Container>
      <h1>Em construção</h1>
      <Link to="/">voltar para o início</Link>
    </Container>
  )
}