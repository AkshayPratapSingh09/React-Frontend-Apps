export function generateRandomAnswer() {
  const array = [];
  let onePlaced = false;

  for (let i = 0; i < 25; i++) {
    if (!onePlaced && Math.random() < 0.04) {
      array.push(1);
      onePlaced = true;
    } else {
      array.push(0);
    }
  }

  return array;
}