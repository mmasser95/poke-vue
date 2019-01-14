<template lang="pug">
  .home
    .row
      .col-lg-3
        h2="Estadisticas"
        table.table.table-hover
          tr
            th="Stat"
            th="Value"
            th="Effort"
          tr(v-for="s in pokemon.stats")
            td="{{s.stat.name}}"
            td="{{s.base_stat}}"
            td="{{s.effort}}"
      .col-lg-6
        input(type="text",v-on:change="getPok", v-model="nombre")
        h3.text-center="Sprites"
        img(v-bind:src="pokemon.sprites.back_default" v-if="s")
        img(v-bind:src="pokemon.sprites.front_default" v-if="s")
        h3="Tipo"
        ul
          li(v-for="t in pokemon.types")
            img(v-if="t.type.name==='poison'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/1/10/Tipo_veneno.gif")
            img(v-if="t.type.name==='grass'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/d/d6/Tipo_planta.gif")
            img(v-if="t.type.name==='fire'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/c/ce/Tipo_fuego.gif")
            img(v-if="t.type.name==='water'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/9/94/Tipo_agua.gif")
            img(v-if="t.type.name==='psychic'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/1/15/Tipo_ps%C3%ADquico.gif")
            img(v-if="t.type.name==='bug'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/f/fe/Tipo_bicho.gif")
            img(v-if="t.type.name==='steel'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/d/d9/Tipo_acero.gif")
            img(v-if="t.type.name==='dragon'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/0/01/Tipo_drag%C3%B3n.gif")
            img(v-if="t.type.name==='electric'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/1/1b/Tipo_el%C3%A9ctrico.gif")
            img(v-if="t.type.name==='ghost'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/4/47/Tipo_fantasma.gif")
            img(v-if="t.type.name==='flying'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/e/e1/Tipo_volador.gif")
            img(v-if="t.type.name==='normal'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/3/32/Tipo_normal.gif")
            img(v-if="t.type.name==='ground'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/1/1d/Tipo_tierra.gif")
            img(v-if="t.type.name==='rock'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/e/e0/Tipo_roca.gif")
            img(v-if="t.type.name==='ice'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/4/40/Tipo_hielo.gif")
            img(v-if="t.type.name==='fighting'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/b/b7/Tipo_lucha.gif")
            img(v-if="t.type.name==='fairy'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/b/bc/Tipo_hada.gif")
            img(v-if="t.type.name==='dark'" src="https://vignette.wikia.nocookie.net/es.pokemon/images/8/82/Tipo_siniestro.gif")
            

        table.table
          tr
            th="ID"
            td="{{pokemon.id}}"
          tr
            th="Nombre"
            td="{{pokemon.name}}"
          tr
            th="Altura"
            td="{{pokemon.height}}"
          tr
            th="Peso"
            td="{{pokemon.weight}}"
          tr
            th="Experiencia base"
            td="{{pokemon.base_experience}}"
        h3.text-center="Movimientos"
        .row
          .col-lg
            .card(v-for="m in pokemon.moves")
              .card-header
                h4="{{m.move.name}}"
              .card-body
                h5.secondary-text(v-if="d.version_group.name==='firered-leafgreen'",v-for="d in m.version_group_details")="{{d.version_group.name}}"
                    p.text-info="Se aprende en el nivel: {{d.level_learned_at}}"
                    p.text-warning="Se aprende con: {{d.move_learn_method.name}}"
                    hr
            
        h3.text-center="Apariciones"
        ul
          li(v-for="g in pokemon.game_indices")="{{g.version.name}}"
      .col-lg-3
        h2.text-center="Habilidades"
        ul
          li(v-for="a in pokemon.abilities")="{{a.ability.name}}"
</template>


<script>
var Pokedex = require('pokedex-promise-v2')
var options = {
  protocol: 'https',
  hostName: 'pokeapi.co',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
const P = new Pokedex(options);
export default {
  name: 'Home',
  props: {
    msg: String
  },
  data:() => {
    return{
      pokemon:{},
      nombre:"",
      s:false
    }
  },
  methods:{
    getPok(){
      P.getPokemonByName(this.nombre).then((result) => {
        this.pokemon=result
        this.s=true
      }).catch((err) => {
        console.log(`Error ${err}`)
      });
    }
  },
  mounted(){
    this.getPok()
  }
}
</script>
<style>
  li img{
    width: 50px
  }
  .card{
    margin-top: 20px
  }
</style>
