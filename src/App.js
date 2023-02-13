import React from "react";
import { Navigation } from "./components/Navigation";
import { ArticleSection2 } from "./components/Article/index";
import './section1.css';
import './section2.css';
import './section3.css';
import './footer.css';
import pokemonImagen from './images/pokemon.png';
import Pokemon1 from './images/pokemon1.png';
import Pokemon2 from './images/pokemon2.png';

const navItems = [
  {nombre:'Home', link:'/'},
  {nombre:'Pokemons', link:'/pokemons'},
  {nombre:'Support', link:'/support'},
  {nombre:'Contact Us', link:'/contact'},
  {nombre:'Josecito', link:'/contact'}
]

const pokemonInfo = [
  {name: 'Pokemon Name', descripton:'Pokemon Description', ability:'ability, ability, ability...'}
] 

function App() {
  return (
    <div className="App">
      <header className="Header">
          <h1 className="TitleE-Pokemon">e-Pokemon</h1>
        <Navigation items={navItems}/>
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
          <ArticleSection2 infoPoke={ pokemonInfo }/>

          <ArticleSection2 infoPoke={ pokemonInfo }/>
        </div>

        <div className="contentSection2">  
          <ArticleSection2 infoPoke={ pokemonInfo }/>
          
          <ArticleSection2 infoPoke={ pokemonInfo }/>
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
          <div className="contentPerson">
            <img className="imagenCrew" src={Pokemon1}/>
            <h2>Jose Manuel Rosa</h2>
            <p>El mandatario reafirmó su compromiso para trabajar con el gigante asiático, 
              pero remarcó que la defensa es la prioridad luego del derribo del globo espía 
              que sobrevolaba el territorio estadounidense
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <hr/>
        <div className="contentFooter">
          <h1 className="TitleE-Pokemon">e-Pokemon</h1>
          <Navigation items={navItems}/>
        </div>    
      </footer>
    </div>
  );
}

export default App;
