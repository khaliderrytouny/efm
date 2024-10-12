export const ajouter=(produit)=>{
    return {type:'ajouter',payload:produit}
}
export const ajouterpan=(produit)=>{
    return {type:'ajouterpan',payload:produit}
}
export const supprimepan=(id)=>{
      return {type:'supprimepan',payload:id}
}