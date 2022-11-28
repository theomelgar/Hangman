import styled from "styled-components"

export default function Chute(props){

    function chutarPalavra(e) {
        props.chute.setChutar(e.target.value);
    }
    return(
        <div>
        <span>Já sei a palavra!</span>
        <input
                type="text"
                onChange={chutarPalavra}
                value={props.chute.chutar}
            />
        <button onClick={chutarPalavra}>Chutar</button>
        </div>
            
           
    )
}

// const chuteDiv=styled.div`

// `