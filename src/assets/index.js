// src/assets/index.js
const images = import.meta.glob('./images/*.{png,jpg,jpeg,svg}', { eager: true });

const imageArray = Object.values(images).map((module) => module.default);

export default imageArray;
