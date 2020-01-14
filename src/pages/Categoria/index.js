import React from 'react';

import hamburguer from '../../assets/categoria/hamburguer.jpg';
import refrigerante from '../../assets/categoria/refrigerante.jpg';
import sucos from '../../assets/categoria/sucos.jpg';
import porcoes from '../../assets/categoria/porcoes.jpg';

import { Categoria } from './styles';

export default function Cart() {
  return (
    <Categoria>
      <li>
        <strong>Hamburguer</strong>
        <img src={hamburguer} alt="hamburguer" />
      </li>

      <li>
        <strong>Refrigerantes</strong>
        <img src={refrigerante} alt="hamburguer" />
      </li>

      <li>
        <strong>Sucos</strong>
        <img src={sucos} alt="hamburguer" />
      </li>

      <li>
        <strong>Porções</strong>
        <img src={porcoes} alt="hamburguer" />
      </li>
    </Categoria>
  );
}
