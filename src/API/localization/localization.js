
function sucess(position){
  return {
    localization: position,
    latitude: position.coords.latitude,
    longitude: position.coords.longitude,
  }
}

function showError(error){
  return `Erro ao capturar Localização: ${error.message}`
}

export function getPosition(inputResObj/*posição passada pelo usuário*/){
  return new Promise((resolve, reject) => {
    
    if(inputResObj){ //caso ele tenha algum valor, vai retornar o valor (inicialmente ele não tem então retorna a posição atual)
      resolve(inputResObj)
    }else{//retorna a posição atula
      navigator.geolocation.getCurrentPosition(
        position => {
          resolve(sucess(position))
        }, 
        error => {
          const errorMessage = showError(error)
          console.error(errorMessage)
          reject(errorMessage)
        }
      )
    }

  })
}