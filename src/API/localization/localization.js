
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

export function getPosition(){
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      position => {
        resolve(sucess(position))
      }, 
      error => {
        const errorMessage = showError(error)
        console.error(errorMessage)
        reject(errorMessage)
      })
    }
  )
}