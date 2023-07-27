<template >
    <div onload="interval()" class="container-fluid">

        <div class="row ">
            <div class="col-sm-8 d-flex ">
                <div class="d-flex logo">
                    <img class="img-fluid" src="../assets/img/T.png" alt="">
                    <h1 class="align-self-center">QualityTex</h1>
                </div>
            </div>
            <div class="col-sm-4 align-self-center text-center d-none d-sm-block">
            
                <div class="user">
                    <p>Nombre de Usuario</p>
                    <p>Juan Carlos test</p>
                </div>
            </div>
        </div>

        <section class="d-flex text-center justify-content-center oper">

            <div class="p-sm-3 p-1 ">
                <p>Crear nuevo registro de Tela</p>
                <router-link class="btn btn-primary container-fluid" to="/work/form">Abrir Formulario</router-link>
            </div>

            <div class="p-sm-3 p-1">
                <p>Gestor de datos</p>
                <router-link class="btn btn-primary container-fluid" to="/datos">Registrar</router-link>
            </div>
            <div class="p-sm-3 p-1">
                <p>Graficos del Sistema</p>
                <router-link class="btn btn-primary container-fluid" to="/grafico">Estadisticas</router-link>
            </div>
        </section>

        <section class="col imagenes">
            <div class="d-sm-flex justify-content-center rot">
                <div class="align-self-center row-md-4 card w-auto">
                    <div class="card-body d-flex">

                        <p class="card-text">Nuestro compromiso con la calidad en la producción textil se refleja en cada
                            prenda</p>

                    </div>
                </div>
                <div class="row-md-4 d-flex align-self-center">
                    <img src="../assets/img/knit-g6e83076f5_640.jpg" alt="Imagen" id="slide">
                </div>


                <div class="align-self-center row-md-4 card w-auto">
                    <div class="card-body d-flex">
                        <p class="card-text">Nuestras telas cumplen con los estándares más altos de calidad, para garantizar
                            la
                            satisfacción de nuestros clientes.</p>

                    </div>
                </div>
            </div>
        </section>


        
            <div class="row d-flex footer">
               
                <div class="row text-center">
                    <h3>Registro Textil</h3>
                    <p class="card-text">
                        Los registros de calidad textil son una herramienta fundamental para garantizar la satisfacción del
                        cliente y el éxito de la empresa. Estos registros permiten evaluar y registrar los aspectos más
                        importantes de la calidad de la tela, como la resistencia, la uniformidad, la textura, el color,
                        entre otros. <br>
                        El proceso de registro de calidad textil comienza desde la selección de la materia prima, asegurando
                        que cumpla con los estándares requeridos para el producto final. Luego, se realizan pruebas y
                        evaluaciones a lo largo del proceso de producción para detectar y corregir posibles defectos o
                        problemas en la calidad de la tela. Estas pruebas incluyen la medición de la resistencia, la
                        uniformidad del tejido, la textura, la alineación de la puntada, entre otras. <br>
                        Una vez que la tela ha sido producida, se realiza una evaluación final para asegurarse de que cumple
                        con los requisitos de calidad establecidos. Si se encuentran defectos o problemas, se realizan las
                        correcciones necesarias antes de que la tela sea enviada al cliente. <br>
                        Los registros de calidad textil permiten a la empresa tener un control riguroso sobre el proceso de
                        producción, detectar y corregir problemas de calidad de manera temprana, y garantizar que el
                        producto final cumpla con los requisitos y expectativas del cliente. Además, estos registros pueden
                        ser utilizados para hacer mejoras en el proceso de producción y en la calidad del producto a largo
                        plazo, lo que puede resultar en una mayor satisfacción del cliente y un aumento de la rentabilidad
                        de la empresa. En resumen, los registros de calidad textil son esenciales para asegurar la calidad y
                        el éxito de la empresa en el mercado textil.
                    </p>

                </div>
                <div class="d-flex align-self-center">
                    <img src="../assets/img/pexels-jeshootscom-530024.jpg" class=""
                        alt="...">
                </div>


            </div>
       


    </div>
</template>

<script>
export default {
    name: "Work",

}



</script>


<style lang="scss" scoped>
$green-darks: #F2A51A;
$marron: #E8FFCE;
$green-dark: #E8FFCE;

.logo {
    img {
        max-width: 8rem;
        padding: 0.5rem;
        border-radius: 20%;
    }

    h1 {
        font-family: 'Cormorant SC', serif;
        color: $green-darks;
    
    }

}
.user{
    background-color: #F5FDB0;
}
.card{
    background-color: #F5FDB0;
}
.btn{
    background-color: #F2A51A;
}



.rot {


    img {
        box-shadow: 0px -1px 39px 26px rgba(0, 0, 0, 0.48);
        max-width: 100%;

    }
}

.imagenes {
    background-color: $marron;
    margin: auto;

}

.oper {
    background-color: #F5FDB0;
    flex-wrap: wrap-reverse;
}
p{
        color: #4A4A4A;
    }
.footer {
    h3{
        color: #062743;
    }
    background-color: #F5FDB0;
    img{
        max-width: 50%;
        margin: auto;
    }
    
}</style>