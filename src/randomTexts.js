

const randomText = [
'Meu email!',
'A probabilidade de cair as três cores perfeitas é de 0,0019%',
'Oque será que acontece se cair três cores perfeitas?...',
'Opa moshi moshi, boa tarde!',
]

// const chanceText = () => {
//   const totalTexts = randomText.length;
//   const totalCalc = 1 / totalTexts;
//   const calcPercent = totalCalc * 100;
//   const text = `A chance dessa mensagem aparecer é de ${calcPercent}%`,
//   randomText.push(text);
// }

export const randomTextSelector = () => {
  const newMin = Math.ceil(1);
  const newMax = Math.floor(randomText.length + 1);
//   chanceText();
  const randomPosition = Math.floor(Math.random() * (newMax - newMin)) + newMin;
  return randomText[randomPosition];
}
