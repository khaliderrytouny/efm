const produit={
    produit:[],
    panier:[]
}

export const reducer=(state=produit,action)=>{
switch (action.type) {
    case 'ajouter':
     return {...state,produit:[...state.produit,action.payload]}
    case 'ajouterpan':
        return {...state,panier:[...state.panier,action.payload]}
    case 'supprimepan':
        return {...state,panier:[...state.panier.filter(panie=>panie.id!==action.payload.id)]}
    default:
        return state
}
}

