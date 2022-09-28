<script lang="ts" setup>
import { useCardStore } from '@/stores/card-store';
let store = useCardStore();
</script>
<template>
  <div class="flex flex-col justify-center">
    <div class="bg-gray-200  dark:bg-gray-500 p-5 rounded-md">
      <div class="bg-gray-400 text-white p-3 text-xl rounded-md mb-3">
        Score: {{store.scores.score}}
      </div>
      <div class="bg-gray-400 text-white p-3 text-xl rounded-md">
        High: {{store.scores.highScore}}
      </div>
    </div>
  </div>
</template>