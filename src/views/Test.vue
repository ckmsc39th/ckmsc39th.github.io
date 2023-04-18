// const userCredential = await
firebase.auth().signInWithEmailAndPassword(email.value, password.value);

<!-- <template>
  <div>
    <button @click="openModal">Send Email</button>
    <div v-if="modalOpen">
      <h2>Enter your email address</h2>
      <input v-model="email" type="email" />
      <button @click="sendEmail">Send Email</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const modalOpen = ref(false);
const email = ref("");

const openModal = () => {
  modalOpen.value = true;
};

const sendEmail = () => {
  // TODO: Implement email sending logic
  console.log(`Sending email to ${email.value}`);
  modalOpen.value = false;
};
</script> -->

<template>
  <form>
    <label>Name:</label>
    <input type="text" v-model="name" />

    <label>Email:</label>
    <input type="email" v-model="email" />

    <label>Subject:</label>
    <input type="text" v-model="subject" />

    <label>Message:</label>
    <textarea v-model="message"></textarea>

    <button type="submit" v-on:click.prevent="sendEmail">Send</button>
  </form>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      name: "",
      email: "",
      subject: "",
      message: "",
    };
  },
  methods: {
    sendEmail() {
      axios
        .post("/api/send-email", {
          name: this.name,
          email: this.email,
          subject: this.subject,
          message: this.message,
        })
        .then((response) => {
          console.log(response.data);
          // Display success message to the user
        })
        .catch((error) => {
          console.log(error.response.data);
          // Display error message to the user
        });
    },
  },
};
</script>
