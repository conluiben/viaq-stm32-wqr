<script setup>
import OneWarning from '../components/Warning.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1 id="welcome"> Welcome, user! </h1>
    <div id="allWarnings">
      <!-- <OneWarning v-for="item in count" :key="item"/> -->
      <!-- note: : is shorthand for v-bind -->
      <OneWarning @closeWarning="closeThisWarning" v-for="(warning,idx) in warnings" :wHeader="warning.header" :wText="warning.warningText" :key="idx"/>
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
import SensorService from "@/services/SensorService"
import { io } from "socket.io-client"

export default {
  data() {
    return {
      count: 2,
      warnings: [
        // {"header": "My sample header","warningText": "For an example, turn on AC or cooling for a more comfortable room temperature!"},
        // {"header": "Increased humidity detected!","warningText": "For another example, turn on AC or cooling for a more comfortable room temperature!"},
        // {"header": "Increased eCO2 detected!","warningText": "For another example, turn on AC or cooling for a more comfortable room temperature!"}
      ]
    }
  },
  mounted() {
    console.log("Hi");
    console.log(`${import.meta.env.VITE_SERVER_URL}`);
    // console.log(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_PORT}`); //separate port if localhost, but for REMOTE Railway link, no need to write the port variable! 
    this.getListOfWarnings();

    //socket setup
    // const socket = io(`${import.meta.env.VITE_SERVER_URL}:${import.meta.env.VITE_PORT}`,{secure: true});
    const socket = io(`${import.meta.env.VITE_SERVER_URL}`,{secure: true});
    socket.on("connect", () => {
      console.log("Good connection! ID:",socket.id); // x8WIv7-mJelg7on_ALbx
      socket.emit("hello from client", 5, "6", { 7: Uint8Array.from([8]) });
      socket.on("hello from server", () => {
        console.log("The server wanted to say hi, too!");
      });
      socket.on("new warning", (data) => {
        console.log("The server received a new warning");
        console.log(data);
        this.createWarning(data); //data is an object containing the new warning
      });
      socket.on("disconnect", () => {
        console.log(socket.id); // undefined
      });
    });
  },
  methods: {
    createWarning(warningObjectData){
      var headerText = "";
      var bodyText = "";
      const textLegends = {"temperature":["temperature","°C"],"humidity":["relative humidity","%"]} //format: "parameter": [<text label>, <units>]
      
      if(warningObjectData.warning==="threshold_high"){
        headerText = "Increased ";            
      } else if (warningObjectData.warning==="threshold_low"){
        headerText = "Decreased ";
      } else {
        headerText = "Caution: ";
      }
      headerText += `${textLegends[warningObjectData.parameter][0]} (${warningObjectData.value} ${textLegends[warningObjectData.parameter][1]})`;

      //body text, set warning per PARAMETER
      if(warningObjectData.parameter==="temperature"){
        bodyText = "Try turning on the AC or a cooling method for a more comfortable room temperature!";
      } else if (warningObjectData.parameter==="humidity") { //TODO: add for gas sensor, accelerometer, etc.
        bodyText = "The air feels heavy! Try turning on the AC for more comfort...";
      } else { //TODO: add for gas sensor, accelerometer, etc.
        bodyText = "Check this carefully! Ensure that the environment is safe...";
      }
      this.warnings.push({"header": headerText,"warningText": bodyText});
      
      /* var defaultString = `<div class="warningIcon"><img src="@/assets/danger.png"/></div><div class="warningText"><h2>${warningHeader}</h2><p>${warningContent}</p></div><div class="warningClose"><img src="@/assets/cross.png" @click="closeWarning"/></div>`;
      // var warningDiv = document.createElement("div");
      // warningDiv.classList.add("warning");
      // warningDiv.innerHTML = defaultString;
      // document.getElementById("allWarnings").appendChild(warningDiv);
      */
    },
    closeThisWarning(e) { //event e
      console.log("clicked warning:");
      // console.log(e.header); //correct header
      // console.log("warnings");

      var selectedWarning;
      //look for the correct warning and splice it
      for (var i=0; i<this.warnings.length; i++){
        if(this.warnings[i].header===e.header){
          selectedWarning = i; //the index only
        }
      }
      this.warnings.splice(selectedWarning,1);
      console.log("warnings left:");
      console.log(this.warnings);
    },
    async getListOfWarnings(){
      try {
        const resp = await SensorService.getAllWarnings({});
        //should already show warnings in last 60 minutes
        //TODO: should already update server of user's last visit AND warnings in last 60 minutes
        console.log("printed warnings");
        // console.log(resp.data);
        
        // ! still need to process data to readable!
        // from POST: we have attributes: "warning" (code), "parameter", "value" (float), "lastUpdate" (datetime)
        // GOAL: convert to attributes "header" and "warningText"
        // console.log("resp.data")
        // console.log(resp.data.allEntries)
        this.warnings = [];
        var aWarning;
        // var textLegends = {"temperature":["temperature","°C"],"humidity":["relative humidity","%"]} //format: "parameter": [<text label>, <units>]
        for (aWarning of resp.data.allEntries) { //aWarning is an object
          // aWarning = {}
          this.createWarning(aWarning);
          /*
          headerText = "";
          bodyText = "";
          if(aWarning.warning==="threshold_high"){
            headerText = "Increased ";            
          } else if (aWarning.warning==="threshold_low"){
            headerText = "Decreased ";
          } else {
            headerText = "Caution: ";
          }
          headerText += `${textLegends[aWarning.parameter][0]} (${aWarning.value}${textLegends[aWarning.parameter][1]})`;

          //body text, set warning per PARAMETER
          if(aWarning.parameter==="temperature"){
            bodyText = "Try turning on the AC or a cooling method for a more comfortable room temperature!";
          } else {
            bodyText = "Check this carefully! Ensure that the environment is safe..."
          }
          this.warnings.push({"header": headerText,"warningText": bodyText});
          */
        }


        // this.warnings = resp.data.allEntries.slice()
        console.log("I fetched the last warnings! Result:");
        console.log(this.warnings);
      } catch (err) {
        console.error(err);
        // this.error = err.response.data.error;
      }
      console.log("I run getListOfWarnings from the function!");
    }

    //tip: try stacking warnings with reference: https://stackoverflow.com/questions/67122576/how-to-add-an-existing-component-to-a-template-onclick-in-vue-js
  }
}
</script>