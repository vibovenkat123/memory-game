<script lang="ts" setup>
import CardItems from './components/card-items.vue';
import ScoreItem from './components/score-item.vue';
</script>
<template>
  <div class="flex justify-center w-screen h-screen dark:bg-black">
    <div class="flex">
      <ScoreItem />
    </div>
    <div class="flex flex-col items-center h-screen w-3/4 justify-center">
      <CardItems />
    </div>
  </div>
</template>
