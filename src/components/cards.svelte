<script lang="ts" setup>
  import { cardArray, click} from '../stores/card';
  import angular from '../assets/images/angular.png';
  import chromeLogo from '../assets/images/chrome-logo.svg';
  import createReact from '../assets/images/create-react.svg';
  import github from '../assets/images/github.png';
  import node from '../assets/images/node.png';
  import solid from '../assets/images/solid.svg';
  import svelte from '../assets/images/svelte.png';
  import tailwind from '../assets/images/tailwind.png';
  import typescript from '../assets/images/typescript.png';
  import vite from '../assets/images/vite.png';
  import vscode from '../assets/images/vscode.png';
  import vue from '../assets/images/vue.png';
  let images = [vue, angular, createReact, chromeLogo, vscode, vite, typescript, svelte, github, tailwind, node, solid];
  </script>
  <template>
    <div class="grid-cols-4 grid gap-3">
      {#each $cardArray as card}
      <div>
        <button on:click={() => {click(card)}}
          class="bg-gray-300 dark:bg-gray-600 p-5 rounded-md flex flex-col items-center h-56 justify-center mr-4 w-44 hover:bg-green-200 hover:dark:bg-green-900 hover:border-2 hover:border-green-400">
          <img src="{images[card.src]}" alt="" class="w-28">
          <div class="bg-gray-400 h-1 w-24 mt-3"></div>
          <div class="dark:text-white">{card.name}</div>
        </button>
      </div>
      {/each}
    </div>
  </template>