<template>
  <button class="login-button" @click="showLogin">Login</button>
  <div class="login-overlay" v-if="showingLogin">
    <div class="login-container">
      <h2>Login</h2>
      <form>
        <div v-if="wrongPassword" class="text-red-500" style="text-align: left">
          The ID and password you entered did not match our records. Please double-check and try again.
        </div>

        <div class="form-group">
          <input v-model="username" type="text" placeholder="Username"/>
        </div>

        <div class="form-group">
          <input v-model="password" type="password" placeholder="Password" @keyup.enter="login"/>
        </div>

        <div class="rememberMe">
          <input id="RememberMe" type="checkbox" v-model="rememberMe"/>
          <label for="RememberMe" class="text-xs text-blue-600">Remember me</label>
        </div>

        <button type="button" @click="login" :disabled="loggingIn">
          {{ loggingIn ? "Logging in..." : "Log in" }}
        </button>
      </form>

      <button class="close-button" @click="hideLogin">Cancel</button>

      <div>
        <a class="text-blue-500 text-sm" href="https://youtu.be/dQw4w9WgXcQ" target="_blank" rel="noopener noreferrer">
          Forgot password?
        </a>
        <span class="text-gray-600 text-sm"> <strong> · </strong> </span>
        <a class="text-blue-500 text-sm" href="https://youtu.be/D-UmfqFjpl0" target="_blank" rel="noopener noreferrer">
          Sign up for Luminescence
        </a>
      </div>
    </div>


  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";

const username = ref("");
const password = ref("");
const rememberMe = ref(false);
const loggingIn = ref(false);
const showingLogin = ref(false);
const wrongPassword = ref(false);

const usersData = ref<any[]>([]);
const loadJSON = async () => {
  try {
    const response = await fetch("/usersData.json");
    usersData.value = await response.json();
  } catch (error) {
    console.error(error);
  }
};
loadJSON();

const login = async () => {
  loggingIn.value = true;
  const matchedUser = usersData.value.find(
      (user: { id: string; code: string }) =>
          user.id === username.value && user.code === password.value
  );
  if (matchedUser) {
    console.log("login success");
    // window.location.href = "/success";
    wrongPassword.value = false;
    alert(
        `Congratulations! You have successfully logged in! Please show this screen to the service desk to receive a special gift!\n\nID: ${username.value}`
    );
  } else {
    // console.log("login failed");
    wrongPassword.value = true;
  }
  loggingIn.value = false;
};

const showLogin = () => {
  showingLogin.value = true;
};

const hideLogin = () => {
  showingLogin.value = false;
  wrongPassword.value = false;
};

onMounted(() => {
  window.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      hideLogin();
    }
  });
});
</script>

<style scoped lang="scss">
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

  &:hover {
    border-color: hsl(104, 100%, 86%);
    border-radius: 0.45em;
    background-color: hsl(104, 100%, 86%);
    box-shadow: 0px 0px 0.75em 1px hsl(104, 100%, 86%);
    animation: text-flicker 6s linear infinite;
    color: black;
  }
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

  &.show {
    transform: translateY(0);
  }

  h2 {
    margin-bottom: 30px;
    font-size: 24px;
    font-weight: bold;
    color: #333;
    text-transform: uppercase;
    letter-spacing: 2px;
  }

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .form-group {
    margin-bottom: 20px;
    width: 100%;
  }

  label {
    margin-bottom: 5px;
    font-size: 14px;
    color: #555;
  }

  input[type="text"],
  input[type="password"] {
    width: 100%;
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 5px;
    border: none;
    background-color: rgba(0, 105, 217, 0.7);
    transition: background-color 0.5s ease-in-out;

    &:focus {
      outline: none;
      background-color: #0069d9;
    }
  }

  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.5s ease-in-out;

    &:hover {
      background-color: #0069d9;
    }

    &:active {
      transform: scale(0.95);
    }
  }

  .rememberMe {
    text-align: left;
  }

  .close-button {
    background-color: transparent;
    border: none;
    color: #888;
    font-size: 16px;
    cursor: pointer;
    margin-top: 20px;
  }
}
</style>
