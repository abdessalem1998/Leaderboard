import './style.css';
import { gameInt, fetchData, submitData } from './apiCommunication.js';
import { display } from './display.js';

// create the game setting
let gameId = 'Still loading';
const url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/';
const gameName = 'dib Game v-1.0';

// int the game
gameInt(url, gameName).then((response) => {
  gameId = response;
});

const appCore = () => {
  // refresh action
  const refresh = document.getElementById('refresh');
  refresh.addEventListener('click', () => {
    fetchData(url, gameId).then((response) => {
      display(response);
    });
  });

  // submit action
  const submit = document.getElementById('submit');
  submit.addEventListener('click', () => {
    submitData(url, gameId);
  });
};

// run the game
appCore();
