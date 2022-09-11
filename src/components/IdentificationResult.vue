<script setup lang="ts">
import {APIIdentificationResponse} from "../controllers/identification"
defineProps({
  items: Array
  });
</script>

<template>
  <p>
    Identified as Username:
    <code class="text-accent" v-for="item in items">
      {{ item.user.userName }} with score {{ item.similarity }}. <br/>
    </code> 
  </p>
</template>
