<template>
  <div class="container">
    <div class="row">
      <div class="col s6 offset-s3">
        <div class="input-field">
          <form v-on:submit.prevent="submitRequest">
            <div class="row">
              <h1>Create New HBD Message</h1>
            </div>
            <div class="col s10">
              <div class="row">
                <div class="input-field col s12">
                  <input id="hbd_date" type="text" class="validate" v-model="hbd_date">
                  <label for="hbd_date">HBD Date</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="sender" type="text" class="validate" v-model="sender">
                  <label for="sender">Sender</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="receiver" type="text" class="validate" v-model="receiver">
                  <label for="receiver">Receiver</label>
                </div>
              </div>
              <div class="row">
                <div class="input-field col s12">
                  <input id="message" type="text" class="validate" v-model="message">
                  <label for="message">Message</label>
                </div>
              </div>
            </div>
            <button class="btn waves-effect waves-light" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
}

</script>

<style scoped>
  h1 {
    font-size: 36px;
  }
</style>
