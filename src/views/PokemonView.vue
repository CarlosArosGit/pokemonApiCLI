<template>
    <div>
        <div class="marco">
            <h2>Pokemon: {{ name }}</h2>
            <img :src="image" alt="" class="imgDetallePokemon">
            <img :src="shiny" alt="" class="imgDetallePokemon">
            <h3>Tipo: {{ type }}</h3>
            <h3>Habilidades:</h3>
            <h4 v-for="ab in abilities">{{ ab }}</h4>
        </div>
        <router-link to="/" class="btnVolver">Volver</router-link>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    props: ['id'],
    data: function () {
        return {
            name: "",
            image: "",
            shiny: "",
            type: "",
            ability: "",
            abilities: []
        }
    },
    methods: {
        fetchPokemon() {
            axios.get(`https://pokeapi.co/api/v2/pokemon/${this.id}`)
                .then(resp => {
                    console.log(resp);
                    this.setData(resp.data);
                })
                .catch(error => {
                    console.log(error)
                })
        },
        setData(data) {
            this.name = data.name;
            this.image = data.sprites.front_default;
            this.shiny = data.sprites.front_shiny;
            this.type = data.types[0].type.name;
            for (var i = 0; i < data.abilities.length; i++) {
                this.ability = data.abilities[i].ability.name;
                this.abilities.push(this.ability);
            }

        }
    },
    created() {
        this.fetchPokemon();
    }
}
</script>

<style scoped>
.imgDetallePokemon {
    height: 200px;
    width: 200px;
}

.marco {
    border: 0.5px solid green;
    width: 30%;
    margin-left: auto;
    margin-right: auto;
}

.btnVolver {
    color: green;
    text-decoration: none;
    font-size: 20px;
    font-weight: 700;
}
@media only screen and (max-width: 1460px) {
    .marco {
    width: 96%;
}
}
</style>