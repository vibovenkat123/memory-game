import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
type itemObj = {
  name:string;
  src:string;
}
export const useCardStore = defineStore('cardStore', () => {
  const cardArray = ref([{name:'Vue', src:'https://vuejs.org/images/logo.png'}, {name:'Pinia', src:'https://pinia.vuejs.org/logo.svg'}]);
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