import { useState } from 'react';

export function TextArea() {
  const [descricao, setDescricao] = useState('');

  const handleDescricaoChange = (e) => {
    setDescricao(e.target.value);
  };

  return (
    <div>
      <label htmlFor="descricao">Descrição:</label>
      <textarea
        id="descricao"
        name="descricao"
        placeholder="Digite a descrição aqui"
        value={descricao}
        onChange={handleDescricaoChange}
        style={{
          width: '100%', // Define a largura do textarea
          minHeight: '100px', // Define a altura mínima para evitar que o textarea fique muito pequeno
          textAlign: 'left', // Alinha o texto à esquerda
        }}
      />
    </div>
  );
}