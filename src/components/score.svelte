<script lang="ts" setup>
  import { scores } from "../stores/card";
</script>

<template>
  <div class="flex flex-col justify-center">
    <div class="bg-gray-200  dark:bg-gray-500 p-5 rounded-md">
      <div class="bg-gray-400 text-white p-3 text-xl rounded-md mb-3">
        Score: {$scores.score}
      </div>
      <div class="bg-gray-400 text-white p-3 text-xl rounded-md">
        High: {$scores.highScore}
      </div>
    </div>
  </div>
</template>
