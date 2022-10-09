<template>
    <div id="app">
        <div class="cabecera">
            <div class="titulo">
                <h2>Nova Text Quality Sistem</h2> 
            </div>
            
            <div class="menu">
                <ul>
                    <li class="list active">
                        <a href="https://www.youtube.com/">
                            <span class="icon">
                                <ion-icon name="home-outline"></ion-icon>
                            </span>
                            <span class="text">Home</span>
                        </a>
                    </li>

                    <li class="list">
                        <a href="#">
                            <span class="icon">
                                <ion-icon name="log-in-outline"></ion-icon>
                            </span>
                            <span class="text">login</span>
                        </a>

                    </li>

                    <li class="list">
                        <a href="#">
                            <span class="icon">
                                <ion-icon name="person-add-outline"></ion-icon>
                            </span>
                            <span class="text">Sing Up</span>
                        </a>

                    </li>
                    <li class="list">
                        <a href="#">
                            <span class="icon">
                                <ion-icon name="log-out-outline"></ion-icon>
                            </span>
                            <span class="text">Close Sesion</span>
                        </a>

                    </li>

                    <li class="list">
                        <a href="#">
                            <span class="icon">
                                <ion-icon name="business-outline"></ion-icon>
                            </span>
                            <span class="text">About Us</span>
                        </a>

                    </li>
                    <div class="indicator"></div>
                    
                </ul>

            </div>
        </div>






















        <div class="centro">
            
                algljk
                dafdjkfla
                fadfndfa
                ffdsnfmdaf

            

        </div>
        <div class="inferior">
            contacto

        </div>


    
    </div>
    
    
   
    
  
</template>


<script>
  
    export default{
        name:"App"

    }
    
    
</script>






<style>
    
    body{
        max-width: 0 0 0 0;
        background-color: blueviolet;
        display: flex;
    }
    :root
    {
        --clr: #222327;
    }

    .cabecera {
        position:relative;
        background-color: aquamarine;
        
        width:1500px;
        height: 149px;

        
    }

    .titulo
    {
        position: relative;
        width: 300px;
        top: 20px;
        float: left;
        left: 30px;
    }
   
    .menu
    {
        
        position: relative;
        left: 800px;
        width: 400px;
        height: 60px;
        display: flex;
        top: 40px;
       
        background-color: rgb(58, 142, 170);
        
        justify-content:center;
        align-items:center;
        border-radius: 10px;
        
    
       

    }
    .menu ul
    {
       
        display:flex;
        width: 200px;

    }
    .menu ul li{
        position: relative;
        list-style: none;
        width: 80px;
        height: 70px;
        z-index: 1;
        
    }

    .menu ul li a {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        width: 100;
        text-align: center;
        font-weight: 500;
    }
    .menu ul li a .icon {
        position: relative;
        display: block;
        line-height: 75px;
        font-size: 1.5em;
        text-align: center;
        transition: 0.5s;
        color: var(--clr);

    }
    .menu ul li.active a .icon {
        transform: translateY(-32px);
    }

    .menu ul li a .text{
        position: absolute;
        color: var(--clr);
        font-weight: 400;
        font-size: 0.85em;
        letter-spacing: 0.05em;
        transition: 0.5s;
        opacity: 0;
        transform: translateY(20px);
    }
    .menu ul li.active a .text{
        opacity: 1;
        transform: translateY(10px);

    }
    .indicator {
        position: absolute;
        top: -60%;
        left: 114px;
        width: 42px;
        height: 47px;
        background: chartreuse;
        border-radius: 50%;
        border: 6px solid var(--clr);
        transition: 0.5s;
        
    }
    .indicator::before {
        content: '';
        position: absolute;
        top: 30px;
        left:-20px;
        width: 20px;
        height: 20px;
        background: transparent;
        border-top-right-radius: 20px;
        box-shadow: 0px -10px 0 0 blueviolet;
    }
    .indicator::after {
        content: '';
        position: absolute;
        top: 30px;
        right:-20px;
        width: 20px;
        height: 20px;
        background: transparent;
        border-top-left-radius: 20px;
        box-shadow: 0px -10px 0 0 blueviolet;
    }



    .menu ul li:nth-child(1).active ~ .indicator
    {
        transform: translateX(calc(30px * 0));
    }

    .menu ul li:nth-child(2).active ~ .indicator
    {
        transform: translateX(calc(40px * 1));
    }
    .menu ul li:nth-child(3).active ~ .indicator
    {
        transform: translateX(calc(40px * 2));
    }
    .menu ul li:nth-child(4).active ~ .indicator
    {
        transform: translateX(calc(40px * 3));
    }
    .menu ul li:nth-child(5).active ~ .indicator
    {
        transform: translateX(calc(40px * 4));
    }














/* Estilos para el titulo de la cabecera*/

    .centro {
        background-color: rgb(239, 239, 239);
        width: auto;
        height: 100px;
    }
    .inferior {
        background-color: rgb(152, 170, 15);
        width: auto;
        height:100px;
    }


</style>




