<script setup lang="ts">
defineProps({
  studentId: String,
  username: String,
});
</script>

<template>
  <p>
    Identified as student ID:
    <code class="text-accent">
      {{ studentId }}
    </code>
    , username:
    <code class="text-accent">
      {{ username }}
    </code>
  </p>
</template>
