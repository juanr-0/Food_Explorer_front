import { Container } from './styles'
import arrow_left from '../../assets/arrowLeft.svg';


export function ButtonText({ title, isActive = false, ...rest }) {
  return (
    <Container
      type="button"
      $isactive={isActive.toString()}
      {...rest}
    >
      <img src={arrow_left} alt="arrowLeft"/>
      {title}
    </Container>
  )
}