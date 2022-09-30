import React from 'react'

export default function Pets(props) {
  return (
    <div>
        <p>Nome: {props.nome}</p>
        <p>Idade: {props.idade}</p>
        <p>Raça: {props.raca}</p>
        <p>Tamanho: {props.tamanho}</p>
        <p>Nome do Dono: {props.nomeDono}</p>
        <img src={props.imgPet} alt="Pet" />
        <p>Obs:{props.observacoes}</p>
    </div>        
     )
}
