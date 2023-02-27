import {getRandomInteger, generateCommentId} from './generate-photo-gallery.js';

const photoDescriptions = [
  'Если смогу, я сделаю это. Конец истории.',
  'Моя жизнь меняется, потому что меняю ее я.',
  'Всегда начинайте свой день с хороших людей и кофе.',
  'Все только начинает становиться действительно хорошим.',
  'Утром только одна хорошая мысль меняет смысл целого дня.'
];

const commentMessages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const commentNames = [
  'Анастасия',
  'Арина',
  'Иван',
  'Лев',
  'Егор',
  'Ксения',
  'Константин',
  'Владимир'
];

const numberOfAvatars = 6;

const generateComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, numberOfAvatars)}.svg`,
  message: `${commentMessages[getRandomInteger(0, commentMessages.length - 1)]} ${commentMessages[getRandomInteger(0, commentMessages.length - 1)]}`,
  name: commentNames[getRandomInteger(0, commentNames.length - 1)],
});

const generatePhoto = (integer) => ({
  id: integer,
  url: `photos/${integer}.jpg`,
  description: photoDescriptions[getRandomInteger(0, photoDescriptions.length - 1)],
  likes: getRandomInteger(15, 200),
  comments: []
});

const generatePhotoGallery = (count) => {
  const photos = [];
  for (let i = 1; i <= count; i++) {
    const photo = generatePhoto(i);
    for (let j = 1; j <= (getRandomInteger(1, 3)); j++) {
      photo.comments.push(generateComment());
    }
    photos.push(photo);
  }
  return photos;
};

export {generatePhotoGallery};