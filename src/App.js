import React from "react";
import './header.css'; 
import './section1.css';
import pokemonImagen from './images/pokemon.png';

function App() {
  return (
    <div className="App">
      <header className="Header">
          <h1 className="TitleE-Pokemon">e-Pokemon</h1>
        <nav className="navHeader">
          <div >
            <a className="LicksHeader">Home</a>
            <a className="LicksHeader" href="/src/Pokemons/index.js">Pokemons</a>
            <a className="LicksHeader" href="/src/Support/index.js">Support</a>
            <a className="LicksHeader" href="/src/Contact Us/index.js">Contact Us</a>
          </div>
        </nav>
        <input className="searchHeader" type={Text}></input>

      </header>

      <section className="section1">
        <div className="contentSection1">
          <h2 className="h2Section1">If you wera a Pokemon, what would it be?</h2>
          <h1 className="h1Section1">Fine your Pokemon
          <br/>
           soul mate!</h1>
          <p1 className="p1Section1">
            Search, read, learn, compare and selects the pokemon that
            <br/>
             best represents you.
          </p1>
        </div>
        <img className="logoPokemon" src={pokemonImagen}/>   
      </section>  
    </div>
  );
}

export default App;
