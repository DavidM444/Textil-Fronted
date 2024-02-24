<template>
    <div class="container-fluid d-flex SignUp">
        <div class="col d-none d-sm-block flt">
            <img src="../assets/img/moonstarious-project-KbaSNX-6Vdo-unsplash.jpg" alt="">
        </div>
        <div class="col">
            <div class="row">
                <div class="container-fluid pt-3">
                    <div class="d-flex logo">
                        <img class="p-1" src="../assets/img/T.png" alt="">
                        <h1 class="p-3 text-center">Quality Tex</h1>
                    </div>
                </div>
            </div>
            <section class="mt-5 reg">
                <h2 class="text-center">Registrarse</h2>
                <form class="mb-3" @submit.prevent="processSignUp">
                    <label for="name" class="form-label">Nombre</label>
                    <input v-model="user.nombre" type="text" class="form-control" name="name" id="name" aria-describedby="helpId" required
                        placeholder="">

                    <label for="lname" class="form-label">Apellido</label>
                    <input v-model="user.apellido" type="text" class="form-control" name="lname" id="name" aria-describedby="helpId" required
                        placeholder="">

                    <label for="Email" class="form-label">Email</label>
                    <input v-model="user.email" type="email" class="form-control" required name="Email" id="Email" aria-describedby="helpId"
                        placeholder="">

                    <label for="contraseña" class="form-label">Contraseña</label>
                    <input v-model="user.clave" type="password" class="form-control" required name="contraseña" id="contraseña">

                    <button type="submit" class="btn btn btn-primary mt-3">Registrar</button>

                </form>

            </section>
        </div>


    </div>
    <foot />
</template>
<script>
import foot from './footer.vue'
import axios from 'axios'
import { SwalFireAlert } from './peticiones/http'
export default {
    name: "Singup",
    components: {
        foot,
    },
    data: function () {
        return {
            user: {
                nombre: "",
                apellido: "",
                email: "",
                clave: ""
            }

        }
    },
    methods: {
        processSignUp: function() {
            axios.post(
                "http://localhost:8081/signup",
                this.user,
                { headers: {} }
            )
                .then((result) => {
                    console.log("res " ,result.data)
                    let { nombre:userName, apellido: userLastName } = result.data;
                    SwalFireAlert('success',`Usuario registrado: ${userName} ${userLastName} `, "Inicie Sesion","Ok")
                    this.$router.push("Login");
                    /*

                    //Autentication Automatic
                    let dataSignUp = {
                        name: this.user.nombre,
                        apellido: this.user.apellido,
                        email: this.user.email,
                        token_access: result.data.clave,
                
                    }
                    this.$emit('completedSignUp', dataSignUp)
                    */
                })
                .catch((error) => {
                    console.log(error)
                    alert("ERROR: Fallo en el registro.");
                });
        }
    }
}
</script>


<style lang="scss" scoped>
$bg-ss: #00473e;
$bg2: #f2f7f5;


.SignUp {
    background-color: $bg2;
}

.flt {
    img {
        height: 38em;
        width: 90%;
    }
}

.btnr {
    background-color: $bg-ss;
    border-bottom: #00473e;
}

.btnr:hover {
    background-color: #0d6efd;
    font-size: large;
}

.reg h2 {
    color: #00473e;
}
</style>