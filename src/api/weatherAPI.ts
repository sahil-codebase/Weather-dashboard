import axios from 'axios'

export const getWeatherByCity = async (city: string) => {
  const geo = await axios.get(
    'https://geocoding-api.open-meteo.com/v1/search',
    {
      params: {
        name: city,
        count: 1
      }
    }
  )

  const lat = geo.data.results[0].latitude
  const lon = geo.data.results[0].longitude

  const weather = await axios.get('https://api.open-meteo.com/v1/forecast', {
    params: {
      latitude: lat,
      longitude: lon,
      current_weather: true,
      hourly: 'relativehumidity_2m,visibility',
      daily: 'weathercode,temperature_2m_max,temperature_2m_min',
      timezone: 'auto'
    }
  })

  const data = weather.data

  const forecast = data.daily.time.map((day: string, index: number) => ({
    date: day,
    max: data.daily.temperature_2m_max[index],
    min: data.daily.temperature_2m_min[index],
    weathercode: data.daily.weathercode[index]
  }))

  return {
    temperature: data.current_weather.temperature,
    windspeed: data.current_weather.windspeed,
    humidity: data.hourly.relativehumidity_2m[0],
    visibility: data.hourly.visibility[0] / 1000,
    forecast: forecast.slice(0, 5)
  }
}
