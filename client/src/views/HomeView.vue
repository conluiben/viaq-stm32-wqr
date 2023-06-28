<script setup>
// import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <!-- <TheWelcome /> -->
    <h1 id="welcome"> Welcome, user! </h1>
    <div class="allWarnings">
      <div class="warning">
        <div class="warningIcon">
          <img src="@/assets/danger.png" />
        </div>
        <div class="warningText">
          <h2>Increased temperature detected!</h2>
          <p>Turn on AC or cooling for a more comfortable room temperature!</p>
        </div>
        <div class="warningClose">
          <img src="@/assets/cross.png" />
        </div>
      </div>
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
div.warning {
  display: flex;
  flex-direction: row;
  width: 90%;
  margin: 0 auto;
  max-height: 170px;
  background-color: lightcoral;
  /* justify-content: space-between; */
  margin: 10px auto;
  padding: 20px;
  gap: 0 20px;
  color: #222222;
}

div.warning div.warningIcon {
  /* background-color: orangered; */
  width: 15%;
  max-width: 50px;
  display: flex;
  align-items: center;
  /* padding: 20px; */
  /* background-color: blue; */
}

div.warning div.warningIcon img {
  width: 100%;
  /* height: 100%; */
}

div.warning div.warningText {
  display: flex;
  flex-direction: column;
  flex-grow: 2;
  align-items: flex-start;
  /* text alignment */
  justify-content: center;
  /* vertical align */
  /* background-color: yellow; */
}

div.warning div.warningText h2 {
  font-family: Poppins, sans-serif;
  line-height: 1.75rem;
  font-weight: bold;
  font-size: 1.625rem;
  margin-bottom: 7px;
}

div.warning div.warningText p {
  font-family: Lato, sans-serif;
  font-size: 1rem;
  line-height: 1.25rem;
}

div.warning div.warningClose {
  /* background-color: orangered; */
  width: 5%;
  display: flex;
  align-items: center;
  /* padding: 5px; */
  min-width: 10px;
  max-width: 15px;
}

div.warning div.warningClose img {
  width: 100%;
  /* height: 10%; */
  /* min-height: 20px; */
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

</script>