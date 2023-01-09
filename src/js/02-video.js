import Player from '@vimeo/player';
import _ from 'lodash';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const STORAGE_KEY = 'videoplayer-current-time';

player.on(
  'timeupdate',
  _.throttle(e => {
    localStorage.setItem(STORAGE_KEY, e.seconds);
  }, 1000)
);

const getVideoCurrentTime = () => {
  return localStorage.getItem(STORAGE_KEY);
};

player
  .setCurrentTime(getVideoCurrentTime())
  .then(function (seconds) {})
  .catch(function (error) {
    switch (error.name) {
      case 'RangeError':
        break;

      default:
        break;
    }
  });
