import { getPosition } from "../localization/localization.js"
import { API_KEY } from './parameters.js'


  //resultPosition = rP
function getCurrentWeather(){
  return getPosition().then(rP => {

    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${rP.latitude.toFixed(2)}&lon=${rP.longitude.toFixed(2)}&units=metric&lang=pt_br&appid=${API_KEY}`)
      .then(result => {
        return result.json()
      })
      .then(body => {
        console.log(body)
        return body
      })
      .catch(err => {
        console.log(err)
        return err
      })
      .finally(result => {
        return console.log('Requisição Finalizada: ' + result)
      })
  
  })

}

function getIconWeather(iconId){
  return fetch(`https://openweathermap.org/img/wn/${iconId}@2x.png`)
    .then(result => {
      return result
    })
    .catch(err => {
      console.log(err)
      return err
    })
}

export { getCurrentWeather, getIconWeather }

/*
async function getCurrentWeather() {
  try {
    const posicao = await getPosition(); // Aguarda a localização
    const url = `https: //api.openweathermap.org/data/2.5/weather?lat=${posicao.latitude}&lon=${posicao.longitude}&units=metric&lang=pt_br&appid=${API_KEY}`;

    const resposta = await fetch(url);  // Aguarda a resposta da API
    const dados = await resposta.json(); // Aguarda o corpo da resposta ser convertido em JSON

    return dados; // Retorna os dados do clima
  } catch (erro) {
    console.error("Erro ao obter clima:", erro);
    throw erro; // Propaga o erro para quem chamou
  }
}

*/