import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ajouter } from './Efm/action'
export default function Acceuil() {
  const [id,setid]=useState("")
  const [nom,setnom]=useState("")
  const [prix,setprix]=useState("")
  const [stock,setstock]=useState("")
  const dispatch=useDispatch()
  const ajouterproduit=(prod)=>{
         dispatch(ajouter(prod))
  }
  return (
    <div>
      <input type='text' placeholder='id' onChange={(e)=>{setid(e.target.value)}}/>
      <input type='text' placeholder='nom' onChange={(e)=>{setnom(e.target.value)}}/>
      <input type='text' placeholder='prix' onChange={(e)=>{setprix(e.target.value)}}/>
      <input type='text' placeholder='stock' onChange={(e)=>{setstock(e.target.value)}}/>
      <button className='btn btn-info' onClick={()=>{ajouterproduit({id:id,nom:nom,prix:prix,stock:stock})}}>Ajouter</button>
    </div>
  )
}
