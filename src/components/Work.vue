<template >
    <div onload="interval()">

        <div class="d-flex head col">
            <div class="col-sm-8">
                <div class="d-flex logo">
                    <img class="img-fluid" src="../assets/img/T.png">
                    <h1 class="align-self-center text-center">Quality Tex</h1>
                </div>
            </div> 
            <div class="align-self-center text-center d-none d-sm-block col-sm-4">
                <div class="user">
                    <h3>Usuario</h3>
                    <p> {{ username }}</p>
                </div>
                <div>
                    <button class="btn btlog" v-on:click="logOut">Salir</button>
                </div>
            </div>
        </div>

        <section class="oper">
            <div class="d-flex text-center flex-column flex-sm-row justify-content-center">
                
                <div class="p-1">
                    <p>Crear nuevo registro de tela</p>
                    <router-link class="btn btn-primary " to="/work/form">Abrir Formulario</router-link>
                </div>

                <div class=" p-1">
                    <p>Gestor de datos</p>
                    <router-link class="btn btn-primary " to="/datos">Registrar</router-link>
                </div>
                <div class="p-1">
                    <p>Gráficos del Sistema</p>
                    <router-link class="btn btn-primary" to="/grafico">Estadísticas</router-link>
                </div>
            </div>
           
        </section>

        <section class="imagenes">
            <div class="d-sm-flex justify-content-center rot">
                <div class="align-self-center  card ">
                    <div class="card-body d-flex">
                        <p>Nuestro compromiso con la calidad en la producción textil se refleja en cada prenda</p>

                    </div>
                </div>
                <div class=" d-flex align-self-center">
                    <img src="../assets/img/knit-g6e83076f5_640-min.jpg" alt="Imagen" id="slide">
                </div>


                <div class="align-self-center  card w-auto">
                    <div class="card-body d-flex">
                        <p>Nuestras telas cumplen con los estándares más altos de calidad, para garantizar
                            la satisfacción de nuestros clientes.</p>

                    </div>
                </div>
            </div>
        </section>        
        <section class="footer">
            <div class="container">
                <h3 class="py-3">Registro Textil</h3>
                <p>
                    Los registros de calidad textil son una herramienta fundamental para garantizar la satisfacción del
                    cliente y el éxito de la empresa. Estos registros permiten evaluar y registrar los aspectos más
                    importantes de la calidad de la tela, como la resistencia, la uniformidad, la textura, el color,
                    entre otros. 
                </p>
                <p>
                    El proceso de registro de calidad textil comienza desde la selección de la materia prima, asegurando
                    que cumpla con los estándares requeridos para el producto final. Luego, se realizan pruebas y
                    evaluaciones a lo largo del proceso de producción para detectar y corregir posibles defectos o
                    problemas en la calidad de la tela. Estas pruebas incluyen la medición de la resistencia, la
                    uniformidad del tejido, la textura, la alineación de la puntada, entre otras. 
                </p> 
                <p> Una vez que la tela ha sido producida, se realiza una evaluación final para asegurarse de que cumple
                    con los requisitos de calidad establecidos. Si se encuentran defectos o problemas, se realizan las
                    correcciones necesarias antes de que la tela sea enviada al cliente.
                </p>
                <div class="d-flex align-self-center imgf">
                    <img src="../assets/img/pexels-jeshootscom-530024.jpg" class="img-fluid" alt="...">
                </div>
                <p class="pb-5">
                    Los registros de calidad textil permiten a la empresa tener un control riguroso sobre el proceso de
                    producción, detectar y corregir problemas de calidad de manera temprana, y garantizar que el
                    producto final cumpla con los requisitos y expectativas del cliente. Además, estos registros pueden
                    ser utilizados para hacer mejoras en el proceso de producción y en la calidad del producto a largo
                    plazo, lo que puede resultar en una mayor satisfacción del cliente y un aumento de la rentabilidad
                    de la empresa.
                </p>

            </div>
            
        </section>


    </div>
</template>

<script>

import { jwtDecode } from "jwt-decode";
import { SwalFireAlert } from './peticiones/http'
export default {
    name: "Work",
    data: function(){
        return{
            username: localStorage.getItem('name'),
            expToken: null,
            token: `${localStorage.getItem('token_access')}`
        }
    },
    methods: {
        logOut: function(){
            SwalFireAlert('warning',"Sesion Cerrada","Su acceso ha sido cerrado.","Ok")
            this.$emit("logOut");
        },
        decodeToken: function(){
            try {
                let exp = jwtDecode(this.token);
                this.expToken = exp.exp;
                this.expValue();
                
            } catch (error) {
                alert("No hay credenciales. Ingrese nuevamente");
                this.$emit('logOut');
            }
            
        },
        expValue: function(){
            const expDate = this.expToken * 1000;
            //console.log('exp value ',expDate )
            const now = Date.now();
            if(now > expDate){
                alert("Token Expirado");
                this.$emit('logOut');
            }

        }
    },
    mounted(){
        this.decodeToken();
    }

}

</script>


<style lang="scss" scoped>
$green-darks: #7fae7d;
$green-dark: #f2f7f5;
$bg: #00473e;
$red: #7fe17b;


.head{
    background-color: $green-dark;
}
.logo {
    img {
        max-width: 8rem;
        padding: 0.5rem;
        margin-left: 2rem;
        border-radius: 20%;
    }
    h1{
        color: #00473e;
        font-weight: 700;
        font-size: 3rem;
    }

}
.user{
    h3{
        color: $bg;
    };
    p{
        color: $green-darks;
    }
   
}
.btlog{
        background-color:$green-darks;
        color: $green-dark
    }

.btn-primary{
    background-color: #00473e;
    border-color: #00473e;
}
.btn-primary:hover{
    background-color: $green-darks;
    border-color: $green-darks;
}
.btlog:hover{
    background-color: $red;
    border-color: $red;
}



.rot {
    img {
        box-shadow: 0px 0px 20px 10px rgba(0, 0, 0, 0.48);
        max-width: 100%;

    }
}
.imagenes {
    padding: 2%;
    background-color: $green-dark;
    .card{
        border-color: #00473e;
        background-color: $green-dark;
        margin: 2rem;
    
    }


}

.oper {
    background-color: $green-dark;
    padding: 1%;

    .p-1{
        margin: 0 1rem;
    }
}
p{    color: #4A4A4A;
    }
.footer {
    background-color:$bg;
    h3{
        color: $green-darks;
    }

    img{
  
        max-width: 60%;
        margin: auto;
        padding: 2rem;
        border-radius: 70px;
    }

    p{
        color: $green-dark;
    }
    
}</style>