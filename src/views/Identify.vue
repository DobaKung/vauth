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

      <!-- :similarity="similarity" -->
      <!-- :username="username" -->
    <IdentificationResult
      :items="resBody"
      v-show="!isProcessing && !isSubmitting && resBody"
    />

    <p>{{ errMsg }}</p>

    <Footer />
  </div>
</template>

<script lang="ts">
import Controller from "../controllers/main";

const controller = Controller.getIdentificationController();

export default defineComponent({
  data: () => ({
    // input
    recording: new Blob(),
    // response
    errMsg: "",
    resBody: new Array(),
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
    getRecording(r: Blob) {
      this.recording = r;
      const blobURL = URL.createObjectURL(r);
      console.debug(blobURL);
      this.setStatusReady();
      this.submitRecording(this.recording);
    },
    async submitRecording(recording: Blob) {
      this.errMsg = "";
      this.isSubmitting = true;
      this.resBody = [];
      try {
        const res = await controller.getVoiceOwner({ voice: recording });
        // this.username = res.user.username;
        // this.similarity = res;
        this.resBody = res
        console.log(this.resBody)
      } catch (e) {
        this.errMsg = (e as Error).message;
      } finally {
        this.isSubmitting = false;
      }
    },
  },
});
</script>
