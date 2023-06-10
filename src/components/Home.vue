<template>
  <div class="information">
        <h1>
        ¡Bienvenido {{ username }}</h1>
    </div>
</template>

<script>
export default {
    name: "Home",

    data: function(){
        return{
            username: localStorage.getItem('username') || "none"
        }
    }

}
</script>

<style>


</style>