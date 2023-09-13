import React, { Component } from 'react';

export default class PokemonList extends Component {
  state = {
    pokemons: [],
  };

  componentDidMount() {
    // Здесь вы можете выполнить запрос к API для получения списка покемонов
    fetch('https://pokeapi.co/api/v2/pokemon?limit=1000') // Пример запроса с лимитом 20 покемонов
      .then(response => response.json())
      .then(data => {
        this.setState({
          pokemons: data.results, // Предполагается, что API возвращает массив объектов с именами покемонов
        });
      })
      .catch(error => console.error('Ошибка при загрузке данных:', error));
  }

  render() {
    const { pokemons } = this.state;

    return (
      <div>
        <h2>Pokemons</h2>
        <ul>
          {pokemons.map(pokemon => (
            <li key={pokemon.name}>{pokemon.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}
