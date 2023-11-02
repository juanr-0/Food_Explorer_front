import {Logo_food_explorer } from './styles';
import polygon from '../../assets/polygon.svg';

export function PolygonTitle() {
  return (
    <Logo_food_explorer>
      <img src={polygon} alt="polygon" />
      <h1>food explorer</h1>
    </Logo_food_explorer>
  );
}
