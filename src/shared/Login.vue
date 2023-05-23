<template>
  <button class="login-button" @click="showLogin">Login</button>
  <div class="login-overlay" v-if="showingLogin">
    <div class="login-container">
      <h2>Login</h2>
      <form>
        <div
            v-if="wrongPasswd"
            class="text-red-500"
            style="text-align: left"
        >
          The email and password you entered did not match our records.
          Please double-check and try again.
        </div>

        <div class="form-group">
          <input
              v-model="username"
              type="text"
              placeholder="Username"
          />
        </div>

        <div class="form-group">
          <input
              v-model="password"
              type="password"
              placeholder="Password"
              @keyup.enter="login"
          />
        </div>

        <div class="rememberMe">
          <input type="checkbox" id="RememberMe" />
          <label for="RememberMe" class="text-xs text-blue-600">Remember me</label>
        </div>

        <button type="button" @click="login" :disabled="loggingIn">
          {{ loggingIn ? "Logging in..." : "Log in" }}
        </button>

      </form>

      <button class="close-button" @click="hideLogin">Cancel</button>

      <div >
        <a class="text-blue-500 text-sm" href="https://youtu.be/dQw4w9WgXcQ">
          Forgot password?
        </a>
        <span class="text-gray-600 text-sm"> <strong> · </strong> </span>
        <a class="text-blue-500 text-sm" href="https://youtu.be/D-UmfqFjpl0">
          Sign up for Luminescence
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, onMounted} from "vue";

const username = ref("");
const password = ref("");
const loggingIn = ref(false);
const showingLogin = ref(false);
const wrongPasswd = ref(false);


const usersData = [];
const loadJSON = async () => {
  const response = await fetch("src/assets/usersData.json");
  const data = await response.json();
  usersData.value = data;
};
loadJSON();

async function login() {
  loggingIn.value = true;
  let matchedUser = usersData.value.find(user => user.id === username.value && user.code === password.value);
  try {
    if (matchedUser) {
      console.log("login success");
      window.location.href = "/success";
      wrongPasswd.value = false;
    } else {
      console.log("login failed");
      wrongPasswd.value = true;
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

onMounted(() => {
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      hideLogin();
    }
  });
})
</script>

<style scoped>

.login-button {
  background-color: transparent;
  color: white;
  cursor: pointer;
  font-family: 'Recursive', sans-serif;
  font-weight: bold;
  border-radius: 0.45em;
  text-align: center;
  padding-top: 15px;
  padding-bottom: 15px;
}

.login-button:hover {
  border-color: hsl(104, 100%, 86%);
  border-radius: 0.45em;
  background-color: hsl(104, 100%, 86%);
  box-shadow: 0px 0px 0.75em 1px hsl(104, 100%, 86%);
  animation: text-flicker 6s linear infinite;
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
  animation: fade-in-animation ease-in 0.2s;
}

.login-container {
  background-color: #fff;
  width: 280px;
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
  margin-bottom: 5px;
  font-size: 14px;
  color: #555;
}

.login-container form input[type="text"] {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(0, 105, 217, 0.7);
  transition: background-color 0.5s ease-in-out;
}

.login-container form input[type="text"]:focus {
  outline: none;
  background-color: #0069d9;
}

.login-container form input[type="password"] {
  width: 100%;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: rgba(0, 105, 217, 0.7);
  transition: background-color 0.5s ease-in-out;
}

.login-container form input[type="password"]:focus {
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

.rememberMe {
  text-align: left;
}

.rememberMe input[type="checkbox"] {
  margin-right: 10px;
}

.close-button {
  background-color: transparent;
  border: none;
  color: #888;
  font-size: 16px;
  cursor: pointer;
  margin-top: 20px;
}

@media (max-width: 2000px) {
  .login-button {
    font-size: 1.1rem;
    width: 100px;
  }
}

@media (max-width: 1100px) {
  .login-button {
    font-size: 0.9rem;
    width: 70px;
  }
}

@media (max-width: 800px) {
  .login-button {
    margin-right: 10px;
  }
}

@media (max-width: 480px) {
  .login-button {
    margin-right: 20px;
    padding-left: 5px;
    padding-right: 5px;
  }
}

@media (max-width: 380px) {
  .login-button {
    margin-right: 30px;
    padding-left: 3px;
    padding-right: 3px;
    width: 100%;
  }
}
</style>
