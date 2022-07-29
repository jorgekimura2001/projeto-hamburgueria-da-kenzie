function ProductCart ({img, name, category, id, removeProduct}){
    
    return (
        <div>
            <img src={img} alt={name} />
            <div>
                <p>{name}</p>
                <p>{category}</p>
            </div>
            <button 
            onClick={() => removeProduct(id)}>Remover</button>
        </div>
    )
}
export default ProductCart