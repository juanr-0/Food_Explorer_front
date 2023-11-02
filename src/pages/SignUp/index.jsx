import { useState } from "react";
import { FiMail, FiUser, FiLock, FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate } from "react-router-dom";

import { api } from "../../services/api";

import { Container, Form } from "./styles";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { PolygonTitle } from "../../components/PolygonTitle";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  function handleSignUp() {
    if (!name || !email || !password) {
      return alert("Preencha todos os campos!");
    }

    api.post("/users", { name, email, password })
      .then(() => {
        alert("Cadastro realizado com sucesso!");
        navigate("/");
      }).catch(error => {
        if (error.response) {
          alert(error.response.data.message);
        } else {
          alert("Não foi possível cadastrar.");
        }
      });
  }

  return (
    <Container>
      <PolygonTitle/>

      <Form>
        <h1>Crie sua conta</h1>
        
        <Input
          title="Seu nome"
          placeholder="Exemplo: Maria da Silva"
          type="text"
          onChange={e => setName(e.target.value)}
        />

        <Input
          title="Email"
          placeholder="Exemplo: exemplo@exemplo.com.br"
          type="text"
          onChange={e => setEmail(e.target.value)}
        />

        <Input
          title="Senha"
          placeholder="No mínimo 6 caracteres"
          type="password"
          onChange={e => setPassword(e.target.value)}
        />

        <Button
          title="Criar Conta"
          onClick={handleSignUp}
        />

        <Link to="/">
          Já tenho uma conta
        </Link>
      </Form>
    </Container>
  )
}