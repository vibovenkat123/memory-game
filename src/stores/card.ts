import { writable, get, type Writable } from 'svelte/store';
export const cardArray = writable([{ name: 'Vue', src: 0 }, { name: 'Angular', src: 1 }, { name: 'Create React App', src: 2 }, { name: 'Chrome', src: 3 }, { name: 'Visual Studio Code', src: 4 }, { name: 'Vite', src: 5 }, { name: 'Typescipt', src: 6 }, { name: 'Svelte', src: 7 }, { name: 'Github', src: 8 }, { name: 'Tailwind', src: 9 }, { name: 'Node', src: 10 }, { name: 'Solid', src: 11 }]);
export const clickedArray: Writable<object[]> = writable([]);
export const scores = writable({
  score: 0,
  highScore: 0
});
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function click(item: any) {
  console.log((get(clickedArray).includes(item)))
  if (get(clickedArray).includes(item)) {
    if (get(scores).highScore < get(scores).score) {
      scores.update(n => {
        n.highScore = n.score;
        return n;
      });
    }
    get(scores).score = 0;
    clickedArray.set([]);
    return;
  }
  clickedArray.update(
    n => {
      n.push(item);
      return n;
    }
  );
  console.log(clickedArray)
  scores.update(n => {
    n.score++;
    return n;
  });
  cardArray.update(n => {
    for (let i = n.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (n.length));
      [n[i], n[j]] = [n[j], n[i]];
    }
    return n;
  });
  console.log(get(cardArray))
}