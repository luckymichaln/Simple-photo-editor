export default function getRandomPicUrl() {
  let range = 10000
  return 'https://source.unsplash.com/random?sig=' + Math.ceil(Math.random() * range)
}