<script lang="ts">
  import Score from "../components/score.svelte";
  import Cards from "../components/cards.svelte";
</script>
<template>
  <div class="flex justify-center w-screen h-screen dark:bg-black">
    <div class="flex">
      <Score />
    </div>
    <div class="flex flex-col items-center h-screen w-3/4 justify-center">
      <Cards />
    </div>
  </div>
</template>