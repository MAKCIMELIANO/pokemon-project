import { Component } from 'react';

import PokemonForm from './components/PokemonForm';
import PokemonInfo from './components/PokemonInfo';
import PokemonList from './components/PokemonList';

export default class App extends Component {
  state = {
    pokemonName: '',
  };

  handleFormSubmit = pokemonName => {
    this.setState({ pokemonName });
  };

  render() {
    return (
      <div style={{ maxWidth: 1170, margin: '0 auto', padding: 20 }}>
        <PokemonForm onSubmit={this.handleFormSubmit} />
        <PokemonInfo pokemonName={this.state.pokemonName} />
        <PokemonList />
      </div>
    );
  }
}
