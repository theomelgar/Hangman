import styled from "styled-components"

export default function Letras(props) {
    const pLetras = props.letras
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
    const letras = alfabeto.map((l) => (
        {
            key: l,
            letra: l.toUpperCase(),
            bloqueada: pLetras.letrasEscolhidas.includes(l),
            jogada: () => jogada(l)
        }))

    function jogada(letra) {
        pLetras.setLetrasEscolhidas([...pLetras.letrasEscolhidas, letra])
        const listaPalavras = pLetras.padronizarLetras(pLetras.palavra).split('')
        const acerto = listaPalavras.indexOf(letra) !== -1
        const palavraOcultaLista = pLetras.underline.split('')
        const palavraOcultaNova = acerto ? revelarLetras(letra, listaPalavras, palavraOcultaLista).join('') : pLetras.underline
        if (acerto) {
            pLetras.setUnderline(palavraOcultaNova)
        } else {
            const novoErro = pLetras.erros + 1
            pLetras.setErros(novoErro)
            if (novoErro === pLetras.erroLimite) {
                pLetras.setUnderline(pLetras.palavra)
                pLetras.setComeco(false)
            }
        }
        winCondition(palavraOcultaNova)
    }
    function revelarLetras(letra, palavraLista, palavraListaOculta) {
        while (palavraLista.indexOf(letra) !== -1) {
            const index = palavraLista.indexOf(letra)
            palavraListaOculta[index] = pLetras.palavra[index]
            palavraLista[index] = "_"
            pLetras.setFim(true)
        }
        return palavraListaOculta;
    }


    function winCondition(oculta) {
        if (oculta === pLetras.palavra) {
            pLetras.setUnderline(pLetras.palavra)
            pLetras.setComeco(false)
            pLetras.setFim(true)
        }
    }
    return (
        <LetrasDiv>
            {letras.map((letra) => {
                const letraInativa = !(pLetras.comeco) ? true : letra.bloqueada
                return (
                    <LetraButao
                        key={letra.letra}
                        onClick={letra.jogada}
                        disabled={letraInativa}
                        data-test="letter"
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
    margin: 0px auto;
    @media (max-width: 1100px) {
        width: 100%;
        margin: 0 0;
    }
`;

const LetraButao = styled.button`
    cursor: pointer;
    width: 40px;
    height: 40px;
    margin: 6px;
    color: #39739D;
    font-size: 16px;
    font-weight: 700;
    align-items: center;
    text-align: center;
    border-radius: 3px;
    background: #e1ecf4;
    border: 1px solid #7aa7c7;

    &:disabled{
        border: 1px solid #7aa7c7;
        color: #798a9f;
        cursor: default;
        background: #9faab5;
    }
    @media (max-width: 1100px) {
        margin: 5px;
    }
`;
