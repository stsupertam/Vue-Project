<template>
  <div class="container">
    <div class="row">
      <div class="col s6 offset-s3">
        <div class="input-field col s10 offset-s1">
          <div class="card">
            <div class="card-image waves-effect waves-block waves-light">
              <img class="activator" v-bind:src="stats.portrait" />
            </div>
            <div class="card-content">
              <span class="card-title activator grey-text text-darken-4">Profile</span>
            </div>
            <div class="card-reveal">
              <span class="card-title grey-text text-darken-4">Profile<i class="material-icons right">close</i></span>
              <p>Username : {{ stats.username }}</p>
              <p>Level : {{ stats.level }}</p>
            </div>
          </div>
        </div>
     </div>
     <stat></stat>
    </div>
  </div>
</template>

<script>
import stat from './Stat'

export default {
  props: ['stats'],
  data () {
    return {
    }
  },
  components: {
    stat
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
.card {
  align: center;
}
</style>
