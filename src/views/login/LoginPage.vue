<template>

    <div class="login">

        <div class="header">
            <h1>G.A Imports</h1>
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
                    <button type="submit" class="btn">
                        Entrar
                    </button>
                </div>

            </form>
            
        </div>

    </div>
</template>

<script src="./login-component.ts" lan="ts">

</script>

<style>
    @import './login-style.css';
</style>