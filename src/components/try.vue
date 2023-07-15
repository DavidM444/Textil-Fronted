<template>
    <div>
        <h2>try</h2>
    </div>
    <div>
        <form class="row" id="form" action="" > 
            <div class="col">
                <div class="form-group">
                    <label for="proveeddor">Provedor</label>
                    <select>
                        <option value="TextilNova">TextilNova</option>
                        <option value="TelasMundo">TelasMundo</option>
                        <option value="EleganceFabrics">EleganceFabrics</option>
                        <option value="FashionFabrics">FashionFabrics</option>
                        <option value="GlobalTextiles">GlobalTextiles</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="fecha">Fecha de Registro:</label>
                    <input type="date" id="fecha" name="fecha" required >
                </div>
            
            </div>
                
            <div class="col">
                <div class="form-group">
                    <label for="dimensiones">Dimensiones</label>
                
                    <input class="col-lg-8" type="number" name="ancho" id="ancho" placeholder="ancho" >
                    <input type="number" name="alto" id="alto" placeholder="alto">

                </div>

            </div>
            <div class="form-group">
                    <button type="submit" class="btn btn-primary" form="form">Guardar</button>
                    <button class="btn btn-danger close-popup">Cerrar</button>
                </div>
        </form>
        <button @click="fetchData">Obreene</button>
    </div>
</template>
<style>
h2{
    text-align: center;
    border: 20px;
    border-radius: 3%;
    background-color: coral;
    align-self: center;
}
</style>

<script>
import axios from 'axios';
export default{
    name: "try",
    data(){
        return{
            registro: [],
        }
    },
    methods:{
        
        fetchData(){
            let url = 'http://localhost:8081/registro';
            axios.get(url).then(
                response=> {const data = response.data;
             console.log(response)}).catch(error => {
          console.error(error);
        });
        },
      
    },
   
    
}
</script>