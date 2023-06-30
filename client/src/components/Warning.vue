<script setup>
</script>

<template>
    <div class="warning">
        <div class="warningIcon">
            <img src="@/assets/danger.png" />
        </div>
        <div class="warningText">
            <h2>Increased temperature detected!</h2>
            <p>Turn on AC or cooling for a more comfortable room temperature!</p>
        </div>
        <div class="warningClose">
            <img src="@/assets/cross.png" @click="closeWarning" />
        </div>
    </div>
</template>

<script>
export default {
    methods: {
        closeWarning(e){ //event e
            console.log("clicked warning:");
            console.log(e);
            e.target.closest("div.warning").remove();
        }
    }
}
</script>

<style scoped>
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

div.warning div.warningClose img:hover {
  cursor: pointer;
}

</style>