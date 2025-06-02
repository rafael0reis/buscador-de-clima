import { latitudeEl, longiduteEl, climaEl} from "../getElements.js";
import { getPosition } from "../../API/localization/localization.js";
import { getCurrentWeather, getIconWeather } from "../../API/config/request.js";
import { elementsWeather } from "../elementsWeather.js";

getPosition().then(result => {
  latitudeEl.innerHTML += ` ${result.latitude}`
  longiduteEl.innerHTML += ` ${result.longitude}`
  console.log(result)
})

getCurrentWeather().then(result => {
  elementsWeather(climaEl, result)
})