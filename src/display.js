/* eslint-disable import/prefer-default-export */
export const display = (result) => {
  const list = document.getElementById('list');
  list.innerHTML = '';
  for (let i = 0; i < result.length; i += 1) {
    const listItem = document.createElement('li');
    listItem.classList.add('list-li-0');
    if (i % 2 === 0) {
      listItem.classList.add('list-li-0');
    } else {
      listItem.classList.add('list-li-1');
    }
    listItem.innerHTML = `${result[i].user}: ${result[i].score}`;
    list.appendChild(listItem);
  }
};
