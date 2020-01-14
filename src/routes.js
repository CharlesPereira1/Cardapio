import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Categoria from './pages/Categoria';
import Produtos from './pages/Produtos';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Categoria} />
      <Route path="/produtos" component={Produtos} />
    </Switch>
  );
}
