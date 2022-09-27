import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
type itemObj = {
  name:string;
  src:string;
}
export const useCardStore = defineStore('cardStore', () => {
  const cardArray = ref([{name:'Vue', src:'src/assets/images/vue.png'}, {name:'Angular', src:'src/assets/images/angular.png'}, {name:'Create React App', src:'src/assets/images/create-react.svg'}, {name:'Chrome', src:'src/assets/images/chrome-logo.svg'}, {name:'Visual Studio Code', src:'src/assets/images/vscode.png'}, {name:'Vite (the best!!)', src:'src/assets/images/vite.png'}, {name:'Typescipt', src:'src/assets/images/typescript.png'}, {name:'Svelte', src:'src/assets/images/svelte.png'}, {name:'Github', src:'src/assets/images/github.png'}]);
  const clickedArray :Ref= ref([])
  const scores = ref({
    score:0,
    highScore:0
  })
  function click(item:itemObj){
    if (!(clickedArray.value.indexOf(item) < 0)) {
      if (scores.value.highScore > scores.value.score){
        scores.value.highScore = scores.value.score
      }
      scores.value.score = 0;
      clickedArray.value = []
      return;
    }
    clickedArray.value.push(item)
    scores.value.score ++;
    cardArray.value = cardArray.value
    .map((value: any)=> ({ value, sort: Math.random() }))
    .sort((a: { sort: number; }, b: { sort: number; }) => a.sort - b.sort)
    .map(({ value } : {value: any}) => value)
  }
  return {click, scores, cardArray, clickedArray}
})