<template >
    <div onload="interval()" class="container-fluid">
    
        <div class="col d-flex head">
            <div class="container-fluid pt-3 ">
                <div class="d-flex logo">
                    <img class="img-fluid mx-3 mb-3" src="../assets/img/T.png" alt="">
                    <h1 class="red">QualityTex</h1>
                
                </div>
            </div>
            <div class="user">
                <div class="d-flex">
                    <span class="material-symbols-outlined">person</span>
                    <p>Nombre de Usuario</p>
                </div>
                <div class="d-flex">
                    <span class="material-symbols-outlined">groups</span>
                    <p>Cargo</p>
                </div>
            </div>
        </div>

        <section class="d-flex text-center justify-content-center oper col">

            <div class="mx-4 mt-4 open-popup " data-popup-target="popup-1" >
                <p>Crear nuevo registro de Tela</p>
                <button class="btn btn-primary open-popup" data-popup-target="popup-1">Abrir formulario</button>
            </div>

            <div class="mx-4 mt-4">
                <p>Gestor de datos</p>
                <router-link class="btn btn-primary container-fluid" to="/datos">Registrar</router-link>              
            </div>
            <div class="mx-4 mt-4">
                <p>Graficos del Sistema</p>
                <router-link class="btn btn-primary container-fluid" to="/grafico">Estadisticas</router-link>
            </div>
        </section>

        <div class="popup-overlay container-fluid" id="popup-overlay"></div>

        <div class="popup" id="popup-1">
            <h2>Formulario de Calidad de Tela</h2>
            <div class="container">
                <form class="row" id="form" @submit="submitform"> 
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
                            <select id="tacos" name="tacos" v-model="dataform.proveedor_pr_id">
                                <option value="TextilNova">TextilNova</option>
                                <option value="TelasMundo">TelasMundo</option>
                                <option value="EleganceFabrics">EleganceFabrics</option>
                                <option value="FashionFabrics">FashionFabrics</option>
                                <option value="GlobalTextiles">GlobalTextiles</option>
                            </select>
                        </div>

                        <div class="form-group">
                            <label for="fecha">Fecha de Registro:</label>
                            <input type="date" id="fecha" name="fecha" required v-model="dataform.re_fecha">
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
                        
                            <input class="col-lg-8" type="number" name="ancho" id="ancho" placeholder="ancho" v-model="dataform.dimensiones.dm_ancho">
                            <input type="number" name="alto" id="alto" placeholder="alto" v-model="dataform.dimensiones.dm_altura">

                        </div>
                        <div class="form-group">
                            <label for="tipoTela">Tip Tela</label>
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
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" form="form">Guardar</button>
                    <button class="btn btn-danger close-popup">Cerrar</button>
                </div>
            </div>          
        </div>
    
        <section class="container-fluid imagenes">
            <div class="rot d-flex justify-content-center">
                <div class="card" style="width: 18rem;">
                    <div class="card-body d-flex">
                    
                    <p class="card-text">Nuestro compromiso con la calidad en la producción textil se refleja en cada prenda</p>
                    
                    </div>
                </div>
                
            
                <img class="img-fluid d-flex" src="../assets/img/knit-g6e83076f5_640.jpg" alt="Imagen" id="slide">
                
                <div class="card" style="width: 18rem;">
                    <div class="card-body d-flex">
                    
                    <p class="card-text">Nuestras telas cumplen con los estándares más altos de calidad, para garantizar la satisfacción de nuestros clientes.</p>
                    
                    </div>
                </div>
            </div>
        </section>

        <footer>
            
            <div class="container-lg" >
                <div class="row container">
                    <div style="max-width: 40em;">
                        <img src="../assets/img/pexels-jeshootscom-530024.jpg" class="img-fluid rounded-start mx-auto" alt="...">
                    </div>
                        
                    <div class="row">
                        <h3>Registro Textil</h3>
                        <p class="card-text">
                        Los registros de calidad textil son una herramienta fundamental para garantizar la satisfacción del cliente y el éxito de la empresa. Estos registros permiten evaluar y registrar los aspectos más importantes de la calidad de la tela, como la resistencia, la uniformidad, la textura, el color, entre otros.
                        El proceso de registro de calidad textil comienza desde la selección de la materia prima, asegurando que cumpla con los estándares requeridos para el producto final. Luego, se realizan pruebas y evaluaciones a lo largo del proceso de producción para detectar y corregir posibles defectos o problemas en la calidad de la tela. Estas pruebas incluyen la medición de la resistencia, la uniformidad del tejido, la textura, la alineación de la puntada, entre otras.
                        Una vez que la tela ha sido producida, se realiza una evaluación final para asegurarse de que cumple con los requisitos de calidad establecidos. Si se encuentran defectos o problemas, se realizan las correcciones necesarias antes de que la tela sea enviada al cliente.
                        Los registros de calidad textil permiten a la empresa tener un control riguroso sobre el proceso de producción, detectar y corregir problemas de calidad de manera temprana, y garantizar que el producto final cumpla con los requisitos y expectativas del cliente. Además, estos registros pueden ser utilizados para hacer mejoras en el proceso de producción y en la calidad del producto a largo plazo, lo que puede resultar en una mayor satisfacción del cliente y un aumento de la rentabilidad de la empresa. En resumen, los registros de calidad textil son esenciales para asegurar la calidad y el éxito de la empresa en el mercado textil.
                        </p>
                        
                    </div>
                    
                </div>
            </div>
        </footer>
    
    </div>

</template>

<script>
import axios from 'axios';

export default{
    name: "Work",
    data(){
        return{
            "re_fecha": '',
            "proveedor_pr_id":null,
            "dimensiones":{
                "dm_altura":null,
                "dm_ancho":null
            }
        }
    },
    methods:{
        submitform(){
            const datotoSend={
                "re_fecha": this.dataform.re_fecha,
                "proveedor_pr_id":this.dataform.proveedor_pr_id,
                "dimensiones":{
                    "dm_altura":this.dataform.dimensiones.dm_altura,
                    "dm_ancho":this.dataform.dimensiones.dm_ancho
                }
            }

        }
    }
    
}

document.addEventListener("DOMContentLoaded", function() {
  const openPopupButton = document.querySelector(".open-popup");
  const closePopupButton = document.querySelector(".close-popup");
  const overlay = document.getElementById("popup-overlay");

  openPopupButton.addEventListener("click", function() {
    const target = openPopupButton.getAttribute("data-popup-target");
    const popup = document.getElementById(target);
    popup.style.display = "block";
    overlay.style.display = "block";
  });

  closePopupButton.addEventListener("click", function() {
    const popup = closePopupButton.closest(".popup");
    popup.style.display = "none";
    overlay.style.display = "none";
  });
});
   
</script>


<style lang="scss">

$green-dark:  #006E51;
$marron: #87CBB9;
$green-dark:  #006E51;
.logo{
    img{
        max-width: 100px;
        height: auto;
        border-radius: 20%;
    }
    h1{
      font-family: 'Cormorant SC', serif;
      color:$green-dark; 
    }
  
  }

.head{
    background-color:$marron;
  }
  
  .rot{
    background-color: #006E51;

    img{  
      box-shadow: 0px -1px 39px 26px rgba(0,0,0,0.48);
      height: 22rem;
      width: 35rem;
      margin: 2%;
    }
  }
  .imagenes{
    background-color: $marron;
    margin:auto;
    
  }
  
  .oper{
    background-color: #d4aaff;
    flex-wrap:wrap-reverse;
  }
  footer{
    background-color: #bdd1de;
  }
.popup-overlay {
    display: none;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(195, 206, 112, 0.87);
    z-index: 9999;
    overflow-y: auto;
  }
.popup {
    display: none;
    position:fixed;
    width: 50%;
    top: 2%;
    left: 2%;
    transform: translate(0%, 0%);
    background-color: #f0fb59;
    z-index: 10000;
    overflow-y: auto;
    border-radius: 3%;
  }

  /* estilos del formmulario*/
  form {
    max-width: 500px;
    margin: 0 auto;
}

.form-group {

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
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
    resize: vertical;
}
.card-body{
  background-color: #bdf7f4;
}




</style>