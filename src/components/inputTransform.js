export async function inputTransform(inputUser, api_key_ocd){
    const encodedInput = encodeURIComponent(inputUser.value) //codifica o texto para um padrão URL para usar fazer a requisição
    return await fetchOCDApi(encodedInput, api_key_ocd)
  
}

// usa a entrada do usuário para pesquisar as coordenadas de uma localização específica
async function fetchOCDApi(inputTransformed, api_key_ocd){
  const fetchRes = await fetch(`https:api.opencagedata.com/geocode/v1/json?q=${inputTransformed}&language=pt-BR&key=${api_key_ocd}`)
  const jsonResult = await fetchRes.json() //pega a requisição e passa ela em formato json para a variável
  //console.log(jsonResult)

  const geolocationUser = {
    userLat: jsonResult.results[0].geometry.lat,
    userLng: jsonResult.results[0].geometry.lng
  }
  //console.log(geolocationUser)

  return geolocationUser
}