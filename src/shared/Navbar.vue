<template>
  <nav class="navbar">
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'Home'}" class="homelink">Luminescence</router-link>
      </div>

      <div class="flex items-center gap-1">
        <router-link :to="{name: 'About'}" class="link">About</router-link>
        <router-link :to="{name: 'Categories'}" class="link">Categories</router-link>
        <router-link :to="{name: 'Works'}" class="link">Works</router-link>
        <router-link :to="{name: 'Schedule'}" class="link">Schedule</router-link>
        <router-link :to="{name: 'Contact'}" class="link">Contact</router-link>
      </div>
      
      <div class="flex items-center gap-1">
        <a href="#" class="spclink">Login</a>
        <a href="https://www.youtube.com/@ckmsc39th_luminescence" target="_blank" rel="noopener noreferrer" class="icon">
          <vue-feather type="youtube" size="30"></vue-feather>
        </a>
        <a href="https://instagram.com/luminescence_ckmsc39th_" target="_blank" rel="noopener noreferrer" class="icon">
          <vue-feather type="instagram" size="30"></vue-feather>
        </a>
      </div>
  </nav>
</template>

<script>
import feather from "feather-icons";
feather.replace();

export default {
  name: 'navbar',
  methods: {
    handleNavClick(event) {
      // Handle navbar click events here
    }
  }
}
</script>

<style>
  nav{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 25px 100px;
  }

  .homelink{
    font-size: 4rem;
    font-weight: bold;
    font-family: Brush Script MT, Brush Script Std, cursive;
    padding: 20px;
  }

  .homelink:hover{
    border-color: hsl(272, 100%, 87%);
    border-radius: 0.45em;
    background-color: hsl(272, 71%, 81%);
    box-shadow: 0px 0px 0.5em 0.5px hsl(272, 71%, 81%);
    animation: text-flicker 3s linear infinite;
    color: black;
  }

  .link{
    font-size: 1.5rem;
    font-family: Calisto MT;
    border: 0.15em solid;
    border-radius: 0.45em; 
    padding: 15px 40px;
  }

  .link:hover {
    border-color: hsl(186, 100%, 78%);
    background-color: hsl(186 100% 78%);
    box-shadow: 0px 0px 0.5em 0.1px hsl(186 100% 78%);
    animation: text-flicker 3s linear infinite;
    color: black;
  }

  .spclink {
    font-size: 1.5rem;
    font-family: Calisto MT;
    border: 0.15em solid;
    border-radius: 0.45em; 
    padding: 15px 40px;
  }

  .spclink:hover{
    border-color: hsl(104, 100%, 86%);
    border-radius: 0.45em;
    background-color: hsl(104, 100%, 86%);
    box-shadow: 0px 0px 0.5em 0.5px hsl(104, 100%, 86%);
    animation: text-flicker 1.5s linear infinite;
    color: black;
  }

  .icon {
    border: 0.2em solid;
    border-radius: 0.75em; 
    padding: 15px 20px;
    color: white;
  }

  .icon:hover {
    border-color: hsl(65, 100%, 89%);
    background-color: hsl(66, 83%, 93%);
    box-shadow: 0px 0px 0.5em 0px hsl(66, 83%, 93%);
    animation: text-flicker 3s linear infinite;
    color: black;
  }

  @keyframes text-flicker {
    0% {
      opacity: 0.7;
    }
  
    2% {
      opacity: 0.5;
    }
  
    8% {
      opacity: 0.1;
    }
  
    9% {
      opacity: 0.3;
    }
  
    12% {
      opacity: 0.1;
    }
    25% {
      opacity: 0.3;
    }
    30% {
      opacity: 1;
    }
    55% {
      opacity: 0.7;
    }
    60% {
      opacity: 0.5;
    }
    75% {
      opacity: 0.6;
    }
    90% {
      opacity: 0.2;
    }
  }
</style>
