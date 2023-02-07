let productos = [{
    id: "1",
    nombre: "Skeletor",
    altura: 20,
    pintada: true,
    imagen: "/img/skeletor.jpeg",
    hotTrending: true,
    consumo: 100,
    categoria: "tradicionales"
},
{
    id: "2",
    nombre: "Androide 18 (maid)",
    altura: 20,
    pintada: true,
    imagen: "/img/androide18maid.jpeg",
    hotTrending: false,
    consumo: 100,
    categoria: "tradicionales"
},
{
    id: "3",
    nombre: "Alien",
    altura: 20,
    pintada: true,
    imagen: "/img/alien.jpeg",
    hotTrending: false,
    consumo: 100,
    categoria: "tradicionales"
},
{
    id: "4",
    nombre: "Mandalorian",
    altura: 20,
    pintada: true,
    imagen: "/img/mandalorian.jpeg",
    hotTrending: true,
    consumo: 100,
    categoria: "tradicionales"
},
{
    id: "5",
    nombre: "Genos",
    altura: 20,
    pintada: true,
    imagen: "/img/genos.jpeg",
    hotTrending: false,
    consumo: 100,
    categoria: "tradicionales"
},
{
    id: "6",
    nombre: "Alastor",
    altura: 20,
    pintada: true,
    imagen: "/img/alastorC.jpeg",
    hotTrending: false,
    consumo: 100,
    categoria: "tradicionales"
},
,
    {
        id: "7",
        nombre: "Esqueleto Lancero",
        altura: 5,
        pintada: false,
        imagen: "/img/esqueletoLanza.jpeg",
        hotTrending: false,
        consumo: 0,
        categoria: "personalizados"
    },
    {
        id: "8",
        nombre: "La Muerte Esquelética",
        altura: 5,
        pintada: false,
        imagen: "/img/esqueletoMuerte.jpeg",
        hotTrending: false,
        consumo: 0,
        categoria: "personalizados"
    },
    {
        id: "9",
        nombre: "Ejército Michis",
        altura: 5,
        pintada: false,
        imagen: "/img/ejercitoMichis.jpeg",
        hotTrending: false,
        consumo: 0,
        categoria: "personalizados"
    },
    {
        id: "10",
        nombre: "Michi Espadachín",
        altura: 5,
        pintada: false,
        imagen: "/img/michiEspada.jpeg",
        hotTrending: false,
        consumo: 0,
        categoria: "personalizados"
    }]

export const fetchProvisorio = () =>{
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res(productos)
        }, 500)
    })
}

export const precioXml = 40;

