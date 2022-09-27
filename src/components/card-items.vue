<script lang="ts" setup>
// import { useCardStore } from '@/stores/card-store';
import { useCardStore } from '../stores/card-store';
let store = useCardStore();

</script>
<template>
  <div class="grid-cols-4 grid gap-3">
    <div v-for="card in store.cardArray" :key="card.src">
      <button @click="store.click(card)"
        class="bg-gray-300 p-5 rounded-md flex flex-col items-center h-56 justify-center mr-4 w-44">
        <img :src="card.src" alt="" class="w-28">
        <div class="bg-gray-400 h-1 w-24 mt-3"></div>
        <div class="">{{card.name}}</div>
      </button>
    </div>
  </div>
</template>
