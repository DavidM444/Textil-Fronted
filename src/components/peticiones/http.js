import axios from 'axios';
import Swal from 'sweetalert2'

export function getProveedor(hdr){
    return  axios.get('http://localhost:8081/proveedor',hdr); 
};

export function saveRegistry (dataRegistry,headers){
    return axios.post('http://localhost:8081/registro', dataRegistry,headers
    )
    
};
export function updateRegistry(dataUpdate,headers){
    return axios
        .put('http://localhost:8081/registro', dataUpdate, headers)
        
}
export function deletePeticion(idDel, head){
    return axios.delete(`http://localhost:8081/registro/${idDel}`, head)

}

export function getRegistros(headers){
    return  axios.get("http://localhost:8081/registro", headers);
}

//only 1 register
export function getUnicoRegistro(headers, id){
    return axios.get("http://localhost:8081/registro/"+id,headers);
}

export function getDatosGraphic(headers){
    return axios.get("http://localhost:8081/registro/datos",headers);
}

//traer datos de ususarios para el admin
export function getAllUsers(headers){
    return axios.post("http://localhost:8081/registro", headers);
}

export function SwalFireAlert(icono, titulo, texto, boton){
    Swal.fire(
        {
            icon: icono,
            title: titulo,
            text: texto,
            confirmButtonText: boton
        } 
    )
}
