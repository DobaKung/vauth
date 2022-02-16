<script setup lang="ts">
import PageTitle from "../components/PageTitle.vue";
import MicInput from "../components/MicInput.vue";
import Footer from "../components/Footer.vue";
</script>

<template>
  <div class="container max-w-lg mx-auto px-4 py-4">
    <PageTitle title="Register" />
    <form class="text-slate-900" v-on:submit="submit">
      <label for="field-1" class="block">Student ID</label>
      <input
        type="text"
        id="field-1"
        v-model="inputStudentID"
        class="block border border-solid rounded w-full p-2 mb-4 hover:border-slate-400"
      />
      <label for="field-2" class="block">Username</label>
      <input
        type="text"
        id="field-2"
        v-model="inputUsername"
        class="block border border-solid rounded w-full p-2 mb-4 hover:border-slate-400"
      />
      <MicInput @recording-ready="getRecording" />
      <!-- Face input -->
      <button
        class="mt-8 px-4 py-2 font-semibold bg-primary hover:bg-accent text-white rounded-full shadow-sm"
      >
        Submit
      </button>
    </form>
    <Footer />
  </div>
</template>

<script lang="ts">
import controller from "../controllers/main";
import { defineComponent } from "vue";

const c = controller.getRegistrationController();

export default defineComponent({
  data: () => ({
    inputStudentID: "",
    inputUsername: "",
    recording: "",
  }),
  methods: {
    async submit(e: Event) {
      e.preventDefault();
      let req = {
        studentID: this.inputStudentID,
        username: this.inputUsername,
        voice: this.recording,
      };
      await c.registerVoice(req);
    },
    getRecording(r: string) {
      this.recording = r;
    },
  },
});
</script>
