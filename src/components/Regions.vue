<template lang="pug">
  .Regions
    .row
      .col-lg
        h2="Regiones"
        .card(v-for="location in region.locations")
          .card-header
            h2="{{location.name}}"
          .card-body
            p="{{location.url}}"
          .card-footer
        br
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
  name:"Regions",
  data:() => {
    return{
      region:{},
      nombre:'hoenn',
      s:false
    }
  },
  methods:{
    getReg(){
      P.getRegionByName(this.nombre).then((result) => {
        this.region=result
        console.log(this.region);
        
        this.s=true
      }).catch((err) => {
        console.log(`Error ${err}`);
      });
    }
  },
  mounted(){
    this.getReg()
  }
}
</script>

