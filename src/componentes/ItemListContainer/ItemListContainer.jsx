import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchProvisorio, precioXml } from "../../data/fetchProvisorio";

// Creacion de variable para el facil cambio de precios de los productos (el cliente determina el precio x ml y cada producto tiene un precio segun el consumo de ml)



//obtencion de stock desde el json

const ItemListContainer = ({}) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)

    const { idCategoria } = useParams()

    useEffect(()=>{
        if (idCategoria){
            fetchProvisorio()
                .then(res =>{
                    setProductos(res.filter(producto => producto.categoria === idCategoria)
                    )})
                .catch(error => console.log(error))
                .finally(()=>setCargando(false))
        }
        else{
            fetchProvisorio()
                .then(res =>{
                    setProductos(res)
                    })
                .catch(error => console.log(error))
                .finally(()=>setCargando(false))
        }
    },[idCategoria])

    return (
            cargando ? <h2>Estamos cargando los datos, por favor aguarde...</h2>:
            
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
                }} >
                { productos.map(producto =>   (
                    <div key={producto.id} className='card w-50 mt-2'>
                        <div className='card-header'>
                            Nombre: {producto.nombre}
                        </div>
                        <div className='card-body'>
                            <img src={producto.imagen} alt={`figura impresa en 3D de ${producto.nombre}`}className="w-100"/>
                            Categoria: {producto.categoria}<br/>
                            Tamaño: {producto.altura}cm<br/>
                            Precio: $ {producto.consumo*precioXml}
                        </div>
                        <div className='card-footer'>
                            <Link to={`/detalle/${producto.id}`}>
                            {<button className="btn btn-outline-primary w-100">Detalle</button>}
                            </Link>
                        </div>
    
                    </div>
                    )
                )}
    
                
                </div>

    )
}

export default ItemListContainer