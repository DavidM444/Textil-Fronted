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
                <router-link class="btn btn-primary container-fluid" to="/work/form">Abrir Formulario</router-link>
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
export default{
    name: "Work",  
    
}


   
</script>


<style lang="scss" scoped>

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


</style>