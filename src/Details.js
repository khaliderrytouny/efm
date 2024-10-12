import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { ajouterpan } from './Efm/action'
export default function Details() {
    const produit=useSelector(data=>data.produit)
    const dispatch=useDispatch()
    const ajouterpanier=(panie)=>{
         dispatch(ajouterpan(panie))
    }
  return (
    <div>
      <select >
    <option>--------</option>
    {
      produit.map((prod,i)=>{
        <option value={prod.nom}></option>
      })
    }

   
      </select>
        <table className='table'>
            <thead>
               <tr>
                <th>id</th>
                <th>nom</th>
                <th>prix</th>
                <th>stock</th>
                <th>ajouter au panier</th>
               </tr>
            </thead>
            <tbody>
                {
                    produit.map((prod,i)=>{
                      return(
                       <tr key={i}>
                        <td>{prod.id}</td>
                        <td>{prod.nom}</td>
                        <td>{prod.prix}</td>
                        <td>{prod.stock}</td>
                        <td><button className='btn btn-success'  onClick={()=>{ajouterpanier({id:prod.id,nom:prod.nom,prix:prod.prix})}}>Ajouter au panier</button></td>
                       </tr>
                      )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}
