<script setup>
import OneWarning from '../components/Warning.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1 id="welcome"> Welcome, user! </h1>
    <div id="allWarnings">
      <OneWarning v-for="item in count" :key="index"/>
    </div>
    <div class="allSensors">
      <div class="sensorGroup temp">
        <h2>Temperature</h2>
        <iframe width="450" height="260" style="border: 1px solid #cccccc;"
          src="https://thingspeak.com/channels/2160851/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&round=1&title=Temperature&type=line"></iframe>
      </div>
      <div class="sensorGroup humid">
        <h2>Humidity</h2>
        <iframe width="450" height="260" style="border: 1px solid #cccccc;"
          src="https://thingspeak.com/channels/2160851/charts/2?bgcolor=%23ffffff&color=%23d62020&days=1&dynamic=true&title=Humidity&type=line"></iframe>
      </div>
      <div class="sensorGroup eco2">
        <h2>eCO2</h2>
        <iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/2184702/charts/3?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
      </div>
      <div class="sensorGroup tvoc">
        <h2>TVOC</h2>
        <iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/2184702/charts/4?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
      </div>
      <div class="sensorGroup accelx">
        <h2>Acceleration along X</h2>
        <iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/2186840/charts/1?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
      </div>
      <div class="sensorGroup accely">
        <h2>Acceleration along Y</h2>
        <iframe width="450" height="260" style="border: 1px solid #cccccc;" src="https://thingspeak.com/channels/2186840/charts/2?bgcolor=%23ffffff&color=%23d62020&dynamic=true&results=60&type=line&update=15"></iframe>
      </div>
    </div>
  </main>
</template>

<style scoped>

h1#welcome{
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
  text-decoration: underline;
}

div.allSensors{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center; /* aligns content horizontally when wrapped */
  gap: 10px;
}

div.allSensors  div.sensorGroup  h2{
  font-weight: bold;
}

</style>

<script>
// import AuthenticationService from "@/services/AuthenticationService"

export default {
  data() {
    return {
      count: 2
    }
  },
  mounted() {
    console.log("Hi");
    this.getListOfWarnings();
  },
  methods: {
    createWarning(warningHeader = "My warning header", warningContent = "Some content here"){
      var defaultString = `<div class="warningIcon"><img src="@/assets/danger.png"/></div><div class="warningText"><h2>${warningHeader}</h2><p>${warningContent}</p></div><div class="warningClose"><img src="@/assets/cross.png" @click="closeWarning"/></div>`;
      var warningDiv = document.createElement("div");
      warningDiv.classList.add("warning");
      warningDiv.innerHTML = defaultString;
      document.getElementById("allWarnings").appendChild(warningDiv);
    },
    getListOfWarnings(){
      /*
      try {
        const resp = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log("Clicked the LOGIN button!");
        console.log(resp.data);
      } catch (err) {
        this.error = err.response.data.error;
      }*/
      console.log("I run getListOfWarnings from the function!")
    }

    //tip: try stacking warnings with reference: https://stackoverflow.com/questions/67122576/how-to-add-an-existing-component-to-a-template-onclick-in-vue-js
  }
}
</script>