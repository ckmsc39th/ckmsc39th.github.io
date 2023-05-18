<template>
  <div class="login-success-page">
    <h1>Congratulations!</h1>
    <p>You have successfully logged in!</p>
    <div class="gift-container">
      <div class="gift-info">
        <img src="/keyVisualImg.jpg" alt="Gift image" />
        <p>
          Thank you for participating in our event! As a token of appreciation,
          you are eligible for a small prize.
        </p>
        <p>
          Please take a screenshot of this page and show it to our event staff
          to redeem your prize.
        </p>
      </div>
      <div class="gift-code">
        <p>Your unique gift code:</p>
        <h2>{{ giftCode }}</h2>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";

const giftCode = ref("");

onMounted(() => {
  // Generate unique gift code
  giftCode.value = Math.random().toString(36).substring(2, 8).toUpperCase();
});
</script>

<style scoped>
.login-success-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.gift-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.gift-info {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-right: 50px;
}

.gift-info img {
  width: 100px;
  height: 100px;
}

.gift-code {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
  border-radius: 10px;
  padding: 20px;
}

.gift-code h2 {
  font-size: 3rem;
  font-weight: bold;
  margin-top: 10px;
  margin-bottom: 0;
}

@media (max-width: 768px) {
  .gift-container {
    flex-direction: column;
  }

  .gift-info {
    margin-bottom: 50px;
    margin-right: 0;
  }
}
</style>
