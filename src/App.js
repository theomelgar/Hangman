import Jogo from "./components/Jogo"
import GLobalStyle from "./styles/GlobalStyle"
import forca0 from "./assets/forca0.png"
import forca1 from "./assets/forca1.png"
import forca2 from "./assets/forca2.png"
import forca3 from "./assets/forca3.png"
import forca4 from "./assets/forca4.png"
import forca5 from "./assets/forca5.png"
import forca6 from "./assets/forca6.png"
import { useState } from "react"
import Chute from "./components/Chute"
import Letras from "./components/Letras"
import styled from "styled-components"

function App() {
  function padronizarLetras(palavra) {
    return palavra.normalize("NFD").replace(/[^a-zA-Z\s]/g, "");
  }
  const forca = [forca0, forca1, forca2, forca3, forca4, forca5, forca6]
  const [erros, setErros] = useState(0)
  const [palavra, setPalavra] = useState("")
  const [chutar, setChutar] = useState("")
  const [letrasEscolhidas, setLetrasEscolhidas] = useState([])
  const [underline, setUnderline] = useState("")
  const [block, setBlock] = useState(true)
  const [comeco, setComeco] = useState(false)
  const [fim, setFim] = useState(false)
  const erroLimite = 6

  const jogo = {
    forca,
    erros, setErros,
    palavra, setPalavra,
    comeco, setComeco,
    underline, setUnderline,
    setLetrasEscolhidas,
    fim, setFim,
    setChutar,erroLimite
  }
  const letras = {
    letrasEscolhidas, setLetrasEscolhidas,
    block, setBlock,
    fim,setFim,
    padronizarLetras,
    palavra,
    underline, setUnderline,
    comeco, setComeco,
    erros, setErros,erroLimite
  }
  const chute = {
    chutar, setChutar,
    palavra, setErros,
    underline, setUnderline,
    setComeco, comeco,
    padronizarLetras,erroLimite
  }
  return (

    <AppDiv>
      <GLobalStyle />
      <Jogo jogo={jogo} />
      <Letras letras={letras}></Letras>
      <Chute chute={chute}></Chute>
    </AppDiv>)
}
const AppDiv=styled.div`
  width: 100%;
`
export default App;
