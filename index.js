import express from 'express';
import pets from './helper.js';

const app = express()
const port = process.env.PORT || 3000


app.get('/', (req, res) => {
  res.send(`
  <h1>Adopt a Pet!</h1>
  <p>Browse through the links below to find your new fury friend:</p>
  <ul>
    <li>
      <a href="/animals/dogs"> Dogs 🐕 </a>
   </li>
    <li>
    <a href="/animals/cats">Cats 🐈</a>
    </li>
    <li>
      <a href="/animals/rabbits">Rabbits 🐇</a>
      </li>
  </ul>
  `)
})

/* app.get("/animals", (req, res) => {
  res.send(`
  <h1>List of pets</h1>
  `)
}) */
app.get("/animals/:pet_type", (req, res) => {
 // console.log(pets[req.params.pet_type.toLowerCase()])
  const availablePets = pets[req.params.pet_type.toLowerCase()]
  if(!availablePets) return res.send(`<h2>Sorry we don't have ${req.params.pet_type}</h2>`);
  let listOfPets = `<ul>`;
  availablePets.forEach(pet => {
    listOfPets += `<li>${pet.name}</li>`
  })
  listOfPets += `</ul>`;

 res.send(`
  <h1>List of ${req.params.pet_type}</h1>
  ${listOfPets}
  `)
})


app.listen(port, () => console.log(`Server running on port ${port}`));