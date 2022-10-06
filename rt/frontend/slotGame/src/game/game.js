import { spin } from './actions';

const canvas = document.getElementById('game');
const spinButton = document.getElementById('spin-btn');

spinButton.addEventListener('click', async (e) => {
  e.preventDefault();

  const data = await spin();
  console.log('Spin Complete ::: result >>> ', data);
});
