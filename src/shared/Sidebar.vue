<template>

  <div class="mobile">
    <label class="hamburger-menu">
      <input id="checkID" type="checkbox" @click="toggleNavbar"/>
    </label>

    <aside class="sidebar-overlay">
      <div class="sidebar">
        <div class="mobile-link">
          <router-link :to="{ name: 'About' }" class="hover-mobile-link" @click="uncheck">
            About
          </router-link>
        </div>

        <div class="seperated_line"></div>

        <div class="mobile-link">
          <router-link :to="{ name: 'Categories' }" class="hover-mobile-link" @click="uncheck">
            Categories
          </router-link>
        </div>

        <div class="seperated_line"></div>

        <div class="mobile-link">
          <router-link :to="{ name: 'Schedule' }" class="hover-mobile-link" @click="uncheck">
            Schedule
          </router-link>
        </div>

        <div class="seperated_line"></div>

        <div class="mobile-link">
          <router-link :to="{ name: 'Contact' }" class="hover-mobile-link" @click="uncheck">
            Contact
          </router-link>
        </div>

        <div class="seperated_line"></div>
        <br>
        <div class="flex justify-evenly">
          <a
              class="mobile-icon"
              href="https://www.youtube.com/@ckmsc39th_luminescence"
              rel="noopener noreferrer"
              target="_blank"
          >
            <vue-feather size="20" type="youtube"></vue-feather>
          </a>
          <a
              class="mobile-icon"
              href="https://instagram.com/luminescence_ckmsc39th_"
              rel="noopener noreferrer"
              target="_blank"
          >
            <vue-feather size="20" type="instagram"></vue-feather>
          </a>
        </div>

      </div>
    </aside>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showingNavbar = ref(false);

function uncheck() {
  let input = document.getElementById('checkID')
  input.checked = false;
  toggleNavbar()
}

function toggleNavbar() {
  const body = document.body;
  showingNavbar.value = !showingNavbar.value

  if (showingNavbar.value) {
    body.style.overflowY = 'hidden';
  } else {
    body.style.overflowY = '';
  }
}
</script>

<style>
.mobile {
  margin-right: 30px;
  display: flex;
  align-items: center;
}

.hamburger-menu {
  display: flex;
  flex-direction: column;
  gap: var(--gap);
  width: max-content;
  position: absolute;
  right: 20px;
  z-index: 10;
  cursor: pointer;
}

.hamburger-menu::before,
.hamburger-menu::after,
.hamburger-menu input {
  content: "";
  width: var(--bar-width);
  height: var(--bar-height);
  background-color: white;
  border-radius: 4px;
  transform-origin: left center;
  transition: opacity 200ms ease-in-out,
  width 200ms ease-in-out,
  rotate 200ms ease-in-out,
  translation 200ms ease-in-out,
  background-color 200ms ease-in-out;
  z-index: 9999;
}

.hamburger-menu:has(input:checked)::before {
  rotate: 45deg;
  width: var(--x-width);
  translate: 0 calc(var(--bar-height) / -2);
}

.hamburger-menu:has(input:checked)::after {
  rotate: -45deg;
  width: var(--x-width);
  translate: 0 calc(var(--bar-height) / 2);
}

.hamburger-menu input {
  appearance: none;
  padding: 0;
  margin: 0;
  outline: none;
  pointer-events: none;
}

.hamburger-menu input:checked {
  opacity: 0;
  width: 0;
}

.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: translate 200ms ease-in-out;
  translate: 300%;
  background-color: rgba(33, 29, 41, 0.9);
  color: white;
  max-width: 100vw;
  min-height: 100vh;
}

.sidebar {
  font-weight: bold;
  width: 25%;
  height: 100vh;
  position: absolute;
  right: 40px;
  top: 100px;
}

.seperated_line {
  border: solid 1px rgba(241, 241, 241, 0.8);
}

.hamburger-menu:has(input:checked) + .sidebar-overlay {
  translate: 0;
}

.mobile-link {
  font-family: 'Recursive';
  margin-top: 5px;
  margin-bottom: 5px;
  padding: 10%;
}

.mobile-link:has(.hover-mobile-link:hover) {
  border-radius: 0.25em;
  border-color: hsl(186, 100%, 78%);
  background-color: hsl(186 100% 78%);
  box-shadow: 0px 0px 0.75em 1px hsl(186 100% 78%);
  animation: text-flicker 6s linear infinite;
  color: black;
}

.mobile-icon {
  margin: 2%;
  padding: 10%;
}

.mobile-icon:hover {
  border-radius: 0.5em;
  border-color: hsl(65, 100%, 89%);
  background-color: hsl(66, 83%, 93%);
  box-shadow: 0px 0px 0.5em 0px hsl(66, 83%, 93%);
  animation: text-flicker 6s linear infinite;
  color: black;
}

@media (max-width: 800px) {
  .hover-mobile-link {
    font-size: 0.9rem;
  }
  @supports not (selector(:has(+ *))) {
    .mobile {
      display: none;
    }
  }
}

@media (max-width: 380px) {
  .hover-mobile-link {
    font-size: 0.8rem;
  }
}

@media (min-width: 801px) {
  .mobile {
    display: none;
  }
}
</style>
