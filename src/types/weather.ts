export interface ForecastDay {
  date: string
  max: number
  min: number
  weathercode: number
}

export interface WeatherData {
  temperature: number
  windspeed: number
  humidity: number
  visibility: number
  forecast: ForecastDay[]
}
