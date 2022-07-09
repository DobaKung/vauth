<script setup lang="ts">
defineProps({
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
</template>
