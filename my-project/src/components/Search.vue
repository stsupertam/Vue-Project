<template>
  <div class="container">
    <h1>Overwatch Stat</h1>
    <div class="row">
      <div class="col s6 offset-s3">
        <div class="input-field">
          <form v-on:submit.prevent="submitRequest">
            <div class="col s10">
              <input id="battleTag" type="text" class="validate" v-model="battleTag">
              <label for="battleTag">BattleTag</label>
            </div>
            <div class="col s2">
              <button class="btn waves-effect waves-light" type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
      <profile v-if="childDisplay" v-bind:stats="data"></profile>
    </div>
  </div>
</template>

<script>
import profile from './Profile'

const api = 'http://ow-api.herokuapp.com/stats/pc/us/SuperTam-6491'

export default {
  name: 'hello',
  data () {
    return {
      msg: 'Test',
      battleTag: '',
      data: [],
      childDisplay: false,
      err: []
    }
  },
  components: {
    profile
  },
  methods: {
    submitRequest (event) {
      let url = api
      this.axios.get(url).then((response) => {
        console.log(response.data)
        this.data = response.data
        this.childDisplay = true
      }).catch(error => {
        this.err.push(error)
        this.data = []
      })
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
