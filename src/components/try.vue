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
<style scoped>
h2{
    text-align: center;
    border: 20px;
    border-radius: 3%;
    background-color: coral;
    align-self: center;
}
</style>

<script>
console.log("usando js en try")
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
            /*
            let url = 'https://pokeapi.co/api/v2/pokemon/ditto';
            axios.get(url)
            .then(
                response=> {
                     if (response.status != "200") {
                        console.error("no es 299");
                    }
                    else {
                        return response.json();
                    }
                    const data = response.data;
                    const data2 = data.data;
                    console.log( response);
                console.log(data2)
            })
            .then((data) => {
        if (data) {
            console.log(data.name);

           
        }
    })*/

        {

    const nb = "ditto";
    const url = `https://pokeapi.co/api/v2/pokemon/${nb}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            pokeImage("./assets_pode/pk.gif")
        }
        else {
            return res.json();
        }
    })
    .then((data) => {
        if (data) {
            let pokeImg = data.sprites.front_default;
            let PokeInfo = data.name
            let PokeTipe = data.types
            let PokeStatics = data.stats
            let PokeMove = data.moves
console.log(PokeInfo)  
        }
    });
}
        
            },
        },
   
    
}
</script>