import styled from 'styled-components'

export const DivPets = styled.div `
    background-color: rgb(243, 240, 255);
    border: solid;
    font-family: sans-serif;
    font-size: 1em;
    color: rgb(83, 37, 158);
    margin-top: 2%;
    justify-content: center; 
    border-radius: 5px;
`

const CadastroPets = (props)=>{
    return(
        <DivPets>
            <p>Nome: </p>
            <p>Idade: </p>
            <p>Raça: </p>
            <p>Tamanho: </p>
            <p>Nome do Dono: </p>
            <img src="" alt="" />
            <p>Obs: </p>
        </DivPets>
    )
}