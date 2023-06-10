<template>
    <div class="signUp_user">
        <div class="container_signUp_user">
            <h2>Registrarse</h2>
            <form v-on:submit.prevent="processSingUp" >
                <input type="text" v-model="user.username" placeholder="Usuario">
                <br>
                <input type="password" v-model="user.password" placeholder="Contraseña">
                <br>
                <input type="text" v-model="user.name" placeholder="Nombre">
                <br>
                <input type="email" v-model="user.email" placeholder="Correo">
                <br>
                <button type="submit">Registrarse</button>
            </form>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name: "SingUp",

    data: function(){
        return{
            user: {
                username: "",
                password: "",
                name:     "",
                email:    "",    
                account   : {
                    last_change_date: (new Date()).toJSON().toString(),
                    is_active: false
                }

            }
        }
    },
    methods: {
        processSingUp: function(){
            axios.post(
                'http://127.0.0.1:8000/user/',
                
                this.user,
                {headers:{}}
            )

            .then((result) => {
				let dataSingUp = {
					tokenAccess : result.data.access,
					tokenRefresh : result.data.refresh,
					username : this.user.username
				}
				this.$emit('completedSingUp', dataSingUp)

			})
			.catch((error) =>{
				if(error.response.status == "401")
					alert("incorrect credentials")
			})

           
        }

    }

}
</script>

<style>

</style>