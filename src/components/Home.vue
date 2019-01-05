<template lang="pug">
  .home
    p="{{pokemon}}"
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
      pokemon:{}
    }
  },
  methods:{
    getPok(){
      P.getPokemonByName('charmeleon').then((result) => {
        this.pokemon=result
        
        
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
