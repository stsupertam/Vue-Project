<template>
  <div class="container">
    <cake></cake>
    <div class="text">
      <h1>Happy Birthday!</h1>
    </div>
    <div class="row">
      <div class="col s12 offset-s5">
        <div class="circle">
          <div class="round-button"><div class="round-button-circle"><a href="#" class="round-button">Message</a></div></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import cake from './Cake'
export default {
  data: {
    show: true
  },
  components: {
    cake
  }
}

</script>

<style scoped>
@import url(https://fonts.googleapis.com/css?family=Lato:300italic);

.text {
  color: #8b6a60;
  font-family: 'Lato', sans-serif;
  font-weight: 300;
  font-style:italic;
  text-align: center;
}
.circle {
  padding-left: 30px;
  width:35%;
  height:35%;
}
.round-button {
  width:25%;
}
.round-button-circle {
  width: 100%;
  height:0;
  padding-bottom: 100%;
  border-radius: 50%;
  border:3.5px solid #cfdcec;
  overflow:hidden;
        
  background: #a88679; 
  box-shadow: 0 0 3px gray;
}
.round-button-circle:hover {
  background:#8b6a60;
}
.round-button a {
  display:block;
  float:left;
  width:100%;
  padding-top:50%;
  padding-bottom:50%;
  line-height:1em;
  margin-top:-0.5em;
        
  text-align:center;
  color:#e2eaf3;
  font-family:'Lato';
  font-size:0.8em;
  font-weight:bold;
  text-decoration:none;
}

</style>
