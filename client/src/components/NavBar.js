import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { NavLink, useNavigate } from 'react-router-dom';
import '../App.css';
import { actions as userActions } from '../slices/userSlice';
import { ADMIN_ROUTE, LOGIN_ROUTE } from '../utils/consts';

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(state => state.user);

  const handleLogOut = () => {
    dispatch(userActions.logOut());
    navigate(LOGIN_ROUTE);
  };

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{textDecoration: 'none'}} to="/">
            <Navbar.Brand className="brand">
              ЭлектроSHOP
            </Navbar.Brand>
          </NavLink>
          {user.isAuth ? 
            <Nav className="ml-auto">
              <Button variant="outline-light" onClick={() => navigate(ADMIN_ROUTE)}>Админ-панель</Button>
              <Button variant="outline-light" className="ms-2" onClick={handleLogOut}>Выйти</Button>
            </Nav> : 
            <Nav className="ml-auto">
              <Button variant="outline-light" onClick={() => dispatch(userActions.logIn())}>Авторизация</Button>
            </Nav>
          }
          
        </Container>
      </Navbar>
    </>
  )
}
