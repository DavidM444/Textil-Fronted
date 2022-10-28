<template>
    <div id="app">
        <div class="cabecera">
           
            <h2>Nova Text Quality Sistem</h2> 
            
            <div class="menu">
        
                <nav>
                    <button v-if="isAuth" v-on:click="loadHome">Home</button>
                    <button v-if="isAuth" v-on:click="loadInventario">Inventario</button>
                    <button v-if="!isAuth" v-on:click="loadLogin">Login</button>
                    <button v-if="!isAuth" v-on:click="loadSingUp">SingUp</button>
                    <button v-if="isAuth" v-on:click="loadCloseSesion">Closesesion</button>
                </nav>
                
            </div>
            
        </div>
        

        <div class="main-component">
        <router-view  
            v-on:completedLogIn="completedLogIn"
            v-on:completedSignUp="completedSignUp"
            
        >
        </router-view>
        </div>
    
    
        <div class="footer">
            <h2>Protela Text</h2>


        </div>



    </div>
    
</template>

<script>
  export default {
    name:"App",
    

    data: function(){
        return{
            isAuth: false 
        }

    },
    methods: {
        verifyAuth: function(){
            if(this.isAuth==false){
                this.$router.push({name: 'login'});
            }
        },

        loadHome: function(){
            this.$router.push({name: 'home'});


        },
        loadLogin: function(){
            this.$router.push({name: 'login'});

        },
        loadSingUp: function(){
            this.$router.push({name: 'SingUp'})

        },
        loadCloseSesion: function(){

        },
        loadInventariot: function(){
            this.$router.push({name: 'inventario'});


        },
        completedLogIn: function(data){
            localStorage.setItem('username', data.username);
            localStorage.setItem('token_access', data.token_access);
            localStorage.setItem('token_refresh', data.token_refresh);
            alert("autenticacion validada!!!")

        },
        completedSingUp: function(){

        },

    },
    created: function(){
        this.verifyAuth()

    },
    
  }

   

</script>





<style>
    
    body{
        max-width: 0 0 0 0;
        
        display: flex;
    }
   

    .cabecera {
        position:relative;
        background-color: blue;
        display: flex;
        
        width:1700px;
        height: 149px;
        

        
    }

    .cabecera h2
    {
        position: relative;
        width: 300px;
        top: 20px;
        float: left;
        left: 30px;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }
    .menu{
        background-color: white;
        width: 500px;
        height: 60px;
        position: relative;
        left: 900px;
        top: 10px;
        
        
    }
   
    .menu nav{
        background-color: rgb(196, 196, 196);
        
        justify-content: center;

        align-items: center;
        border: 2px solid chocolate;
        display: flex;
        height: 100%;
        
    
        
        

    }
    .menu nav button {
        display: flex;
        font-size: 18px;
        border: 2px solid yellow;
        border-radius: 4px;

        background-color: greenyellow;
    }

    .menu nav button:hover 
    {
        color: rgb(253, 253, 253);
        background: rgb(0, 0, 0);
        border: 2px solid rgb(247, 251, 247);
    }


    .main-component{
        height: 60vh;
        margin: 0%;
        padding: 0%;
        background: cyan;
    }
    .main-component h3 {
        font-family: cursive;
        font-size: 39px;
    }

    .footer {
        height: 21vh;
        margin: 0;
        padding: 0;
        width: 100%;
        background-color: blueviolet;
    }








/* Estilos para el titulo de la cabecera*/

    
</style>





