
<template>
  <main>
    <h1>Bem vindo {{ name }}</h1>
  </main>
</template>

<script lang="ts">
import { defineComponent } from "vue"
  export default defineComponent({
    name: "HomeView",

    data() {
      return {
        name: 'Gil'
      }
    },
  });
</script>