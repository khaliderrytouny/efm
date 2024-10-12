import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { supprimepan } from './Efm/action';

export default function Panier() {
    const dispatch = useDispatch();
    const panier = useSelector(data => data.panier);

    const supprime = (id) => {
        dispatch(supprimepan({id:id}));
    };

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nom</th>
                        <th>prix</th>
                        <th>supprime au panier</th>
                    </tr>
                </thead>
                <tbody>
                    {panier.map((prod, i) => {
                        return (
                            <tr key={i}>
                                <td>{prod.id}</td>
                                <td>{prod.nom}</td>
                                <td>{prod.prix}</td>
                                <td><button className='btn btn-danger' onClick={() => supprime(prod.id)}>supprime</button></td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <p>
            {
                panier.reduce((total,panie)=>{
                         return total+=Number(panie.prix)
                },0)
            }
            </p>
        </div>
    );
}
