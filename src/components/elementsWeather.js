export function elementsWeather(climaEl, result){

  const divGpE = document.createElement('div')
  divGpE.classList.add('leftGroup')
  climaEl.appendChild(divGpE)
  
  getIconClima(divGpE, result)
  
  //temperatura
  const pCLimaEl = document.createElement('p')
  pCLimaEl.classList.add('pClima')
  pCLimaEl.textContent = `${Math.floor(result.main.temp)}`
  divGpE.appendChild(pCLimaEl)
  const degressCelsius = document.createElement('img')
  degressCelsius.classList.add('degressCelsius')
  degressCelsius.alt = 'icone de graus'
  degressCelsius.src = '../../public/assets/icon/white-celsius.png'
  divGpE.appendChild(degressCelsius)

  const divGpD = document.createElement('div')
  divGpD.classList.add('rightGroup')
  climaEl.appendChild(divGpD)
  //lista não ordenada
  const ulClimaEl = document.createElement('ul')
  ulClimaEl.classList.add('ulClima')
  divGpD.appendChild(ulClimaEl)
  //elementos LI da lista
  const pClimaArr = []
  for(let p = 0; p <= 3; p++){
    const liClimaEl = document.createElement('li')
    liClimaEl.classList.add(`liClima`)
    ulClimaEl.appendChild(liClimaEl)

    const pClima = document.createElement('p')
    pClima.classList.add(`p${p}`)
    pClima.textContent = 'Paragrafo'
    liClimaEl.appendChild(pClima)

    pClimaArr.push(pClima)
  }

  pClimaArr[0].textContent = `Max: ${Math.floor(result.main.temp_max)}℃`
  pClimaArr[1].textContent = `Min: ${Math.floor(result.main.temp_min)}℃`
  pClimaArr[2].textContent = `Núvens: ${result.clouds.all}%`
  pClimaArr[3].textContent = `Clima: ${result.weather[0].description}`

  climaEl.style.display = 'flex'

  return divGpE
  // , pCLimaEl, degressCelsius, iconClimaEl, divGpD, ulClimaEl, liClimaEl
  //aqui o retorno de apenas um elemento dinâmica retorna todos os outros, porque tanto o grupo da direita quanto o da esquerda estão 'pendurados' no mesmo elementos pai 'climaEl', o que resulta no retorno de todos elementos filhos do elemento pai 'climaEl'
}

export function getIconClima(divGpE, result){
  const iconClimaEl = document.createElement('img')
  iconClimaEl.classList.add('iconeClima')
  iconClimaEl.alt = 'icone de clima'
  iconClimaEl.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`
  divGpE.appendChild(iconClimaEl)

  return iconClimaEl
}