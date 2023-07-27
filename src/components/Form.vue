<template>
     <div class="popup container ">
            
            <div class="row d-flex justify-content-center ">
                <h2 class="row d-flex justify-content-center">Formulario de Calidad de Tela</h2>
                <form class="row"> 
                    <div class="col">
                        <div class="form-group">
                            <label for="Rollo">Rollo</label>
                            <input type="text" id="rollo" name="rollo" required>
                        </div>

                        <div class="form-group">
                            <label for="peso">Peso</label>
                            <input type="text" id="peso" name="peso" required>
                        </div>

                        <div class="form-group">
                            <label for="Escala grises">Grises</label>
                            <input type="text" id="tipoTela" name="tipoTela" required>
                        </div>
                        
                        <div class="form-group">
                            <label for="proveeddor">Provedor</label>
                            <select id="tacos" name="tacos" v-model="formData.proveedor_pr_id">
                                <option value="TextilNova">TextilNova</option>
                                <option value="TelasMundo">TelasMundo</option>
                                <option value="EleganceFabrics">EleganceFabrics</option>
                                <option value="FashionFabrics">FashionFabrics</option>
                                <option value="GlobalTextiles">GlobalTextiles</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="fecha">Fecha de Registro:</label>
                            <input type="date" id="fecha" name="fecha" required v-model="formData.re_fecha">
                        </div>
                    
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="gramaje">Gramaje</label>
                            <input type="number" id="gramaje" name="gramaje"  required>
                        </div>
                        <div class="form-group">
                            <label for="nivelGrises">Nivel Grises:</label>
                            <input type="number" id="nivelGrises" name="nivelGrises" required>
                        </div>
                        <div class="form-group">
                            <label for="nivelPilling">Nivel Pilling:</label>
                            <input type="number" id="nivelPilling" name="nivelPilling"  required>
                        </div>
                        <div class="form-group">
                            <label for="absorcion">Absorcion:</label>
                            <input type="number" id="absorcion" name="absorcion"  required>
                        </div>
                        <div class="form-group">
                            <label for="cuatropuntos">Cuatro Puntos:</label>
                            <input type="number" id="cuatropuntos" name="cuatropuntos" required>
                        </div>
                        
                    </div>
                    <div class="col">
                        <div class="form-group">
                            <label for="">Dimensiones</label>
                            <input type="number" name="ancho" id="ancho" placeholder="ancho" v-model="formData.dimensiones.dm_ancho">
                            <input type="number" name="alto" id="alto" placeholder="alto" v-model="formData.dimensiones.dm_altura">

                        </div>
                        <div class="form-group">
                            <label for="tipoTela">Tipo de Tela</label>
                            <select name="telas" id="telas">
                                <option>algodon</option>
                                <option>lino</option>
                                <option value="">Seda</option>
                                <option value="">Lana</option>
                                <option value="">Pliester</option>
                                <option value="">Nylon</option>
                                <option value="">Denim</option>
                                <option value="">Terciopelo</option>
                                <option value="">Saten</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="color">Color</label>
                            <select name="colores" id="color">
                                <option>azul</option>
                                <option>rojo</option>
                                <option value="">verde</option>
                                <option value="">negro</option>
                                <option value="">amarillo</option>
                                <option value="">blanco</option>
                            </select>
                        </div>

                    </div>
                </form>
                <div class="form-group text-center">
                    <button type="submit" class="btn btn-primary" form="form">Guardar</button>
                    <button class="btn btn-danger close-popup">Cerrar</button>
                </div>
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
                "re_fecha": '',
                "proveedor_pr_id":'',
                "dimensiones":{
                    "dm_altura":null,
                    "dm_ancho":null
                }
           
            }
        }
    },
    methods:{
        submitform(){
            const datotoSend={
                "re_fecha": this.formData.re_fecha,
                "proveedor_pr_id":this.formData.proveedor_pr_id,
                "dimensiones":{
                    "dm_altura":this.formData.dimensiones.dm_altura,
                    "dm_ancho":this.formData.dimensiones.dm_ancho
                }
            };
            axios.post('http://localhost:8081/registro',datotoSend)
            .then(response =>{
                console.log(response.data)
            }
            ).catch(error =>{
                console.error(error);
            });

        }
      
    }
    
}
</script>
<style lang="scss" scoped>

.popup {
    top: 2%;
    left: 2%;
    align-content: center;
    
    transform: translate(0%, 0%);
    background-color: #f0fb59;
    overflow-y: auto;
    border-radius: 3%;
    h2{

        color: rgb(134, 169, 106);
        text-align: center;
    }
  }

  /* estilos del formmulario*/
  form {
    max-width: 500px;
}

.form-group {
    position: relative;

    margin-bottom: 20px;
    label{
    margin-bottom: 5px;
    }
    button{
      padding: 10px 20px;
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
    border: 1px solid #ccc;
    border-radius: 4px;
    background-color: #abcbc3;
}

.form-group textarea {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
.card-body{
  background-color: #bdf7f4;
}

</style>