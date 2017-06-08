<template>
  <div class="container">
    <div class="row">
      <div class="col s10 offset-s2">
        <button class="btn waves-effect waves-light" v-on:click="setDisplay('qp')">Quickplay</button>
        <button class="btn waves-effect waves-light" v-on:click="setDisplay('cp')">Competitive</button>
      </div>
    </div>
    <quickplay v-if="childDisplay === 'qp'"></quickplay> 
    <competitive v-if="childDisplay === 'cp'"></competitive>
  </div>
</template>

<script>
import quickplay from './Quickplay'
import competitive from './Competitive'

export default {
  data () {
    return {
      competitive: false,
      childDisplay: ''
    }
  },
  components: {
    quickplay,
    competitive
  },
  methods: {
    setDisplay (displayType) {
      this.childDisplay = displayType
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
.col.s10.offset-s2 {
  text-align: center;
  padding-right: 2.8cm;
}
</style>
