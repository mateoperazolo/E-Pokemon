import React from "react";
import pokeballImagen from './icons8-pokeball-48.png';
import './articleSection2.css';

function ArticleSection2 (props) {
    return (
        <article className="articleSection2">
            {props.infoPoke.map((info) => {
                return (
                    <><h2>{info.name}</h2><div className="contentArticleSection2">
                        <img className="pictureSection2" src={pokeballImagen} />
                        <h3>{info.descripton}</h3>
                    </div><p1>{info.ability}</p1><hr /></>
                )
            })}    
        </article>
    )
}

export { ArticleSection2 }