<script setup lang="ts">
import { defineComponent } from "vue";
defineEmits(["recording-ready", "processing"]);
</script>

<template>
  <div class="bg-slate-200 py-10 text-center">
    <p>voice area</p>
    <button
      :disabled="isRecording || isProcessing"
      @click="setIsRecording"
      class="px-2 py-1 mx-1 bg-slate-500 hover:bg-accent disabled:bg-slate-300 text-white rounded-full"
    >
      Record
    </button>
    <button
      :disabled="!isRecording"
      @click="processRecording"
      class="px-2 py-1 mx-1 bg-slate-500 hover:bg-accent disabled:bg-slate-300 text-white rounded-full"
    >
      Stop
    </button>
  </div>
</template>

<script lang="ts">
export default defineComponent({
  data: () => ({
    isRecording: false,
    isProcessing: false,
  }),
  methods: {
    setProcessing() {
      this.isProcessing = true;
      this.isRecording = false;
      this.$emit("processing");
    },
    setIsRecording(e: Event) {
      e.preventDefault();
      this.isRecording = true;
    },
    setRecordingReady() {
      this.isProcessing = false;
      this.$emit("recording-ready", "replace with recording data");
    },
    async processRecording(e: Event) {
      e.preventDefault();
      this.setProcessing();
      const p = new Promise((resolve) => {
        setTimeout(() => resolve(true), 500);
      });
      await p;
      this.setRecordingReady();
    },
  },
});
</script>
