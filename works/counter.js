let count = 0
const countUp = () => {
  count++
  const countElement = document.querySelector('#count')
  countElement.innerText = 'ｲｴｰｲヽ(^o^)丿: ' + count
}