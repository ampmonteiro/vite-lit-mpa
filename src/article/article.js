import { load } from '../utils';

const appArticleStart = (data) => {
  const articleEl = window.document.querySelector('app-article');

  articleEl.item = data;
};

load(appArticleStart, false);

// OR this way, you just need to add index.ts script at head
// no tags inside of the body
// import './app-article';

// const appArticleStart = (data) => {
//   const articleEl = document.createElement('app-article');

//   articleEl.item = data;

//   window.document.body.append(articleEl);
// };

// load(appArticleStart, false);
