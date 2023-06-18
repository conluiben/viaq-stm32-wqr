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
  <input type="email" v-model="email" name="email" placeholder="Email" />
  <input type="password" v-model="password" name="password" placeholder="Password" />
  <br />
  <div class="error" v-html="error"></div>
  <button @click="login">Log in</button>
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
  watch: { //just for the testing
    email(value) {
      console.log("email:", value)
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.email = "hello_email@yahoo.com"
    // }, 2000);
  },
  methods: {
    async login() {
      try {
        const resp = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log("Clicked the LOGIN button!");
        console.log(resp.data);
      } catch (err) {
        this.error = err.response.data.error;
      }
    }
  }
}
</script>
