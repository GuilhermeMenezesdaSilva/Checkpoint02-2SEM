import React from 'react'
import {DivPets} from '.././style/styled'


export default function PetCadastro(props) {
  return (
    <div>   
        <DivPets>
        <form method="POST" onSubmit={props.addPet}>
            <div>
                <label>Nome</label>
                <input type="text" name="nome" placeholder="Nome" value={props.newPet.nome} onChange={props.addPet}/>
            </div>
            <div>
                <label>Idade</label>
                <input type="text" name="idade" placeholder="Idade" value={props.newPet.idade} onChange={props.addPet}/>
            </div>
            <div>
                <label>Raça</label>
                <input type="text" name="raca" placeholder="Raça" value={props.newPet.raca} onChange={props.addPet}/>
            </div>
            <div>
                <label>Tamanho</label>
                <input type="number" name="tamanho" placeholder="Tamanho" value={props.newPet.tamanho} onChange={props.addPet}/>
            </div>
            <div>
                <label>Nome do Dono</label>
                <input type="text" name="nomeDono" placeholder="Nome Do Dono" value={props.newPet.nomeDono} onChange={props.addPet}/>
            </div>
            <div>
                <label>Telefone</label>
                <input type="text" name="telDono" placeholder="Telefone" value={props.newPet.telDono} onChange={props.addPet}/>
            </div>
            <div>
                <label>Foto do Pet</label>
                <input type="file"  name="fotoPet" placeholder="Foto do Pet" value={props.newPet.imgPet} onChange={props.addPet}/>
            </div>
            <div>
                <label>Observações</label>
                <input type="text" name="observacoes" placeholder="Observacoes" value={props.newPet.observacoes} onChange={props.addPet}/>
            </div>
            <div>
                <button type='submit'>Enviar Informaçoes</button>
            </div>
        </form>
        </DivPets>
    </div>
  )
}
