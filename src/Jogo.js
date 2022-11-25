import React, { useState } from "react"
export default function Jogo() {
    return (
        <div className="Jogo">
            <img className="forca" src="./assets/forca0.png" />
            <button onClick={Escolher} className="escolher">Escolher Palavra</button>
            <div className="underlines"></div>
        </div >
    )
}

function Escolher() {
    const palavra = [prompt("Qual a palavra?")]
    const under = []
    const [underlines, Setunderlines] = useState("")
    palavra.map((n) => Setunderlines(underlines + "_"))
    return (<>
        <img className="forca" src="./assets/forca0.png" />
        <button onClick={Escolher} className="escolher">Escolher Palavra</button>
        <div className="underlines">{underlines}</div>
    </>

    )

}