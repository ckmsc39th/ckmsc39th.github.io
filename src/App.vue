<template> 
  <div class="min-h-screen bg-gray-800 text-white">
    <div class="mx-auto">
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
</style>
