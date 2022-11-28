import palavras from '../palavras.js';
import styled from "styled-components"


export default function Jogo(props) {
    function escolherPalavra(){
        props.jogo.setPalavra("nova")
    }
    props.jogo.setErros(6)
    return (
        <>
            <Layout>
                <ImgForca><img src={props.jogo.forca[props.jogo.erros]} alt="forca" /></ImgForca> 
                <Butao onClick={escolherPalavra}>Escolher Palavra</Butao>
                <Underlines></Underlines>
                <div>{props.jogo.palavra}</div>
            </Layout>
        </>
    )
}

const Layout = styled.div`
    display: flex;
    justify-content:center;
    box-sizing: border-box;
    height: 600px;
`

const ImgForca = styled.div`
    img{
        margin: 64px 40%;
        width: 400px;
        height: 466.67px;
    }
    @media (max-width:1000px) {
        max-width:10px;
        
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
    @media (max-width:1000px) {
        position: absolute;
        right: auto;
        top: 10px;
        z-index: 4;
    }
`
const Underlines = styled.div`
    width: 900px;
    height: 650px;
    margin: 50px 20px;
    position: relative;
`