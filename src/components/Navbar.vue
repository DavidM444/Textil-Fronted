<template>
    <div class="container-fluid head">
        <div class="col-sm-8 text-md-left d-flex logo">
            <img src="../assets/img/T.png" alt="logo">
            <h1 class="align-self-center">Quality Tex</h1>
        </div>
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
    border-radius: 0 0 1rem 1rem;
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


.logo {
  animation: myAnim 5s ease 0s 1 normal none;
}

@keyframes myAnim {
  0% {
    opacity: 0;
    transform: translateX(-250px);
  }

  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
</style>
<script>
export default{
    name: 'Navbar'
}

</script>