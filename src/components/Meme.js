import React from "react";
import memesData from "./memesData";

export default function Meme() {

    const [memeImage, setMemeImage] = React.useState("");

    function getMemeImage() {
        console.log("Clicked");
    }

    function getMemeImage() {
        const memesArray = memesData.data.memes; 
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    return(
        <div>
            <div className="form">
                <input className="form--input"  placeholder="text goes here" type="text" />
                <input className="form--input"  placeholder="text goes here" type="text" />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                     Get a new meme image 🖼
                </button>
            </div>

            <img className="meme--image"src={memeImage} />
        </div>
    )
}