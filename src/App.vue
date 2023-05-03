<template>
  <div class="app">
    <div class="navbar">
      <navbar></navbar>
        <router-view v-slot="{ Component }">
          <transition name="page-opacity" mode="out-in">
            <component :is="Component"></component>
          </transition>
        </router-view>
    </div>
  </div>
</template>

<script setup>
import feather from "feather-icons";
feather.replace();

const isMobile = () => {
  return !!window.navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
  );
};
</script>

<style>
.app {
  position: relative;
  z-index: 0;
  min-width: fit-content;
  min-height: 100vh;
  background-color: rgb(31 41 55);
  background-image: url("/keyVisualImg.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  color: white;
}

.app::after {
  content: "";
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.9;
  background-image: url("/dots.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  animation: background-flicker 7s linear infinite;
}


.page-opacity-enter-from{
  opacity: 0;
  transform: translateY(-100px);
}

.page-opacity-enter-active{
  transition: all 0.3s ease-out;
}

.page-opacity-leave-to{
  opacity: 0;
  transform: translateY(100px);
}

.page-opacity-leave-active{
  transition: all 0.3s ease-in;
}

@keyframes background-flicker {
  0% {
    opacity: 0.9;
  }
  2% {
    opacity: 0.05;
  }
  3% {
    opacity: 0.05;
  }
  4% {
    opacity: 0.9;
  }
  41% {
    opacity: 0.7;
  }
  42% {
    opacity: 0.05;
  }
  44% {
    opacity: 0.05;
  }
  45% {
    opacity: 0.7;
  }
  65% {
    opacity: 0.5;
  }
  70% {
    opacity: 0.4;
  }
  72% {
    opacity: 0.1;
  }
  73% {
    opacity: 0.1;
  }
  74% {
    opacity: 0.3;
  }
  100% {
    opacity: 0.9;
  }
}

.navbar {
  position: relative;
  z-index: 2;
}
</style>
