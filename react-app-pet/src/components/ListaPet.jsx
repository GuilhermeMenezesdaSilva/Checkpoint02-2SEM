import React, {useState} from 'react'
import PetCadastro from './PetCadastro'
import {DivPets} from '../../style/styled'
import Pets from "./Pets"

export default function ListaPet() {


    const[pet, setPet] = useState({"nome":"","idade":"","raca":"","tamanho":"","nomeDono":"","telDono":"","imgPet":"","observacoes":""})

    const addPet= (e)=> {
        e.preventDefault()
        setPet({"titulo":"","setor":"","descricao":""})
        setPet([...pet, pet])
    }

    const captura = (e)=>{
        e.preventDefault()
        const {name, value} = e.target

        if(name === "nome"){
            setPet({"nome" : value , "idade" : pet.idade, "raca" : pet.raca, "tamanho" : pet.tamanho, "nomeDono" : pet.nomeDono,"telDono" : pet.idade, "imgPet" : pet.raca,"observacoes" : pet.observacoes})
        }else if(name === "idade"){
            setPet({"nome" : pet.nome , "idade" : value, "raca" : pet.raca,"tamanho" : pet.tamanho, "nomeDono" : pet.nomeDono,"telDono" : pet.idade, "imgPet" : pet.raca,"observacoes" : pet.observacoes})
        }else if(name === "raca"){
            setPet({"nome" : pet.nome , "idade" : pet.idade, "raca" : value,"tamanho" : pet.tamanho, "nomeDono" : pet.nomeDono,"telDono" : pet.idade, "imgPet" : pet.raca,"observacoes" : pet.observacoes})
        
        }else if(name === "tamanho"){
            setPet({"nome" : pet.nome , "idade" : pet.idade, "raca" : pet.raca, "tamanho" : value, "nomeDono" : pet.nomeDono,"telDono" : pet.idade, "imgPet" : pet.raca,"observacoes" : pet.observacoes})
        }else if(name === "nomeDono"){
            setPet({"nome" : pet.nome , "idade" : pet.idade, "raca" : pet.raca,"tamanho" : pet.tamanho, "nomeDono" : value,"telDono" : pet.idade, "imgPet" : pet.raca,"observacoes" : pet.observacoes})
        }else if(name === "telDono"){
            setPet({"nome" : pet.nome , "idade" : pet.idade, "raca" : pet.raca,"tamanho" : pet.tamanho, "nomeDono" : pet.nomeDono,"telDono" : value, "imgPet" : pet.raca,"observacoes" : pet.observacoes})
        }
        else if(name === "imgPet"){
            setPet({"nome" : pet.nome , "idade" : pet.idade, "raca" : pet.raca, "tamanho" : pet.tamanho, "nomeDono" : pet.nomeDono,"telDono" : pet.idade, "imgPet" : value,"observacoes" : pet.observacoes})
        }else if(name === "observacoes"){
            setPet({"nome" : pet.nome , "idade" : pet.idade, "raca" : pet.raca,"tamanho" : pet.tamanho, "nomeDono" : pet.nomeDono,"telDono" : pet.idade, "imgPet" : pet.raca,"observacoes" : value})
        }
    }
  return (
    <DivPets>
        <PetCadastro
        dados = {captura}
        addPet = {addPet}
        newPet = {pet}/>

        {pet.map((tar,i) =>(
            <Pets
            key={i}
            nome= {tar.nome}
            idade= {tar.idade}
            raca= {tar.raca}
            tamanho= {tar.tamanho}
            nomeDono= {tar.nomeDono}
            telDono= {tar.telDono}
            imgPet= {tar.imgPet}
            observacoes= {tar.observacoes}
/>
        ))}
    </DivPets>
    

    )
  }
