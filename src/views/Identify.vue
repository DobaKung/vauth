<script setup lang="ts">
import PageTitle from "../components/PageTitle.vue";
import MicInput from "../components/MicInput.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="container max-w-lg mx-auto px-4 py-4">
    <PageTitle title="Identify" />
    <p class="mb-6">
      Use your microphone to record a sound. The system will try to identify
      whose voice it is.
    </p>
    <MicInput />
    <button
      class="mt-8 px-4 py-2 mx-auto font-semibold bg-primary hover:bg-accent text-white rounded-full shadow-sm"
    >
      Submit
    </button>
    <Footer />
  </div>
</template>
