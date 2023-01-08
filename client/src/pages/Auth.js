import React from "react";
import { Container, Form, Button } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export default function Auth() {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;
  console.log(location)
  console.log(isLogin)
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{height: window.innerHeight - 54}}
    >
      <Form className="border border-dark rounded p-5" style={{width: "600px"}}>
        <h2>{isLogin ? "Авторизация" : "Регистрация"}</h2>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Введите ваш email</Form.Label>
          <Form.Control type="email" placeholder="Email..." />
          {/* <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Введите пароль</Form.Label>
          <Form.Control type="password" placeholder="Пароль..." />
        </Form.Group>
        <Button variant="outline-success" type="submit">
          Войти
        </Button>
        <Button className="ms-3" variant="primary" type="submit">
          {
            isLogin ?
            <NavLink style={{textDecoration: 'none', color: 'white'}} to={REGISTRATION_ROUTE}>
              Регистрация
            </NavLink> :
            <NavLink style={{textDecoration: 'none', color: 'white'}} to={LOGIN_ROUTE}>
              Авторизация
            </NavLink>
          }
        </Button>
      </Form>
    </Container>
  )
}
