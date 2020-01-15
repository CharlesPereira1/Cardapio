import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Category from './pages/Category';
import Products from './pages/Products';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={Category} />
      <Route path="/products" component={Products} />
    </Switch>
  );
}
