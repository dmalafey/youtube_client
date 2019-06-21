import Videos from './videos';

const getVideos = term => [...Videos].filter(item => item.title.toLowerCase().includes(term.toLowerCase()));

const delayGetVideos = term => new Promise(((resolve) => {
  setTimeout(() => {
    resolve(getVideos(term));
  }, 1000);
}));

export default delayGetVideos;
