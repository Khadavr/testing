/* eslint-disable import/prefer-default-export */
import image from './assets/image.png';
import {
  TextBlock, TitleBlock, ImageBlock, ColumnsBlock,
} from './classes/block.js';

export const model = [
  new TitleBlock('JS site constructor', {
    tag: 'h2',
    styles: {
      background: 'linear-gradient(to right, #ff0099, #493240);',
      color: '#fff',
      'text-align': 'center',
      padding: '1.5rem',
    },
  }),
  new ImageBlock(image, {
    styles: {
      padding: '2rem 0',
      display: 'flex',
      'justify-content': 'center',

    },
    imageStyles: {
      width: '1000px',
      height: '400px',
      'border-radius': '50px',
    },
    alt: 'ShitImage',
  }),
  new TextBlock('Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, saepe, possimus accusantium atque reprehenderit dignissimos architecto quis corrupti ad nobis perspiciatis quisquam fuga iusto nesciunt error velit odio praesentium doloremque laboriosam. Ratione nihil laboriosam corrupti soluta eius dolore architecto voluptate, ad exercitationem blanditiis velit nemo, fuga facilis. Reprehenderit, laudantium ratione recusandae pariatur sapiente cumque quia maiores veritatis, blanditiis praesentium suscipit tenetur et repudiandae neque illo expedita nesciunt eum? Nulla nemo sed numquam est ducimus soluta, exercitationem adipisci dignissimos fugiat ullam reiciendis, omnis praesentium pariatur ratione minus architecto! Ea repudiandae fugit ut libero maiores, facere a non ex optio voluptatum sequi.', {
    styles: {
      'font-family': 'Montserrat, sans-serif',
      'font-size': '18px',
      padding: '1rem',
      background: 'linear-gradient(to left, #f2994a, #f2c94c)',
    },
  }),
  new ColumnsBlock([
    'Lorem ipsum dolor sit amet.',
    'Lorem ipsum dolor sit amet consectetur.',
    'Lorem ipsum dolor sit.',
  ], {
    styles: {
      color: '#fff',
      padding: '2rem',
      background: 'linear-gradient(to bottom, #8e2de2, #4a00e0)',
    },
  }),
];
