<template>
  <div class="container">
    <div class="row">
      <div class="col s10 offset-s2">
        <button class="btn waves-effect light-blue darken-1" v-on:click="setDisplay('qp')">Quickplay</button>
        <button class="btn waves-effect deep-orange darken-1" v-on:click="setDisplay('cp')">Competitive</button>
      </div>
    </div>
    <div v-if="playerStat">    
      <quickplay v-if="childDisplay === 'qp'" v-bind:quickplay="quickplay"></quickplay> 
      <competitive v-if="childDisplay === 'cp'" v-bind:competitive="competitive"></competitive>
    </div>
  </div>
</template>

<script>
import quickplay from './Quickplay'
import competitive from './Competitive'

export default {
  props: ['playerStat'],
  data () {
    return {
      quickplay: [],
      competitive: [],
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
      this.quickplay = this.playerStat.stats.game.quickplay
      this.competitive = this.playerStat.stats.game.competitive
    }
  }
}
</script>

<style scoped>
h1 {
  text-align: center;
  padding: 0;
}
.col.s10.offset-s2 {
  padding: 35px;
}
</style>
