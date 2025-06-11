import { latitudeEl, longiduteEl, climaEl, inputUser, buttonEl, closeButtonEl} from "../getElements.js";
import { getPosition } from "../../API/localization/localization.js";
import { getCurrentWeather } from "../../API/config/request.js";
import { elementsWeather } from "../elementsWeather.js";
import { inputTransform } from "../inputTransform.js";
import { API_KEY_OCD } from "../../API/config/parameters.js";

let hasBeenClicked = false

getPosition().then(result => {
  latitudeEl.innerHTML += ` ${result.latitude}`
  longiduteEl.innerHTML += ` ${result.longitude}`
  // console.log(result)
})

closeButtonEl.addEventListener('click', ()=>{
  if(hasBeenClicked){
    alert('Espere após clicar em um botão')
    return;
  }
  hasBeenClicked = true //impede que um botão seja clicado muitas vezes

  climaEl.innerHTML = ''
  getCurrentWeather().then(result => {
    elementsWeather(climaEl, result)
    hasBeenClicked = false
  })

})

buttonEl.addEventListener('click', async () => { 
  if(hasBeenClicked){
    alert('Espere após clicar em um botão')
    return;
  }
  
  if(!inputUser.value && !inputUser.value.includes(',')){
    alert('Preencha os campos corretamente')
    return;
  }
  hasBeenClicked = true

  const result =  await inputTransform(inputUser, API_KEY_OCD)
  latitudeEl.innerHTML = `Latitude: ${result.userLat}`
  longiduteEl.innerHTML = `Longitude: ${result.userLng}`

  climaEl.innerHTML = ''

  getCurrentWeather(result/*passa a posição escolhia como parâmetro*/).then(res => {
    elementsWeather(climaEl, res)
    hasBeenClicked = false
    inputUser.value = ''
  })
})