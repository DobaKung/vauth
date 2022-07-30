<script setup lang="ts">
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="container max-w-screen-xl mx-auto px-4 py-4 text-center">
    <!-- <img alt="Vue logo" src="../assets/logo.png" /> -->
    <h1 class="text-6xl font-bold mt-[60px] mb-3">Speaker Identification</h1>
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
    <p class="text-slate-500 mx-auto max-w-lg mb-5">
      This Speaker Identification project uses a machine learning model to
      identify a possible owner of a given voice from a pool of registered
      voices. Models are trained through TensorFlow framework.
    </p>
    <p class="text-slate-500">A project by Pornprom Kiawjak</p>
    <Footer />
  </div>
</template>
