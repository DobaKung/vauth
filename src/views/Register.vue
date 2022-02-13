<template>
  <div class="container max-w-lg mx-auto px-4 py-4">
    <PageTitle title="Register" />
    <form class="text-slate-900">
      <label for="field-1" class="block">Field 1</label>
      <input
        type="text"
        id="field-1"
        class="block border border-solid rounded w-full p-2 mb-4 hover:border-slate-400"
      />
      <label for="field-2" class="block">Field 2</label>
      <input
        type="text"
        id="field-2"
        class="block border border-solid rounded w-full p-2 mb-4 hover:border-slate-400"
      />
      <button
        class="mt-2 px-4 py-2 font-semibold bg-green-500 text-white rounded-full shadow-sm"
      >
        Submit
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PageTitle from "../components/PageTitle.vue";

export default defineComponent({
  name: "Register",
  components: {
    PageTitle,
  },
});
</script>
