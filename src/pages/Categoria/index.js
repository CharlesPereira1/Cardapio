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
        <div>
          <strong>Hamburguer</strong>
          <img src={hamburguer} alt="hamburguer" />
        </div>
      </li>

      <li>
        <div>
          <strong>Porções</strong>
          <img src={porcoes} alt="hamburguer" />
        </div>
      </li>

      <li>
        <div>
          <strong>Refrigerantes</strong>
          <img src={refrigerante} alt="hamburguer" />
        </div>
      </li>

      <li>
        <div>
          <strong>Sucos</strong>
          <img src={sucos} alt="hamburguer" />
        </div>
      </li>
    </Categoria>
  );
}
