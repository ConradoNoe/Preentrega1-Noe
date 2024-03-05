import "./CardProduct.css"

export const CardProduct = (props) =>{
    
    const {producto,precio,stock,} = props //desestructuro objeto props
    console.log(props)
    
    return(
        <>
            <div className="card-container">
                    <h3 className="card-title">Producto: {producto}</h3>
                    <p>Precio: {precio}</p>
                    <p>Stock: {stock}</p> 
            </div>
        </>
    )
}