import React from 'react';
import errorImage from './error.jpg';

export default function PokemonErrorView({ message }) {
  return (
    <div>
      <img src={errorImage} width="240" alt="cat" />
      <p>{message}</p>
    </div>
  );
}
