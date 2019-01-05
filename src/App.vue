<template lang="pug">
  #app.container
    b-jumbotron(header="App")
    .row
      .col-lg-2
      .col-lg-9
        router-view

</template>

<script>
export default {
  name: 'app',
}
</script>