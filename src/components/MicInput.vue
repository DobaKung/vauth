<script setup lang="ts">
defineEmits(["recording-ready", "processing"]);
</script>

<template>
  <div class="bg-slate-200 py-10 text-center">
    <p>voice area</p>
    <a
      @click="debugToggleProcessing"
      class="px-2 py-1 bg-slate-500 hover:bg-accent text-white rounded-full"
    >
      Process
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
    setProcessing() {
      this.$emit("processing");
    },
    async debugToggleProcessing() {
      this.setProcessing();
      const p = new Promise((resolve) => {
        setTimeout(() => resolve(true), 500);
      });
      await p;
      this.passRecording();
    },
  },
});
</script>
