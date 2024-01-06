import axios from 'axios';
import { head } from 'lodash';
import Swal from 'sweetalert2'

export function getProveedor(){
    return axios.get('http://localhost:8081/proveedor'); 
};

export function saveRegistry (dataRegistry,headers){
    return axios.post('http://localhost:8081/registro', dataRegistry,headers
    )
    
};
export function updateRegistry(dataUpdate,headers){
    return axios
        .put('http://localhost:8081/registro', dataUpdate, headers)
        
}
export function deletePeticion(idDel){
    return axios.delete(`http://localhost:8081/registro/${idDel}`, head)

}

export function getRegistros(headers){
    return  axios.get("http://localhost:8081/registro", headers);
}
export function getDatosGraphic(headers){
    return axios.get("http://localhost:8081/registro/datos",headers);
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
