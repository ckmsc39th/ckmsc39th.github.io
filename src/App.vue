<template> 
  <div class="app">
    <div class="navbar">
      <navbar></navbar>
      <router-view />
    </div>
  </div>
</template>

<script>
import feather from "feather-icons";
feather.replace();

function isMobile(){
    return !!window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
}

console.log(isMobile())

</script>

<style>
.app{
  position: relative;
  z-index: 0;
  min-width: fit-content;
  min-height: 100vh;
  background-color: rgb(31 41 55);
  background-image: url("./keyVisualImg.JPG");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  color: white;
}

.app::after{
  content: '';
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.55;
  background-image: url("./dots.PNG");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-blend-mode: overlay;
  animation: background-flicker 7s linear infinite;
}

@keyframes background-flicker {
  0% {
    opacity: 0.55;
  }
  50% {
    opacity: 0.05;
  }
}

.navbar{
  position: relative;
  z-index: 2;
}
</style>
