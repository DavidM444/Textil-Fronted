<template>
    <div>
        <header class="header">
            <Navbar/>
            <div class="col-sm-4 text-center align-self-center">
                <RouterLink class="btn btn-primary link" to="/login">Iniciar Sesion</RouterLink>
                <RouterLink class="btn btn-success link" to="/singup">Registrarse</RouterLink>
            </div>
        </header>

        <section class="est2">
            <div class="container-fluid">
                <div class="">
                    <h2 class="p-4">Calidad de confección</h2>
                    <p>
                        La calidad de confección en la industria textil es un aspecto fundamental para garantizar la
                        satisfacción del
                        cliente y la durabilidad de los productos. Una buena calidad de confección no solo se refiere a
                        la
                        apariencia
                        estética de una prenda, sino también a su resistencia y comodidad durante el uso. A
                        continuación,
                        exploraremos
                        la importancia de la calidad de confección y los elementos clave que influyen en ella. </p>

                    <p>
                        Uno de los pilares de la calidad de confección es la precisión en los detalles y acabados. Las
                        costuras
                        bien
                        cosidas y los remates limpios son indicadores de una prenda bien elaborada. Los bordes sin
                        deshilacharse
                        y los
                        dobladillos bien hechos son signos de atención al detalle y cuidado en el proceso de confección.
                    </p>

                    <p>Otro aspecto crucial es el uso de materiales adecuados. Los textiles de calidad, combinados con
                        los
                        hilos y
                        accesorios apropiados, aseguran que la prenda mantenga su forma y resistencia a lo largo del
                        tiempo. Un
                        buen
                        equilibrio entre la selección de materiales y el proceso de producción es esencial para lograr
                        una
                        calidad
                        óptima.</p>

                    <p>Además, la calidad de la confección se relaciona con el ajuste y la funcionalidad de la prenda.
                        Las
                        prendas bien
                        diseñadas y confeccionadas deben adaptarse correctamente al cuerpo, permitiendo la libertad de
                        movimiento y
                        evitando restricciones incómodas. Los cierres, botones y cremalleras deben ser duraderos y
                        funcionales,
                        facilitando el uso y prolongando la vida útil de la prenda.

                        El control de calidad durante todo el proceso de producción es esencial para garantizar la
                        excelencia en
                        la
                        confección. Inspecciones regulares y pruebas de calidad ayudan a identificar posibles problemas
                        y a
                        corregirlos
                        antes de que las prendas lleguen al mercado.</p>

                    <p>La calidad de confección no solo se aplica a la moda, sino también a otros productos textiles,
                        como ropa
                        de
                        cama, toallas y cortinas. En estos casos, la durabilidad y resistencia son factores clave para
                        asegurar
                        que los
                        productos mantengan su aspecto y rendimiento a lo largo del tiempo.</p>
                </div>

            </div>
        </section>
        <Footer />

    </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/footer.vue"

export default {
    name: 'home',
    components: { Navbar, Footer }
}
</script>

<style scoped lang="scss">



.header{
    display: flex;
    background-color: #00473e;
    
}


$tex-w: #f2f7f5;
$bgcolor: #00473e;
$nar: #faae2b;
$succes: #3f7354;
$title: #75d28f;


.link {

    margin: 1ch;
}


.bt {
    margin-left: auto;
}


/*

.est{
    background-color: #f2f7f5;
    padding: 1% 5%;
    h2{
        color: $bgcolor;
        
    }
    strong{
        color: $succes;
    }
    h3{
        font-weight: 550;
        font-size: 1rem;
        color: $succes;
    }
   
}
.est p{
    font-size: smaller;
}
*/
.est2 {

    padding: 1% 5%;

    h2 {
        color: $title;
    }

    p {
        color: #f2f7f5;
        font-size: larger;
    }
}
</style>