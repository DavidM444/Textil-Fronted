<template >
     <div class="popup container">
            
            <div class="row d-flex justify-content-center ">
                <h2 class="row d-flex justify-content-center">Formulario de Calidad de Tela</h2>

                <form class="row" @submit.prevent="submitform" > 
                    <div class="col">
                        <div class="form-group">
                            <label for="Rollo">Rollo</label>
                            <input v-model="formData.rollo" type="text" id="rollo" name="rollo" required>
                        </div>

                        <div class="form-group">
                            <label for="peso">Peso</label>
                            <input v-model="formData.peso" type="number" step="0.001" id="peso" name="peso" placeholder="Kg" required>
                        </div>

                        <div class="form-group">
                            <label for="valoracion">Valoracion Grises</label>
                            <input v-model="formData.valoracion" type="text" id="valoracion" name="valoracion" min="0" max="15" placeholder="Rango > 0" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="proveeddor">Provedor</label>
                            <select  v-for="(prov,index) in proveedor" :key="index" id="proveedor" name="proveedor" v-model="formData.proveedor">
                                <option :value="prov.id" >{{ modoEdicion?  formData.proveedor : prov.nombre}}</option> //usar prov.nombre o proveedor.nombre
                                
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="fecha">Fecha de Registro:</label>
                            <input type="date" id="fecha" name="fecha" required v-model="formData.fecha">
                        </div>
                    
                    </div>
                    <div class="col">
                       
                      
                        <div class="form-group">
                            <label for="absorcion">Absorción Pilling:</label>
                            <input v-model="formData.cantidad" id="cantidad" name="cantidad" placeholder="Cantidad(g)" required>
                            <input v-model="formData.tiempo"  id="tiempo" name="tiempo" placeholder="Tiempo(s)" required>
                            <select name="rango" id="rango" v-model="formData.rango">
                                <option value="1">Cambio Severo</option>
                                <option value="2">Cambio Considerable</option>
                                <option value="3">Formacion Pilling</option>
                                <option value="4">Pilling</option>
                                <option value="5">No Hay Pilling</option>
                            </select>
                            
                        </div>
                        <div class="form-group">
                            <label for="cuatropuntos">Cuatro Puntos:</label>
                            <input v-model="formData.puntuacion" type="number" id="cuatropuntos" name="cuatropuntos" required>
                        </div>
                        
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="">Dimensiones</label>
                            <input type="number" step="0.01" name="ancho" id="ancho" placeholder="ancho" title="use valores en cm" v-model="formData.ancho">
                            <input type="number" step="0.01" name="alto" id="alto" placeholder="alto" v-model="formData.altura">

                        </div>
                        <div class="form-group">
                            <label for="tipoTela">Tipo de Tela</label>
                            <select v-model="formData.tipoTela" name="telas" id="telas">
                                <option value="Algodon">Algodon</option>
                                <option value="Lino">Lino</option>
                                <option value="Seda">Seda</option>
                                <option value="Lana">Lana</option>
                                <option value="Poliester">Poliester</option>
                                <option value="Nylon">Nylon</option>
                                <option value="Denim">Denim</option>
                                <option value="Terciopelo">Terciopelo</option>
                                <option value="Saten">Saten</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="color">Color</label>
                            <select v-model="formData.color" name="colores" id="color">
                                <option value="Azul">Azul</option>
                                <option value="Rojo">Rojo</option>
                                <option value="Verde">Verde</option>
                                <option value="Negro">Negro</option>
                                <option value="Amarillo">Amarillo</option>
                                <option value="Blanco">Blanco</option>
                                <option value="Cafe">Cafe</option>
                            </select>
                        </div>

                    </div>
                    <div class="form-group text-center">
                       
                        <button type="submit" class="btn btn-primary">{{ modoEdicion ? 'Actualizar' : 'Guardar' }}</button>
                        <button @click.prevent="clear" class="btn btn-danger close-popup">Cerrar</button>
                    </div>

                </form>
                
            </div>
            <foter></foter>        
        </div>
</template>

<script>
import axios from 'axios';
import foter from './footer.vue'

import _ from 'lodash';
import { saveRegistry, getProveedor, updateRegistry, SwalFireAlert } from './peticiones/http'

console.log("evento form ",);

export default{
    
    name: "Form",
    components: {
        foter,
    },
    
    data(){
        return{
            formData:{
                "fecha": '',
                "proveedor": null,
                "altura":null,
                "ancho":null,
                "valoracion": null,
                "puntuacion": null,
                "cantidad": null,
                "tiempo": null,
                "rango": null,
                "rollo": null,
                "peso": null,
                "tipoTela": '',
                "color": ''
            },
            modoEdicion: false,
            registroUpdate: {},
            proveedor: [],

        }
        
    },

    methods:{
        
        submitform(){
          
            
            console.log("antes del data");
            const datotoSend={
                "fecha": this.formData.fecha,
                "proveedor":this.formData.proveedor,
                "dimensiones":{
                    "altura": this.formData.altura,  // Cambiado aquí
                    "ancho": this.formData.ancho
                },
                "escalagrises": {
                    "valoracion": this.formData.valoracion
                },
                "sispuntos": {
                    "puntuacion": this.formData.puntuacion
                },
                "abpilling": {
                    "cantidad": this.formData.cantidad,
                    "tiempo": this.formData.tiempo,
                    "rango": this.formData.rango
                },
                "especificaciones": {
                    "rollo": this.formData.rollo,
                    "peso": this.formData.peso,
                    "tipoTela": this.formData.tipoTela,
                    "color": this.formData.color
                }
            };
            const token = localStorage.getItem("token_access");
            const head = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
            
            console.log("realizando registro" + datotoSend);


            function Guardar(){
               //http saveRegistry
               console.log("guardando datos ",datotoSend )
               saveRegistry(datotoSend,head)
                        .then((response) => {
                            console.log("data response ok: ", response.data);
                            console.log('token ' + token);
                            SwalFireAlert(
                                'success', '¡Registro exitoso!', 'El registro se ha completado satisfactoriamente.',
                                'OK'
                            );
                        }
                        ).catch((error) => {
                            SwalFireAlert("error", "¡Registro fallido!", "El registro no ha sido completado.", "Cool")
                        });;
                };


            function Actualizar(id,cal){
                console.log("dto  sdd " +datotoSend )
       
                
               let dataUpdate = { ...datotoSend, id };
                let calificacion = cal;

                dataUpdate = { ...dataUpdate, escalagrises: { ...dataUpdate.escalagrises, calificacion } };
                delete dataUpdate.escalagrises.valoracion;
                console.log("id", id, " datoooo ", dataUpdate)

            //upodateRegistry
                updateRegistry(dataUpdate, head).then((response) => {

                      
                        SwalFireAlert('success', '¡Actualización exitosa!', 'El registro se ha actualizado satisfactoriamente.', 'OK',
                        );
                    })
                        .catch((error) => {

                            SwalFireAlert('error', '¡Actualización fallida!', 'La actualización no se ha completado.', 'Cool',
                            );
                        });
                    };
        
            this.modoEdicion? Actualizar(this.registroUpdate.id, this.registroUpdate.escalagrises.calificacion): Guardar();
            console.log("ffinal");
        },
    },

    clear() {
        this.$router.push({ name: 'work' })
    },

    mounted() {
        const modo = this.$route.params.modoEdicion;
        modo ? this.modoEdicion = true : this.modoEdicion = false;
        if (this.modoEdicion) {

            let reg = this.$route.params.registro;

            const registro2 = JSON.parse(reg);
            this.registroUpdate = registro2;
            console.log("<----> ",this.registroUpdate)
            const datafinal = Convert(registro2);
            console.log("datafinal antes dde agerefar: ", datafinal, " lll", this.registroUpdate)


            this.formData = datafinal;
            console.log("formdata ", this.formData)

            //traer datos del 
            console.log("data proveedor traidda: " + this.proveedor)

        }
        //http js

        const token = localStorage.getItem("token_access");
            const head = {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        getProveedor(head).then((result) => {
            this.proveedor = result.data;
            console.log("data proveedor ",this.proveedor)
        }).catch((error) => {
            console.log("error ", error);
            
        });
        


        function Convert(obj) {
            console.log("data antes", obj)
            let dat = {
                "id": obj.id,
                "fecha": obj.fecha,
                "proveedor": obj.proveedor,

                "altura": obj.datosDimensiones.altura,
                "ancho": obj.datosDimensiones.ancho,

                "valoracion": obj.escalagrises.valoracion,

                "puntuacion": obj.sispuntos.puntuacion,

                "cantidad": obj.abpilling.cantidad,
                "tiempo": obj.abpilling.tiempo,
                "rango": obj.abpilling.rango,

                "rollo": obj.especificaciones.rollo,
                "peso": obj.especificaciones.peso,
                "tipoTela": obj.especificaciones.tipoTela,
                "color": obj.especificaciones.color
            }
            console.log("dat", dat)
            return dat;
        }

    }
    
}
</script>
<style lang="scss" scoped>

.popup {
    top: 2%;
    left: 2%;
    align-content: center;
    

    background-color:#f2f7f5;
    overflow-y: auto;
    border-radius: 10px;
    h2{

        color: #00473e;
        text-align: center;
        font-weight: 600;
        padding: 2rem;
    }
  }

  /* estilos del formmulario*/
  form {
    max-width: 50rem;
}

.form-group {
    position: relative;

    margin-bottom: 20px;
    label{
    margin-bottom: 5px;
    }
    .btn{
      padding: 0.5rem  1rem;
      margin: 0 1rem;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

}

.form-group input,
.form-group select {
    width: 100%;
    padding: 8px;
    border:2px solid #00473e;
    border-radius: 4px;
    background-color: #cbe4e0;
}

.form-group textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}


</style>