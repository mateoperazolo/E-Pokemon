import React from "react";
import './header.css'; 
import './section1.css';
import './section2.css';
import './section3.css';
import pokemonImagen from './images/pokemon.png';
import pokeballImagen from './images/icons8-pokeball-48.png';
import Pokemon1 from './images/pokemon1.png';
import Pokemon2 from './images/pokemon2.png';


function App() {
  return (
    <div className="App">
      <header className="Header">
          <h1 className="TitleE-Pokemon">e-Pokemon</h1>
        <nav className="navHeader">
          <div >
            <a className="LicksHeader">Home</a>
            <a 
            className="LicksHeader" 
            href="/src/Pokemons/index.js">Pokemons</a>
            <a 
            className="LicksHeader"
            href="/src/Support/index.js">Support</a>
            <a 
            className="LicksHeader" 
            href="/src/Contact Us/index.js">Contact Us</a>
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

      <section className="section2">
        <h1 className="h1Section2">The important ones!</h1>

        <div className="contentSection2">
          <article className="articleSection2">
            <h2>Pokemon name</h2>
            <div className="contentArticleSection2">
              <img className="pictureSection2" src={pokeballImagen}/>
              <h3>Pokemon description</h3>
            </div>
            <p1>ability,ability,ability,ability,ability...</p1>
          </article>
          
          <article className="articleSection2">
            <h2>Pokemon name</h2>
            <div className="contentArticleSection2">
              <img className="pictureSection2" src={pokeballImagen}/>
              <h3>Pokemon description</h3>
            </div>
            <p1>ability,ability,ability,ability,ability...</p1>
          </article>
        </div>

        <div className="contentSection2">  
          <article className="articleSection2">
            <h2>Pokemon name</h2>
            <div className="contentArticleSection2">
              <img className="pictureSection2" src={pokeballImagen}/>
              <h3>Pokemon description</h3>
            </div>
            <p1>ability,ability,ability,ability,ability...</p1>
          </article>
          
          <article className="articleSection2">
            <h2>Pokemon name</h2>
            <div className="contentArticleSection2">
              <img className="pictureSection2" src={pokeballImagen}/>
              <h3>Pokemon description</h3>
            </div>
            <p1>ability,ability,ability,ability,ability...</p1>
          </article>

        </div>

      </section>

      <section className="section3">
        <h1 className="h1Section3">The Crew!</h1>
        <div className="contentSection3">
          <div className="contentPerson">
            <img className="imagenCrew" src={Pokemon2}/>
            <h2>Mateo Perazolo</h2>
            <p>La visita a la capital francesa tiene lugar después de que el presidente ucraniano 
                  viajara a Londres, donde se reunió con el primer ministro, Rishi Sunak, el rey, 
                  Carlos III, y dio un discurso ante el Parlamento
            </p>
          </div>

          <div>
            <img className="imagenCrew" src={Pokemon1}/>
            <h2>Jose Manuel Rosa</h2>
            <p>El mandatario reafirmó su compromiso para trabajar con el gigante asiático, 
              pero remarcó que la defensa es la prioridad luego del derribo del globo espía 
              que sobrevolaba el territorio estadounidense
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
