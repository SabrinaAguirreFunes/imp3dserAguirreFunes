import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchProvisorio, precioXml } from "../../data/fetchProvisorio";


const ItemDetailContainer = ({}) => {
  const {idProducto} = useParams()
  console.log(idProducto)

  const [producto, setProductos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(()=>{
        
            fetchProvisorio()
                .then(res =>{
                    setProductos(res.find(producto => producto.id === idProducto)
                    )})
                .catch(error => console.log(error))
                .finally(()=>setCargando(false))
        
    },[])

    console.log(producto)

  return (
            cargando ? <h2>Estamos cargando los datos, por favor aguarde...</h2>:

            <div style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap'
                }} >
                
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
                    
    
                
            </div>
  )
}

export default ItemDetailContainer