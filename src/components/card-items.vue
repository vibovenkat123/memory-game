<script lang="ts" setup>
// import { useCardStore } from '@/stores/card-store';
import { useCardStore } from '../stores/card-store';
let store = useCardStore();
</script>
<template>
  <div class="grid-cols-4 grid gap-3">
    <div v-for="card in store.cardArray" :key="card.src">
      <button @click="store.click(card)"
        class="bg-gray-300 dark:bg-gray-600 p-5 rounded-md flex flex-col items-center h-56 justify-center mr-4 w-44 hover:bg-green-200 hover:dark:bg-green-900 hover:border-2 hover:border-green-400">
        <img :src="card.src" alt="" class="w-28">
        <div class="bg-gray-400 h-1 w-24 mt-3"></div>
        <div class="dark:text-white">{{card.name}}</div>
      </button>
    </div>
  </div>
</template>
