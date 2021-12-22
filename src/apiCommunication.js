export const gameInt = async (url, gameName) => {
  const response = await fetch(url, {
    method: 'POST',
    body: JSON.stringify({
      name: gameName,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const jsonRespnse = await response.json();
  const id = await jsonRespnse.result.replace('Game with ID: ', '').replace(' added.', '');
  return id;
};

export const fetchData = async (url, gameId) => {
  const response = await fetch(`${url}${gameId}/scores/`, {
    method: 'GET',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  const jsonRespnse = await response.json();
  const data = jsonRespnse.result;
  return data;
};

export const submitData = async (url, gameId) => {
  const name = document.getElementById('name').value;
  const score = document.getElementById('score').value;
  const response = await fetch(`${url}${gameId}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: `${name}`,
      score: `${score}`,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
  return response;
};
