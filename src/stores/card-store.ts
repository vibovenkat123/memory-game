import { defineStore } from "pinia";
import { ref, type Ref, watch} from "vue";
type itemObj = {
  name:string;
  src:string;
}
export const useCardStore = defineStore('cardStore', () => {
  const cardArray = ref([{name:'Vue', src:'/images/vue.png'}, {name:'Angular', src:'/images/angular.png'}, {name:'Create React App', src:'/images/create-react.svg'}, {name:'Chrome', src:'/images/chrome-logo.svg'}, {name:'Visual Studio Code', src:'/images/vscode.png'}, {name:'Vite', src:'/images/vite.png'}, {name:'Typescipt', src:'/images/typescript.png'}, {name:'Svelte', src:'/images/svelte.png'}, {name:'Github', src:'/images/github.png'}, {name:'Tailwind', src:'/images/tailwind.png'}, {name:'Node', src:'/images/node.png'}, {name:'Solid', src:'/images/solid.svg'}]);
  const clickedArray :Ref= ref([])
  const scores = ref({
    score:0,
    highScore:0
  })
  watch(scores, 
    (scoresVal) => {
      localStorage.setItem('scores', JSON.stringify(scoresVal))
  },
  {deep:true})
  if (localStorage.getItem('scores')){
    scores.value.highScore = JSON.parse(localStorage.getItem('scores')!).highScore
  }
  function click(item:itemObj){
    if (!(clickedArray.value.indexOf(item) < 0)) {
      if (scores.value.highScore < scores.value.score){
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