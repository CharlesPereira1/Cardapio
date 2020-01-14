import React from 'react';
import { Link } from 'react-router-dom';

import { MdShoppingBasket } from 'react-icons/md';

import { Container, Cart } from './styles';

import logo from '../../assets/logo.png';

export default function Header() {
  return (
    <Container to="/">
      <Link>
        <img src={logo} width={130} alt="Cardápio" />
      </Link>

      <Cart to="/cart">
        <div>
          <strong>Minha Sacola</strong>
          <span>3 itens</span>
        </div>
        <MdShoppingBasket size={36} color="#191920" />
      </Cart>
    </Container>
  );
}
