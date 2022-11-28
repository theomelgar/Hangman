import styled from "styled-components"

export default function Chute(props) {
    const pChute = props.chute
    const chuteInativo = pChute.underline === pChute.palavra;
    //VERIFICA SE ACERTOU
    function verifica() {
        const palavraSelecionada = pChute.padronizarLetras(pChute.palavra).toUpperCase()
        const palavraChute = pChute.padronizarLetras(pChute.chutar).toUpperCase()
        if (palavraChute === palavraSelecionada) {

        }
        else { 
            pChute.setErros(pChute.erroLimite)
        }
        pChute.setComeco(false)
        pChute.setChutar("")
        pChute.setUnderline(pChute.palavra)
    }
    return (
        <ChuteDiv>
            <span>Já sei a palavra!</span>
            <input
                type="text"
                onChange={(e) => pChute.setChutar(e.target.value)}
                value={pChute.chutar}
                disabled={chuteInativo}
                data-test="guess-input"
            />
            <button onClick={verifica} disabled={chuteInativo} data-test="guess-button">Chutar</button>
        </ChuteDiv>
    )
}
//ESTILOS
const ChuteDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap:15px;
    margin-top: 30px;
    span{   
        width: 144px;
        height: 23px;

        font-family: 'Roboto';
        font-style: normal;
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        display: flex;
        align-items: center;
        text-align: center;

        color: #000000;
    }
    input{
        width: 353px;
        height: 40px;

        background: #FFFFFF;
        border: 1px solid #CCCCCC;
        box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.25);
        border-radius: 3px;
    }
    button{
        cursor: pointer;
        width: 100px;
        height: 40px;

        background: #E1ECF4;
        border: 1px solid #7AA7C7;
        border-radius: 3px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: 700;
        font-size: 16px;
        line-height: 19px;
        text-align: center;
        color: #3C76A1;
        &:disabled{
            border: 1px solid #7aa7c7;
            color: #798a9f;
            cursor: default;
            background: #9faab5;
        }
    }
`