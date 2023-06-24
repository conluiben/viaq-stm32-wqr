<script setup>
</script>

<template>
    <div class="navHeader">
        <p>My First Vue: Tab Tracker!</p>
        <button @click="navigateTo({name: 'home'})"> <!-- note parameter of navigateTo is NAME set in router file, not /url -->
            Home
        </button>
        <button @click="navigateTo({name:'login'})">
            Login
        </button>
        <button @click="navigateTo({name:'register'})">
            Sign Up
        </button>
    </div>
</template>

<script>
export default {
    methods: {
        navigateTo(route) {
            this.$router.push(route)
            //console.log("I run!")
        }
    }
}
</script>

<style scoped>
.navHeader {
    /* box-sizing: border-box; */
    display: flex;
    /* position: block; */
    justify-content: space-around;
    top: 0;
    left: 0;
    padding: 15px 10px;
    /* font-family: "Open Sans"; */
    background-color: lightblue;
    width: 100%;
    color: whitesmoke;
}
</style>