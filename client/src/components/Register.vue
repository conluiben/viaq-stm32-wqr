<script setup>
/*
defineProps({
  msg: {
    type: String,
    required: true
  }
})
*/
</script>

<template>
  <div>
    <h1> Register </h1>
    <input type="email" v-model="email" name="email" placeholder="Email" />
    <input type="password" v-model="password" name="password" placeholder="Password" />
    <br/>
    <button @click="register">Register</button>
  </div>
</template>

<style scoped>
</style>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    email(value) {
      console.log("email:",value)
    }
  },
  mounted(){
    setTimeout(() => {
      this.email = "hello_email@yahoo.com"
    },2000);
  },
  methods: {
    async register(){
      const resp = await AuthenticationService.register({
        email: this.email,
        password: this.password
      });
      console.log("Clicked the button!");
      console.log(resp.data);
    }
  }
}
</script>
