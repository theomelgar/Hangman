import React, { useState } from "react"
import palavras from '../palavras.js';
import styled from "styled-components"


export default function Jogo(props) {
    let erros = 4

    return (
        <>
            <Layout>
                <ImgForca><img src={props.forca[erros]} /></ImgForca>
                <Butao>Escolher Palavra</Butao>
                <Underlines></Underlines>
            </Layout>
        </>
    )
}

const Layout = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
`

const ImgForca = styled.div`
    img{
        width: 700px;
        height: 650px;
        margin-top: 10%;
        margin-left: 30%;
        width: 400px;
        height: 466.67px;
    }
    `
const Butao = styled.div`
    position: fixed;
    right: 30%;
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
    &:hover{
        cursor: pointer;
    }
`
const Underlines = styled.div`
    width: 900px;
    height: 650px;
    margin: 50px 20px;
    position: relative;
`