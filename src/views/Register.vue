<script setup lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../components/PageTitle.vue";
import MicInput from "../components/MicInput.vue";
import Footer from "../components/Footer.vue";
import Spinner from "../components/Spinner.vue";
</script>

<template>
  <div class="container max-w-lg mx-auto px-4 py-4">
    <PageTitle title="Register" />
    <form class="text-slate-900" v-on:submit="submit">
      <label for="field-1" class="block">Username</label>
      <input
        type="text"
        id="field-1"
        required
        v-model="inputUsername"
        :disabled="isLoading"
        class="block border border-solid rounded w-full p-2 mb-4 hover:border-slate-400"
      />

      <MicInput @recording-ready="getRecording" />

      <!-- Face input -->

      <div class="mt-8 mb-[80px] flex items-center">
        <button
          class="mr-4 px-4 py-2 font-semibold bg-primary hover:bg-accent disabled:bg-slate-300 text-white rounded-full shadow-sm"
          :disabled="isLoading || !recording"
        >
          Submit
        </button>
        <Spinner v-show="isLoading" />
        {{ statusMsg }}
      </div>

      <h2 class="text-3xl font-bold mb-6">FAQ</h2>
      <h3 class="text-2xl font-bold mt-5">What do we do with your voice?</h3>
      <p class="content">
        We store it in the database for the purpose of identification
        demonstration in this project only. We are not interested in using your
        voice elsewhere and will not use it other than this demonstration
        purpose.
      </p>
      <h3 class="text-2xl font-bold mt-5">How does it work?</h3>
      <p class="content">
        When you register your voice, a machine learning model extracts unique
        features and computes your voice into a mathematical representation.
        When identifying a possible voice owner, the system searches and
        compares the similarities with all the stored voices to find the best
        owner match.
      </p>
      <h3 class="text-2xl font-bold mt-5">How accurate is it?</h3>
      <p class="content">
        Calculated with Equal Error Rate (EER) metric, the system has an EER
        score of 3 percent.
      </p>
      <p class="content">
        This method is still less accurate than other biometrics identification
        method like fingerprint scanning and face scanning.
      </p>
      <h3 class="text-2xl font-bold mt-5">
        How do I add another voice to the same username?
      </h3>
      <p class="content">
        If you really are interested in adding your voice, please contact me at
        59070113@it.kmitl.ac.th.
      </p>
    </form>
    <Footer />
  </div>
</template>

<script lang="ts">
import controller from "../controllers/main";

const c = controller.getRegistrationController();

export default defineComponent({
  data: () => ({
    // input
    // inputStudentID: "",
    inputUsername: "",
    recording: new Blob(),
    // response
    statusMsg: "",
    // state
    isLoading: false,
    isRecordingReady: false,
  }),
  methods: {
    async submit(e: Event) {
      e.preventDefault();
      this.statusMsg = "";
      this.isLoading = true;
      try {
        if (this.recording.size == 0) {
          throw new Error("No sound recorded");
        }

        await c.registerVoice({
          username: this.inputUsername,
          voice: this.recording,
        });

        this.clearInputs();
        this.statusMsg = "Done";
      } catch (e) {
        console.error(e);
        this.statusMsg = (e as Error)?.message;
      } finally {
        this.isLoading = false;
      }
    },
    getRecording(audio: Blob) {
      this.recording = audio;
      const blobURL = URL.createObjectURL(audio);
      console.debug(blobURL);
    },
    clearInputs() {
      // this.inputStudentID = "";
      this.inputUsername = "";
      this.recording = new Blob();
    },
  },
});
</script>

<style scoped>
p.content {
  margin-top: 1em;
}
</style>
