import { MagnifyingGlass } from "@phosphor-icons/react";

import { SearchInput } from '../SearchInput';

import { Container } from './styles';

export function Search({search}) {

  return (
    <Container>
      <SearchInput
          icon={MagnifyingGlass}
          placeholder="Busque por pratos ou ingredientes"
          type="text"
          search={search}
        />
    </Container>
  );
};