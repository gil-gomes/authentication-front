<template>
    
    <div class="login">

            <div class="logo">
                <img src="img/logo.png" alt="Logo">
            </div>

            <div class="form">
                <form @submit.prevent="login()">

                    <div class="form-group">
                        <input type="text" class="form-control" id="user" placeholder="Usuário" v-model="user">
                    </div>

                    <div class="form-group mt-3">
                        <input type="password" class="form-control" id="password" placeholder="Senha" v-model="password">
                    </div>
                    
                    <div class="button">
                        <button type="submit" class="btn mt-4">
                            Entrar
                        </button>
                    </div>

                </form>
                
            </div>

    </div>
</template>

<script src="./loginComponent.ts" lan="ts">

</script>

<style>
    @import './loginStyle.css';
</style>