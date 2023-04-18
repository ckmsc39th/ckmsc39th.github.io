<template>
  <nav class="navbar">
    <div class="flex items-center gap-1">
      <router-link :to="{ name: 'Home' }" class="homelink"
        >Luminescence</router-link
      >
    </div>

    <div class="flex items-center gap-1 pr-20 pl-20">
      <router-link :to="{ name: 'About' }" class="link">About</router-link>
      <router-link :to="{ name: 'Categories' }" class="link"
        >Categories</router-link
      >
      <router-link :to="{ name: 'Works' }" class="link">Works</router-link>
      <router-link :to="{ name: 'Schedule' }" class="link"
        >Schedule</router-link
      >
      <router-link :to="{ name: 'Contact' }" class="link">Contact</router-link>
    </div>
    <div class="flex items-center gap-1">
      <button class="login-button" @click="showLogin">Login</button>
      <div class="login-overlay" v-if="showingLogin">
        <div class="login-container">
          <h2>Login</h2>
          <form>
            <div class="form-group">
              <input v-model="email" type="email" placeholder="Email" />
            </div>
            <div class="form-group">
              <input
                v-model="password"
                type="password"
                placeholder="Password"
              />
            </div>
            <button type="button" @click="login" :disabled="loggingIn">
              {{ loggingIn ? "Logging in..." : "Log in" }}
            </button>
          </form>
          <button class="close-button" @click="hideLogin">Cancel</button>
        </div>
      </div>
      <a
        href="https://www.youtube.com/@ckmsc39th_luminescence"
        target="_blank"
        rel="noopener noreferrer"
        class="icon"
      >
        <vue-feather type="youtube" size="25"></vue-feather>
      </a>
      <a
        href="https://instagram.com/luminescence_ckmsc39th_"
        target="_blank"
        rel="noopener noreferrer"
        class="icon"
      >
        <vue-feather type="instagram" size="25"></vue-feather>
      </a>
    </div>
  </nav>
</template>

<script>
import { ref } from "vue";
import feather from "feather-icons";
feather.replace();

const email = ref("");
const password = ref("");
const loggingIn = ref(false);
const showingLogin = ref(false);

const correctEmail = "123@email.com";
const correctPasswd = "1234";

async function login() {
  loggingIn.value = true;
  try {
    if (email.value === correctEmail && password.value === correctPasswd) {
      console.log("true111");
    } else {
      console.log("false111");
    }
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

nav.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 25px 100px;
}

.homelink {
  font-size: 3.75rem;
  font-weight: bold;
  font-family: cursiveFont;
  padding: 20px;
  border: 0.05em solid;
  border-radius: 0.45em;
}

.homelink:hover {
  background-color: hsl(272, 71%, 81%);
  box-shadow: 0px 0px 0.5em 0.5px hsl(272, 100%, 81%);
  animation: text-flicker 3s linear infinite;
  color: black;
}

.link {
  font-size: 1.1rem;
  font-family: Calisto MT;
  font-weight: bold;
  border: 0.15em solid;
  border-radius: 0.45em;
  width: 100px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.link:hover {
  border-color: hsl(186, 100%, 78%);
  background-color: hsl(186 100% 78%);
  box-shadow: 0px 0px 0.75em 1px hsl(186 100% 78%);
  animation: text-flicker 3s linear infinite;
  color: black;
}

.icon {
  align-items: center;
  border: 0.2em solid;
  border-radius: 0.5em;
  padding: 11px;
  color: white;
}

.icon:hover {
  border-color: hsl(65, 100%, 89%);
  background-color: hsl(66, 83%, 93%);
  box-shadow: 0px 0px 0.5em 0px hsl(66, 83%, 93%);
  animation: text-flicker 3s linear infinite;
  color: black;
}


.login-button {
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-size: 1.1rem;
  font-family: Calisto MT;
  font-weight: bold;
  border: 0.15em solid;
  border-radius: 0.45em;
  width: 100px;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.login-button:hover {
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
