import styled from "styled-components"

export default function Chute(props){

    function chutarPalavra(e) {
        props.chute.setChutar(e.target.value);
        props.chute.setChutar("")
    }
    return(
        <div>
        <span>Já sei a palavra!</span>
        <input
                type="text"
                placeholder=""
                onChange={chutarPalavra}
                value={props.chute.chutar}
            />
        <button onClick={chutarPalavra}>Chutar</button>
        </div>
            
           
    )
}

// const chuteDiv=styled.div`

// `