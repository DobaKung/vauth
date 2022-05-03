<script setup lang="ts">
defineProps({
  studentId: String,
});
</script>

<template>
  <p>
    Identified as student ID:
    <code class="text-accent">
      {{ studentId }}
    </code>
  </p>
</template>
