<!-- <template>
  <button class="login-button" @click="showLogin">Login</button>
  <div class="login-overlay" v-if="showingLogin">
    <div class="login-container">
      <h2>Login</h2>
      <form>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="email" name="email" placeholder="Enter your email"/>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" name="password" placeholder="Enter your password"/>
        </div>
        <button type="submit">Log in</button>
      </form>
      <button class="close-button" @click="hideLogin">Close</button>
    </div>
  </div>
</template>

<script>
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "navbar",
  data() {
    return {
      email: "",
      password: "",
      loggingIn: false,
      showingLogin: false,
    };
  },
  methods: {
    async login() {
      this.loggingIn = true;
      try {
        const userCredential = await firebase
          .auth()
          .signInWithEmailAndPassword(this.email, this.password);
        this.$router.push("/");
      } catch (error) {
        console.error(error);
      }
      this.loggingIn = false;
    },
    showLogin() {
      this.showingLogin = true;
    },
    hideLogin() {
      this.showingLogin = false;
    },
  },
};
</script> -->

<template>
  <div>
    <button class="login-button" @click="showLogin">Log in</button>
    <div class="login-overlay" v-if="showingLogin">
      <div class="login-container">
        <h2>Login</h2>
        <form>
          <div class="form-group">
        <input v-model="email" type="email" placeholder="Email" />
        </div>
        <div class="form-group">
          <input v-model="password" type="password" placeholder="Password" />
          </div>
        <button @click="login" :disabled="loggingIn">{{ loggingIn ? 'Logging in...' : 'Log in' }}</button>
      </form>
      <button class="close-button" @click="hideLogin">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const email = ref('');
const password = ref('');
const loggingIn = ref(false);
const showingLogin = ref(false);

async function login() {
  loggingIn.value = true;
  try {
    const userCredential = await firebase.auth().signInWithEmailAndPassword(email.value, password.value);
    $router.push('/');
  } catch (error) {
    console.error(error);
  }
  loggingIn.value = false;
}

function showLogin() {
  showingLogin.value = true;
}

function hideLogin() {
  showingLogin.value = false;
}
</script>


<style>
.login-button {
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: Calisto MT;
  border: 0.15em solid;
  border-radius: 0.45em;
  width: 100px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.login-button:hover{
  border-color: hsl(104, 100%, 86%);
  border-radius: 0.45em;
  background-color: hsl(104, 100%, 86%);
  box-shadow: 0px 0px 0.75em 1px hsl(104, 100%, 86%);
  animation: text-flicker 1.5s linear infinite;
  color: black;
}

.login-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 9999;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login-container {
  background-color: #fff;
  width: 400px;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  text-align: center;
  transform: translateY(0%);
  transition: transform 0.5s ease-in-out;
}

.login-container.show {
  transform: translateY(0);
}

.login-container h2 {
  margin-bottom: 30px;
  font-size: 24px;
  font-weight: bold;
  color: #333;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.login-container form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.login-container form .form-group {
  margin-bottom: 20px;
  width: 100%;
}

.login-container form label {
  display: block;
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.login-container form input {
  display: block;
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(0, 105, 217, 0.7);
  transition: background-color 0.5s ease-in-out;
}

.login-container form input:focus {
  outline: none;
  background-color: #0069d9;
}

.login-container form button {
  display: block;
  width: 100%;
  padding: 10px;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.5s ease-in-out;
}

.login-container form button:hover {
  background-color: #0069d9;
}

.login-container form button:active {
  transform: scale(0.95);
}

.close-button {
  background-color: transparent;
  border: none;
  color: #888;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

::placeholder {
  /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: #ddd;
  opacity: 1; /* Firefox */
}

::-ms-input-placeholder {
  /* Microsoft Edge */
  color: #ddd;
}
</style>
