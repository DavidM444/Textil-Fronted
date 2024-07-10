<template>
    <div>
        <header class="container-fluid head ">
            <div class="row">
                 <div class="col-sm-8 text-md-left d-flex logo">
                    <img src="../assets/img/T.png" alt="logo">
                    <h1 class="align-self-center">Quality Tex</h1>
                </div>

                <div class="col-sm-4 text-center align-self-center">
                    <RouterLink class="btn btn-primary link" to="/login">Iniciar Sesion</RouterLink>
                    <RouterLink class="btn btn-success link" to="/singup">Registrarse</RouterLink>
                </div>  
            </div>
        </header>

    </div>
</template>
<style scoped lang="scss">

$tex-w: #f2f7f5;
$bgcolor: #00473e;
$nar: #faae2b;
$succes: #3f7354;
$title: #75d28f;

.info{
    background-color: $tex-w;
}
.head{
    background-color: #00473e;
}
.link{
  
    margin: 1ch;
}


.bt {
    margin-left: auto;
}

.logo img {
    max-width: 8em;
    height: 100%;
    border-radius: 20%;
    padding: 1rem;
    
    

}

.logo h1 {
    color: $title;
    text-align: center;
    font-size: 3rem;


}
</style>
<script>
export default{
    name: 'Navbar'
}

</script>