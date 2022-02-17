<template>
  <nav id="nav" class="text-right font-bold py-6 px-3 border-t-8 border-accent">
    <router-link
      v-for="link in links"
      :to="link.to"
      class="mx-3 text-slate-400 hover:text-accent"
      >{{ link.text }}</router-link
    >
  </nav>
</template>

<style scoped>
nav a.router-link-active {
  /*  slate-900 */
  color: #0f172a;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: { title: String },
  data: () => ({
    links: [
      { to: "/", text: "Home" },
      { to: "/register", text: "Register" },
      { to: "/identify", text: "Identify" },
      // { to: "/log-in", text: "Admin" },
    ],
  }),
});
</script>
