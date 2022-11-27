import styled from "styled-components"
import { useState } from "react"

export default function Chute(props){
    const [input,setInput] = useState("")
    function chutarPalavra() {
        setChutar(props.Chute)
        setInput("")
    }
    return(
        <chuteDiv>
        <span>Já sei a palavra!</span>
        <input
                type="text"
                placeholder=""
                onChange={(e) => setInput(e.target.value)}
                value={input}
            />/>
        <buttonChutar onClick={chutarPalavra}>Chutar</buttonChutar>
        </chuteDiv>
            
           
    )
}
