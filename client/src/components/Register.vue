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
    <br />
    <div class="error" v-html="error"></div>
    <button @click="register">Register</button>
  </div>
</template>

<style scoped>
.error {
  color: red;
}
</style>

<script>
import AuthenticationService from "@/services/AuthenticationService"
export default {
  data() {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email(value) {
      console.log("email:", value)
    }
  },
  mounted() {
    setTimeout(() => {
      this.email = "hello_email@yahoo.com"
    }, 2000);
  },
  methods: {
    async register() {
      try {
        const resp = await AuthenticationService.register({
          email: this.email,
          password: this.password
        });
        console.log("Clicked the button!");
        console.log(resp.data);
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
}
</script>
