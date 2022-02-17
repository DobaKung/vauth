<script setup lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../components/PageTitle.vue";
import MicInput from "../components/MicInput.vue";
import Footer from "../components/Footer.vue";
import Spinner from "../components/Spinner.vue";
import IdentificationResult from "../components/IdentificationResult.vue";
</script>

<template>
  <div class="container max-w-lg mx-auto px-4 py-4">
    <PageTitle title="Identify" />
    <p>
      Use your microphone to record a sound. The system will try to identify
      whose voice it is.
    </p>

    <MicInput
      class="my-6"
      @processing="setStatusProcessing"
      @recording-ready="getRecording"
    />

    <div v-show="isProcessing || isSubmitting" class="flex items-center">
      <p class="mr-3">Processing...</p>
      <Spinner />
    </div>

    <IdentificationResult
      :student-id="studentId"
      :username="username"
      v-show="!isProcessing && !isSubmitting && studentId"
    />

    <Footer />
  </div>
</template>

<script lang="ts">
import Controller from "../controllers/main";

const controller = Controller.getIdentificationController();

export default defineComponent({
  data: () => ({
    // input
    recording: "",
    // response
    studentId: "",
    username: "",
    // state
    isSubmitting: false,
    isProcessing: false,
  }),
  methods: {
    setStatusProcessing() {
      this.isProcessing = true;
    },
    setStatusReady() {
      this.isProcessing = false;
    },
    getRecording(r: string) {
      this.recording = r;
      this.setStatusReady();
      this.submitRecording(this.recording);
    },
    async submitRecording(recording: string) {
      this.isSubmitting = true;
      try {
        const res = await controller.getVoiceOwner({ voice: recording });
        this.studentId = res.studentId;
        this.username = res.username;
      } catch (e) {
        // TODO: Implement submitRecording.catch
      } finally {
        this.isSubmitting = false;
      }
    },
  },
});
</script>
