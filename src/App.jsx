import React from 'react';
import { useState, useEffect } from 'react'
import { randomColorGenerator } from './randomColorGenerator'
import { randomTextSelector } from './randomTexts'
import './App.css'

export function App() {
  const [randomColorEmail, setRandomColorEmail] = useState();
  const [randomColorText, setRandomColorText] = useState();
  const [randomColorButton, setRandomColorButton] = useState();
  const [perfectColors, setPerfectColors] = useState();
  const [randomText, setRandomText] = useState('Meu email!');
  const [newColor, setNewColor] = useState(0);

  useEffect(() => {
    const { colorEmail, colorText, colorButton, colorsVerify } = randomColorGenerator();
    setRandomColorEmail(colorEmail);
    setRandomColorText(colorText);
    setRandomColorButton(colorButton);
    setPerfectColors(colorsVerify);
  }, [newColor]);

  useEffect(() => {
    const text = randomTextGenerator();
    setRandomText(text)
  }, []);

  const onClickColorButton = () => {
    let color = newColor;
    setNewColor(color += 1);
  };

  return (
    <div className="App">
      <h1 style={{color: `${randomColorEmail}`, transition: `1s`}}>esdras12thiago@gmail.com</h1>
      <h2 style={{color: `${randomColorText}`, transition: `1s`}}>{randomText}</h2>
      <button 
      type="button" 
      className="Button" 
      style={{
        color: `${randomColorButton}`,
        backgroundColor: `${randomColorEmail}`,
        transition: `1s`
    }}
      onClick={onClickColorButton}
      >TROCAR COR</button>
      { perfectColors && <h1 style={{color: `${randomColorEmail}`}}>PARABÉNS, VOCÊ CONSEGUIU UMA COMBINAÇÃO PERFEITA</h1> }
    </div>
  );
}
