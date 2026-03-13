import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const getWeatherText = (code: number) => {
  if (code === 0) return 'Sunny'
  if (code === 1 || code === 2) return 'Partly Cloudy'
  if (code === 3) return 'Cloudy'
  if (code >= 45 && code <= 48) return 'Fog'
  if (code >= 51 && code <= 67) return 'Drizzle'
  if (code >= 71 && code <= 77) return 'Snow'
  if (code >= 80 && code <= 82) return 'Rain'
  if (code >= 95) return 'Thunderstorm'

  return 'Clear'
}

const getWeatherIcon = (code: number) => {
  if (code === 0) return '☀️'
  if (code === 1 || code === 2) return '🌤️'
  if (code === 3) return '☁️'
  if (code >= 45 && code <= 48) return '🌫️'
  if (code >= 51 && code <= 67) return '🌦️'
  if (code >= 71 && code <= 77) return '❄️'
  if (code >= 80 && code <= 82) return '🌧️'
  if (code >= 95) return '⛈️'
  return '☀️'
}

const Forecast = () => {
  const weather = useSelector((state: RootState) => state.weather.data)

  if (!weather) return null

  return (
    <div className="max-w-xl mx-auto mt-8">
      <h2 className="text-xl font-semibold mb-6">5-Day Forecast</h2>

      <div className="grid grid-cols-5 gap-4">
        {weather.forecast.map((day, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-4 text-center">
            <p className="font-semibold">
              {new Date(day.date).toLocaleDateString('en-US', {
                weekday: 'long'
              })}
            </p>

            <div className="text-3xl my-2">
              {getWeatherIcon(day.weathercode)}
            </div>

            <p className="text-gray-500 mb-4 h-12 flex items-center justify-center">
              {getWeatherText(day.weathercode)}
            </p>

            <div className="flex justify-between text-sm text-gray-500">
              <span>High</span>
              <span>Low</span>
            </div>

            <div className="flex justify-between font-semibold">
              <span className="text-blue-600 text-sm mr-1">{day.max}°</span>
              <span className="text-gray-600 text-sm">{day.min}°</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Forecast
