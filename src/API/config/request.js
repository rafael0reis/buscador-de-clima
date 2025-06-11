import { getPosition } from "../localization/localization.js"
import { API_KEY_OW } from './parameters.js'


  //resultPosition = rP
function getCurrentWeather(inputResObj/*posição escolhida do usuário*/){
  
  return getPosition(inputResObj).then(rP => {
    const trueResultLat = rP.latitude ?? rP.userLat
    const trueResultLng = rP.longitude ?? rP.userLng

    return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${trueResultLat}&lon=${trueResultLng}&units=metric&lang=pt_br&appid=${API_KEY_OW}`)
      .then(result => {
        return result.json()
      })
      .catch(err => {
        console.log(err)
        return err
      })
      .finally(() => {
        return console.log('Requisição Finalizada')
      })
  
  })

}

export { getCurrentWeather }

// function getIconWeather(iconId){
//   return fetch(`https://openweathermap.org/img/wn/${iconId}@2x.png`)
//     .then(result => {
//       return result
//     })
//     .catch(err => {
//       console.log(err)
//       return err
//     })
// }

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