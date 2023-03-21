import React from "react";

export default function Meme() {

    function getMemeImage() {
        console.log("Clicked");
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
        </div>
    )
}