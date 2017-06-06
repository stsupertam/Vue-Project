<template>
  <div class="container">
    <h1>Director</h1>
    <div class="row">
      <div class="col s6 offset-s3">
        <div class="input-field col s10 offset-s1">
          Director Name<input id="movie_name" v-model="movie_name">
          <button v-on:click="submitRequest" class="btn waves-effect waves-light" type="submit">submit</button>
        </div>
     </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Test',
      movie_name: ''
    }
  },
  methods: {
    submitRequest (event) {
      this.movie_name = 'amuro ray'
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>

