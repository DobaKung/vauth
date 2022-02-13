<template>
  <div class="mt-16 mb-10">
    <h1 class="text-5xl font-bold text-slate-900">{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { title: String },
});
</script>
