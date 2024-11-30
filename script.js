const btnGen = document.getElementById("btn");
const dogImg = document.getElementById("dog-img")
async function updDogImage(){
  const url = 'https://dog.ceo/api/breeds/image/random'
  const response = await fetch(url)
  const data = await response.json();

  dogImg.src = data.message
  breedName = document.getElementById("breed")
  breedName.innerText = 'Breed: '+ data.message.split("/")[4]
}
btnGen.addEventListener('click',updDogImage)