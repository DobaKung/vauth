<script setup lang="ts">
defineEmits(["recording-ready"]);
</script>

<template>
  <div class="bg-slate-200 py-10 text-center">
    <p>voice area</p>
    <a
      @click="passRecording"
      class="px-2 py-1 bg-slate-500 hover:bg-accent text-white rounded-full"
    >
      Emit
    </a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  methods: {
    passRecording() {
      this.$emit("recording-ready", "replace with recording data");
    },
  },
});
</script>
