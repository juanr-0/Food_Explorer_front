import { useState } from "react";

import { useAuth } from '../../hooks/auth';

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container, Form } from "./styles";
import { Link } from "react-router-dom";
import { PolygonTitle } from "../../components/PolygonTitle";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }

  return (
    <Container>
      <PolygonTitle/>
      
      <Form>
        <h1>Faça login</h1>
        
        <Input
          title={"Email"}
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          title={"Senha"}
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Entrar"
          onClick={handleSignIn}
        />

        <Link to="/register">
          Criar uma conta
        </Link>
      </Form>
    </Container>
  )
}