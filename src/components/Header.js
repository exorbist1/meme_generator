import React  from "react";

export default function Header() {
    return(
        <header className ="header">
            <img className ="header--image" src ="https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png" alt = "troll face"/>
            <h1 className="header--title"> Meme Generator</h1>
            <h4 className="header--desc"> React Course - Project 3</h4>
        </header>

    )
}