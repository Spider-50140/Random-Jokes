const jokeel = document.getElementById('joke')
const jokebtn = document.getElementById('jokesbtn')

jokebtn.addEventListener('click', randomjoke)
randomjoke()

// Using then
// function randomjoke() {
//   const config = {
//     headers: {
//       Accept: 'application/json',
//     },
//   }

//   fetch('https://icanhazdadjoke.com', config)
//     .then(function (res) {
//       return res.json()
//     })

//     .then(function (data) {
//       console.log(data)
//     })
// }

// Using Async await

async function randomjoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }

  const res = await fetch('https://icanhazdadjoke.com', config)

  const data = await res.json()

  jokeel.innerHTML = data.joke
}
