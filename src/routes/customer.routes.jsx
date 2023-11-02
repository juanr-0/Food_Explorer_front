import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { NotFound } from '../pages/NotFound';
import { Cart } from '../pages/Cart';
import { ComingSoon } from '../pages/ComingSoon';

export function CustomerRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/work-in-progress" element={<ComingSoon />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}