<template lang="pug">
  #app.container-fluid
    b-jumbotron(header="App")
    .row
      .col-lg-2
        router-link(to="/regions")="Regions"
        router-link(to="/locations")="Locations"
      .col-lg
        router-view

</template>

<script>
export default {
  name: 'app',
}
</script>