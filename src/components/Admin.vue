<template>
    <head>
        <div class="text-cente">
            <h2>Administrador</h2>
        

        </div>
        
    </head>
</template>
<script>

import axios from 'axios';

export default{
    name: "admin",
    data: function(){
        return {
            user: {
               name: "dd", 
            },
            usuarios: []
        }
    },
    methods: {
        getHeaders: ()=>{
            return {
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                }
            }
        },
        loadUsers: function(){
            axios.get(this.getHeaders).then((result)=>{
                this.usuarios = result.data;
            });
        }
    }
}
</script>

