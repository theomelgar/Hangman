import palavras from '../palavras.js';
import styled from "styled-components"


export default function Jogo(props) {
    const pJogo = props.jogo
    function escolherPalavra() {
        const nova = palavras[Math.floor(Math.random() * palavras.length)]
        pJogo.setPalavra(nova)
        quantidadeUnderlines(nova)
        inicioJogo()
    }
    function quantidadeUnderlines(palavra) {
        const palavraOculta = palavra.split("").map(() => "_")
        pJogo.setUnderline(palavraOculta.join(""))
        return palavraOculta
    }
    function inicioJogo() {
        pJogo.setErros(0)
        pJogo.setComeco(true)
        pJogo.setLetrasEscolhidas([])
        pJogo.setChutar("")
        pJogo.setFim(false)
    }
    const jogando = (
        <Jogando
            data-test="word"
            data-answer={pJogo.palavra}>
            {pJogo.underline}
        </Jogando>
    );

    const certo = (
        <Certo
            data-test="word"
            data-answer={pJogo.palavra}>
            {pJogo.underline}
        </Certo>
    );

    const errado = (
        <Errado
            data-test="word"
            data-answer={pJogo.palavra}>
            {pJogo.underline}
        </Errado>
    );
    const palavraCorreta = pJogo.erros === pJogo.erroLimite ? errado : certo
    const acabou = pJogo.palavra === pJogo.underline ? palavraCorreta : jogando
    return (
        <>
            <Layout>
                <ImgForca><img src={pJogo.forca[pJogo.erros]} alt="forca" data-test="game-image"/></ImgForca>
                <Butao onClick={escolherPalavra} data-test="choose-word">Escolher Palavra</Butao>
                <Underlines>{acabou}</Underlines>                
            </Layout>
        </>
    )
}

const Layout = styled.div`
    display: flex;
    justify-content:center;
    box-sizing: border-box;
    width: 100%;
    height: 600px;
    position: relative;
    @media (max-width: 1100px){
        width: 100%;
        height: 400px;
        margin:  0 14%;
    }
`

const ImgForca = styled.div`
    position: absolute;
    left: 10%;
    img{
        margin: 64px 40%;
        width: 400px;
        height: 466.67px;
    }
    @media (max-width:1100px) {
        left: 0;
        margin: 20px 0 ;
        img{
            width: 200px;
            height: 100%;
        }
    }
    `
const Butao = styled.div`
    position: absolute;
    right: 25%;
    top: 90px;
    width: 200px;
    height: 60px;
    background: #27AE60;
    border-radius: 8px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 20px;
    line-height: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #FFFFFF;
    z-index: 1;
    &:hover{
        cursor: pointer;
    }
    @media (max-width:1100px) {
        position: absolute;
        right: auto;
        top: 10px;
        z-index: 4;
    }
`
const Underlines = styled.div`
    width: 600px;
    height: 50px;
    position: absolute;
    right: 20%;
    bottom: 10%;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 700;
    font-size: 50px;
    line-height: 68px;
    display: flex;
    align-items: center;
    text-align: center;
    color: #000000;
    @media (max-width:1100px){
        font-size: 20px;
        bottom: 0;
        left:70px
    }

`
const Jogando = styled.div`
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 4px;
`
const Certo = styled.div`
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 4px;
    color: green;
`
const Errado = styled.div`
    font-size: 50px;
    font-weight: 700;
    letter-spacing: 4px;
    color: red;
`