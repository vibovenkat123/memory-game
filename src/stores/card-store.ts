import { defineStore } from "pinia";
import { ref, type Ref } from "vue";
type itemObj = {
  name:string;
  src:string;
}
export const useCardStore = defineStore('cardStore', () => {
  const cardArray= ref([]);
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
    cardArray.value = cardArray.value
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value)
  }
  return {click, scores, cardArray, clickedArray}
})