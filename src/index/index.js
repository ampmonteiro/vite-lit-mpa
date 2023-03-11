import { load } from '../utils';

const appHomeStart = (data = []) => {
  const homeEl = document.querySelector('app-home');

  homeEl.news = data;
};

load(appHomeStart);

// OR this way, you just need to add index.ts script at head
// import './app-home';

// const appHomeStart = (data = []) => {
//   const homeEl = document.createElement('app-home');

//   homeEl.header = 'Blog';

//   homeEl.news = data;

//   window.document.body.append(homeEl);
// };

// load(appHomeStart);
