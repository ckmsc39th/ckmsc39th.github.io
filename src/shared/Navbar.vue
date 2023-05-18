<template>
  <nav class="navbar">
    <div class="column-1">
      <router-link :to="{ name: 'Home' }" class="homelink"
        >Luminescence</router-link
      >
    </div>

    <div class="column-2">
      <router-link :to="{ name: 'About' }" class="link">About</router-link>
      <router-link :to="{ name: 'Categories' }" class="link">Categories</router-link>
      <router-link :to="{ name: 'Schedule' }" class="link">Schedule</router-link>
      <router-link :to="{ name: 'Contact' }" class="link">Contact</router-link>
    </div>


    <div class="column-3">

      <Login/>

      <div class="outer-links">
          <a
          href="https://www.youtube.com/@ckmsc39th_luminescence"
          target="_blank"
          rel="noopener noreferrer"
          class="icon"
        >
          <vue-feather type="youtube" size="20"></vue-feather>
        </a>
        <a
          href="https://instagram.com/luminescence_ckmsc39th_"
          target="_blank"
          rel="noopener noreferrer"
          class="icon"
        >
          <vue-feather type="instagram" size="20"></vue-feather>
        </a>
      </div>

      <Sidebar/>

    </div>

  </nav>
</template>

<script setup>
import Login from "./Login.vue";
import Sidebar from "./Sidebar.vue";
import feather from "feather-icons";
feather.replace();
</script>

<style>
:root{
  --bar-width: 30px;
  --bar-height: 4px;
  --gap: 6px;
  --hamburger-height: calc(var(--bar-height)*3 + var(--gap)*2);
  --x-width: calc(var(--hamburger-height) * 1.414213562)
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


nav.navbar {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5% 5%;
  background-color: rgba(55, 55, 55, 0.7);
}

.column-1{
  display: flex;
  align-items: center;
  gap: 1px
}

.column-2{
  display: flex;
  align-items: center;
  gap: 3px;

}

.column-3{
  display: flex;
  align-items: center;
}



.homelink {
  text-align: center;
  font-weight: bold;
  font-family: cursiveFont;
  padding: 5%;
  border-radius: 0.45em;
}

.homelink:hover {
  border-color: hsl(272, 71%, 81%);
  background-color: hsl(272, 71%, 81%);
  box-shadow: 0px 0px 0.5em 0.5px hsl(272, 100%, 81%);
  animation: text-flicker 3s linear infinite;
  color: rgb(55, 55, 55);
}

.link {
  min-width: fit-content;
  font-family: 'Recursive', sans-serif;
  font-weight: bold;
  border-radius: 0.45em;
  text-align: center;
  padding: 15px 2%;
}

.link:hover {
  border-color: hsl(186, 100%, 78%);
  background-color: hsl(186 100% 78%);
  box-shadow: 0px 0px 0.75em 1px hsl(186 100% 78%);
  animation: text-flicker 6s linear infinite;
  color: rgb(55, 55, 55);
}

.icon {
  align-items: center;
  border-radius: 0.5em;
  color: white;
}

.icon:hover {
  border-color: hsl(65, 100%, 89%);
  background-color: hsl(66, 83%, 93%);
  box-shadow: 0px 0px 0.5em 0px hsl(66, 83%, 93%);
  animation: text-flicker 6s linear infinite;
  color: black;
}


@media (max-width: 2000px) {
  .homelink{
    font-size: 3.75rem;
  }

  .link{
    font-size: 1.1rem;
    width: 100px;
  }

  .login-button{
    font-size: 1.1rem;
    width: 100px;
  }

  .icon{
    padding-top: 18px;
    padding-bottom: 18px;
    padding-left: 10px;
    padding-right: 10px;
  }
}

@media (max-width: 1100px) {
  .homelink{
    font-size: 3rem;
  }

  .link{
    font-size: 0.9rem;
    width: 70px;
  }

  .login-button{
    font-size: 0.9rem;
    width: 70px;
  }

  .icon{
    padding-left: 5px;
    padding-right: 5px;
    padding-top: 15px;
    padding-bottom: 15px;
  }
}

@media (max-width: 800px) {
  .column-2{
    display: none;
  }

  .outer-links{
    display: none;
  }
}

@media (max-width: 480px){
  .homelink{
    font-size: 2rem;
  }
}

@media (max-width: 380px){
  .homelink{
    font-size: 1.6rem;
  }
}

</style>
