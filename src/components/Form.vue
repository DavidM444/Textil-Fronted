<template>
     <div class="popup container ">
            
            <div class="row d-flex justify-content-center ">
                <h2 class="row d-flex justify-content-center">Formulario de Calidad de Tela</h2>
                <form class="row" @submit.prevent="submitform"> 
                    <div class="col">
                        <div class="form-group">
                            <label for="Rollo">Rollo</label>
                            <input v-model="formData.rollo" type="text" id="rollo" name="rollo" required>
                        </div>

                        <div class="form-group">
                            <label for="peso">Peso</label>
                            <input v-model="formData.peso" type="text" id="peso" name="peso" required>
                        </div>

                        <div class="form-group">
                            <label for="valoracion">Valoracion Grises</label>
                            <input v-model="formData.valoracion" type="text" id="valoracion" name="valoracion" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="proveeddor">Provedor</label>
                            <select id="tacos" name="tacos" v-model="formData.proveedor">
                                <option value=1>TextilNova</option>
                                <option value=2>TelasMundo</option>
                                <option value=3>EleganceFabrics</option>
                                <option value=4>FashionFabrics</option>
                                <option value=6>GlobalTextiles</option>
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
                            <input v-model="formData.cantidad"  type="number" id="cantidad" name="cantidad" placeholder="cantidad" required>
                            <input v-model="formData.tiempo" type="number" id="tiempo" name="tiempo" placeholder="tiempo" required>
                            <input v-model="formData.rango" type="number" id="rango" name="rango" placeholder="rango" required>
                        </div>
                        <div class="form-group">
                            <label for="cuatropuntos">Cuatro Puntos:</label>
                            <input v-model="formData.puntuacion" type="number" id="cuatropuntos" name="cuatropuntos" required>
                        </div>
                        
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="">Dimensiones</label>
                            <input type="number" name="ancho" id="ancho" placeholder="ancho" v-model="formData.ancho">
                            <input type="number" name="alto" id="alto" placeholder="alto" v-model="formData.altura">

                        </div>
                        <div class="form-group">
                            <label for="tipoTela">Tipo de Tela</label>
                            <select v-model="formData.tipoTela" name="telas" id="telas">
                                <option>algodon</option>
                                <option>lino</option>
                                <option value="Seda">Seda</option>
                                <option value="Lana">Lana</option>
                                <option value="Poliester">Pliester</option>
                                <option value="Nylon">Nylon</option>
                                <option value="Denim">Denim</option>
                                <option value="Terciopelo">Terciopelo</option>
                                <option value="Saten">Saten</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="color">Color</label>
                            <select v-model="formData.color" name="colores" id="color">
                                <option value="Azul">azul</option>
                                <option value="Rojo">rojo</option>
                                <option value="Verde">verde</option>
                                <option value="Negro">negro</option>
                                <option value="Amarillo">amarillo</option>
                                <option value="Blanco">blanco</option>
                            </select>
                        </div>

                    </div>
                    <div class="form-group text-center">
                        <button type="submit" class="btn btn-primary">Guardar</button>
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
                "dimensiones":{
                    "altura":null,
                    "ancho":null
                },
                "escalagrises": {
                    "valoracion": null
                },
                "sispuntos": {
                    "puntuacion": null
                },
                "abpilling": {
                    "cantidad": null,
                    "tiempo": null,
                    "rango": null
                },
                "especificaciones": {
                    "rollo": null,
                    "peso": null,
                    "tipoTela": '',
                    "color": ''
                }
           
            }
        }
    },
    methods:{
        
        submitform(){
            console.log("antes del data");
            const datotoSend={
                "fecha": this.formData.fecha,
                "proveedor":this.formData.proveedor,
                "dimensiones":{
                    "altura":this.formData.altura,
                    "ancho":this.formData.ancho
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
            let token = localStorage.getItem("token_access");
            //let token = '';
            console.log("realizando registro" + datotoSend)
            
            axios.post('http://localhost:8081/registro',datotoSend,
            {headers:{
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'}})
            .then((response) =>{
                console.log(response.data);
                console.log('token '+token)
            }
            ).catch((error) =>{
                console.error(error+ " data "+datotoSend);
            });
            console.log("ffinal")

        },
        clear(){

        }
      
    },

    
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