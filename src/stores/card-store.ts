import { defineStore } from "pinia";
import { ref, type Ref, watch} from "vue";
type itemObj = {
  name:string;
  src:number;
}
export const useCardStore = defineStore('cardStore', () => {
  const cardArray = ref([{name:'Vue', src:0}, {name:'Angular', src:1}, {name:'Create React App', src:2}, {name:'Chrome', src:3}, {name:'Visual Studio Code', src:4}, {name:'Vite', src:5}, {name:'Typescipt', src:6}, {name:'Svelte', src:7}, {name:'Github', src:8}, {name:'Tailwind', src:9}, {name:'Node', src:10}, {name:'Solid', src:11}]);
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