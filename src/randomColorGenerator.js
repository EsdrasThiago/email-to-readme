export const randomColorGenerator = () => {
  const letters = '0123456789ABCDEF';

  let colorEmail = '#';
  let colorButton = '#';
  let colorText = '#';

  for (let i = 0; i < 6; i++) {
    colorEmail += letters[Math.floor(Math.random() * 16)];
    colorText += letters[Math.floor(Math.random() * 16)];
    colorButton += letters[Math.floor(Math.random() * 16)];
  }

  const emailEqualText = colorEmail === colorText;
  const textEqualButton = colorText === colorButton;
  const colorsVerify = emailEqualText || textEqualButton;

  const colors = {
    colorEmail,
    colorText,
    colorButton,
    colorsVerify,
  }
  
  return colors;
}