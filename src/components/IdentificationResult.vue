<script setup lang="ts">
import {APIIdentificationResponse} from "../controllers/identification"
defineProps({
  items: Array
  });
</script>

<template>
  <p>
  <center> Identified as Username <br/>
    <code class="text-accent" v-for="item in (items as APIIdentificationResponse)" >
      {{ item.user.userName }} <p style="color:#000000; display:inline" >with score</p> {{ item.similarity }} <br/>
    </code>
  </center>
  </p>
</template>
