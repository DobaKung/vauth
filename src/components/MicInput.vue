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
      @click="setProcessing"
      class="px-2 py-1 mx-1 bg-slate-500 hover:bg-accent disabled:bg-slate-300 text-white rounded-full"
    >
      Stop
    </button>
    <p class="text-error">{{ errMsg }}</p>
  </div>
</template>

<script lang="ts">
let mediaRecorder: MediaRecorder;
const audioBitsPerSecond = 128_000;

export default defineComponent({
  data() {
    return {
      isRecording: false,
      isProcessing: false,
      isMediaReady: false,
      audioChunks: new Array(),
      errMsg: "",
    };
  },
  methods: {
    isMediaSupported() {
      return navigator.mediaDevices && navigator.mediaDevices.getUserMedia;
    },
    initMedia() {
      const mimeType = this.getSupportedMimeType();
      navigator.mediaDevices
        .getUserMedia({ audio: true })
        .then((stream) => {
          mediaRecorder = new MediaRecorder(stream, {
            mimeType,
            audioBitsPerSecond,
          });
          mediaRecorder.ondataavailable = (e) => {
            this.audioChunks.push(e.data);
          };
          mediaRecorder.onstop = () => {
            console.log("recording stopped");
            const audioBlob = new Blob(this.audioChunks, { type: mimeType });
            this.setRecordingReady(audioBlob);
          };

          this.isMediaReady = true;
        })
        .catch((err) => {
          console.error("getUserMedia error: " + err);
          this.errMsg = `Cannot initialise media ${
            mimeType ? "with " + mimeType : ""
          }`;
        });
    },
    setProcessing() {
      mediaRecorder.stop();
      this.isProcessing = true;
      this.isRecording = false;
      this.$emit("processing");
    },
    setIsRecording(e: Event) {
      e.preventDefault();
      this.audioChunks = new Array();
      mediaRecorder.start();
      this.isRecording = true;
    },
    setRecordingReady(audioBlob: Blob) {
      this.isProcessing = false;
      this.$emit("recording-ready", audioBlob);
    },
    getSupportedMimeType(): string {
      const mimeTypes = ["audio/mp4", "audio/webm"];
      for (let i = 0; i < mimeTypes.length; i++) {
        if (MediaRecorder.isTypeSupported(mimeTypes[i])) {
          return mimeTypes[i];
        }
      }
      return "";
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
