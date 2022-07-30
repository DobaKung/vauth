<script setup lang="ts">
defineProps({
  similarity: Number,
  username: String,
});
</script>

<template>
  <p>
    Identified as student ID:
    <code class="text-accent">
      {{ username }}
    </code>
  </p>
  <p>
    Similarity:
    <code class="text-accent">
      {{ similarity }}
    </code>
  </p>
</template>
