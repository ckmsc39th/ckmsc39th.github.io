<template> 
  <div class="app">
    <div>
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
  min-width: fit-content;
  min-height: 100vh;
  background-color: rgb(31 41 55);
  color: white;
}
</style>
