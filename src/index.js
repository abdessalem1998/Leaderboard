import './style.css';

// create the game ID
let gameId = 'Still loading';
fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/', {
  method: 'POST',
  body: JSON.stringify({
    name: 'Dib game',
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => {
    gameId = json.result.replace('Game with ID: ', '').replace(' added.', '');
  });
console.log(gameId);
const component = () => {
  const element = document.createElement('div');
  return element;
};

document.body.appendChild(component());
