const fetchData = async () => {
   const response = await fetch(`https://jsonplaceholder.typicode.com/posts`)
   const data = response.json()
   return data;
}
const createCard = async () => {
   const data = await fetchData()
   data.map(() => {
      const div = document.createElement('div');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');
      const img = document.createElement('img');
      img.src = './Лайм.jpg'
      img.style.width = '100%'
      p.innerHTML = data.body
      h1.innerHTML = data.title 
      h1.style.fontSize = '20px'
      div.append(img, h1, p)
      div.style.width = '400px'
      div.style.height = '400px'
      div.style.border = '1px solid black'
      div.style.margin = '20px'
      div.style.padding = '10px'
      document.querySelector('body').appendChild(div)
   })
}
createCard()
