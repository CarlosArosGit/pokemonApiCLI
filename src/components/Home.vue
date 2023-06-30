<template>
    <form>
        <h1>Buscador</h1>
        <label for="">Ingrese Id Pokemon (1-1010)</label>
        <input type="text" v-model="pokemon_id">
        <button @click.prevent="search">Buscar</button>
    </form>
</template>
<script>
export default {
    name: "Home-Component",
    data: function () {
        return {
            pokemon_id: "",
        }
    },
    methods: {
        search() {
            if (this.pokemon_id === "") return
            this.$router.push(`/pokemon/${this.pokemon_id}`)
        }
    }
}
</script>
<style scoped>
form {
    border: 2px solid #42b983;
    padding-bottom: 20px;
    width: 60%;
    margin: 0 auto;
}
</style>