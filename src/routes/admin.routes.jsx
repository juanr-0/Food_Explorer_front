import { Routes, Route } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Product } from '../pages/Product';
import { NotFound } from '../pages/NotFound';
import { NewDish} from '../pages/NewDish';
import { EditDish} from '../pages/EditDish';

import { SalesReport } from '../pages/SalesReport';

export function AdminRoutes() {
  return (
    <Routes>
      <Route path="/" element={< Home />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/new-dish" element={<NewDish />} />
      <Route path="/edit-dish/:id" element={<EditDish />} />

      <Route path="*" exact={true} element={<NotFound />} />
    </Routes>
  );
}