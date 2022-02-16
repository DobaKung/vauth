<script setup lang="ts">
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="container max-w-screen-xl mx-auto px-4 py-4 text-center">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1 class="text-6xl font-bold mt-[60px] mb-3">Voice Matching System</h1>
    <h2 class="text-3xl font-bold">Demonstration</h2>
    <router-link
      to="/register"
      class="inline-block mt-8 px-6 py-3 bg-primary hover:bg-accent text-xl text-white rounded-full shadow-2xl"
    >
      Register voice
    </router-link>
    <img
      src="../assets/211771_mic_icon.svg"
      alt="microphone icon"
      width="180"
      class="mx-auto mt-12 mb-12"
    />
    <p class="text-slate-500 mx-auto max-w-lg">
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tenetur cum ut
      delectus voluptates! Asperiores, nobis. Ipsa dolorum omnis velit eveniet
      iure maiores, minima nihil! Eos enim perspiciatis commodi illo possimus!
    </p>
    <Footer />
  </div>
</template>
