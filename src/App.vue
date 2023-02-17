<template>
  <div class="min-h-screen w-full bg-gray-800 text-white">
    <div class="mx-auto max-w-7xl px-4 pt-8">
      <nav class="flex items-center justify-between">
        <div class="flex items-center gap-32">
          <a href="#" class="text-2xl font-bold">Luminescence</a>
          <ul class="flex items-center gap-12 font-medium text-gray-500">
            <li><router-link to="/home" class="hover:text-white">Home</router-link></li>
            <li><router-link to="/about" class="hover:text-white">About</router-link></li>
            <li><router-link to="/categories" class="hover:text-white">Categories</router-link></li>
            <li><router-link to="/works" class="hover:text-white">Works</router-link></li>
            <li><router-link to="/schedule" class="hover:text-white">Schedule</router-link></li>
            <li><router-link to="/contast" class="hover:text-white">Contast</router-link></li>
          </ul>
        </div>
        <div class="items-centers flex gap-4">
          <a href="https://www.youtube.com/@ckmsc39th_luminescence" target="_blank" rel="noopener noreferrer" class="hover:text-white">Youtube</a>
          <a href="#" target="_blank" rel="noopener noreferrer" class="hover:text-white">Instagram</a>
          <a href="#" class="hover:text-white">Login</a>
        </div>
      </nav>
      <div class="grid grid-cols-2">
        <div></div>
      </div>
    </div>
  </div>
</template>
