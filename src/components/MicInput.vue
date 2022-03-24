<script setup lang="ts">
import { defineComponent } from "vue";
defineEmits(["recording-ready", "processing"]);
</script>

<template>
  <div class="bg-slate-200 py-10 text-center rounded">
    <p v-show="!isMediaReady">Initialising</p>
    <button
      :disabled="isRecording || isProcessing"
      v-show="isMediaReady"
      @click="setIsRecording"
      class="px-2 py-1 mx-1 bg-slate-500 hover:bg-accent disabled:bg-slate-300 text-white rounded-full"
    >
      Record
    </button>
    <button
      :disabled="!isRecording"
      v-show="isMediaReady"
      @click="processRecording"
      class="px-2 py-1 mx-1 bg-slate-500 hover:bg-accent disabled:bg-slate-300 text-white rounded-full"
    >
      Stop
    </button>
    <p class="text-error">{{ errMsg }}</p>
  </div>
</template>

<script lang="ts">
let mediaRecorder: MediaRecorder;
export default defineComponent({
  data() {
    return {
      isRecording: false,
      isProcessing: false,
      isMediaReady: false,
      errMsg: "",
    };
  },
  methods: {
    isMediaSupported() {
      return navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
    },
    initMedia() {
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          this.isMediaReady = true;
          mediaRecorder = new MediaRecorder(stream);
        })
        .catch((err) => {
          console.error("getUserMedia error: " + err);
          this.errMsg = "Cannot initialise media";
        });
    },
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
  mounted() {
    if (!this.isMediaSupported()) {
      this.errMsg = "Recording is unsupported on this browser";
      return;
    }
    this.initMedia();
  },
});
</script>
