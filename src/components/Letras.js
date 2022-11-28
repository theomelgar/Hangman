import styled from "styled-components"

export default function Letras(props) {
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const letras = alfabeto.map((l) => (
        {
            letra: l.toUpperCase()
        }))
        
    return (
        <LetrasDiv>
            {letras.map((letra) =>{
                const letraInativa = !(props.letras.fim) ? true : letra.bloqueada;
                return(
                    <LetraButao
                        data-test="letter"
                        key={letra.letra}
                        onClick={letra.jogada}
                        bloqueada={letraInativa}
                    >
                        {letra.letra}
                    </LetraButao>
                )
                })}
        </LetrasDiv>
    )
}
const LetrasDiv = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    width: 80%;
    max-width: 680px;
    height: 100%;
    margin: 0 auto;
    @media (max-width: 850px) {
        width: 470px;
    }
    @media (max-width: 600px) {
        width: 100%;
        max-width: 300px;
    }
`;

const LetraButao = styled.button`
    width: 40px;
    height: 40px;
    margin: 6px;
    color: #39739D;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    text-align: center;
    background: #e1ecf4;
    border: 1px solid #7aa7c7;
    border-radius: 3px;
    cursor: pointer;
    &:disabled{
        color: #798a9f;
        background: #9faab5;
        border: 1px solid #7aa7c7;
        cursor: default;
    }
    @media (max-width: 450px) {
        margin: 5px;
        width: 45px;
        height: 45px;
    }
`;
