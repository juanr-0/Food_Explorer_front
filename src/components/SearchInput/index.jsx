import { Container } from './styles';

export function SearchInput({icon: Icon, search,...rest }) {
  return (
    <Container>
      {Icon && <Icon />}
      <input  onChange={e => {search(e.target.value)}}
      {...rest} 
      />
    </Container>
  );
};