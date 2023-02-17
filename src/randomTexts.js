const randomText = [
'Meu email',
'A probabilidade de cair as três cores perfeitas é de 0,0019%',
'Oque será que acontece se cair três cores perfeitas?...',
'Opa moshi moshi, boa tarde',
]

export const randomTextSelector = () => {
  const newMin = Math.ceil(1);
  const newMax = Math.floor(randomText.length);
  const randomPosition = Math.floor(Math.random() * (newMax - newMin)) + newMin;
  return randomText[randomPosition]
}
