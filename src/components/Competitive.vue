<template>
  <div class="container">
    <div class="row">
      <div class="card-panel deep-orange darken-1">
        <div class="row">
          <div class="col s6">
            <h6 v-for="i in competitive.length">
              {{ competitive[i-1].title }}
            </h6>
          </div>
          <div class="col s6">
            <h6 v-for="i in competitive.length">
              {{ competitive[i-1].value }}
            </h6>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  props: ['competitive'],
  data () {
    return {
    }
  }
}
</script>

<style scoped>
h6 {
  color: white;
}
</style>

