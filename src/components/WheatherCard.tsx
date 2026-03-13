import { useSelector } from 'react-redux'
import { RootState } from '../store/store'

const WeatherCard = () => {
  const weather = useSelector((state: RootState) => state.weather.data)

  if (!weather) return null

  return (
    <div className="bg-white p-8 rounded-2xl shadow mb-8">
      <h2 className="text-gray-500">Current Weather</h2>

      <h1 className="text-6xl font-bold text-blue-600">
        {weather.temperature}°
      </h1>

      <p className="text-gray-600">Wind {weather.windspeed} km/h</p>

      <div className="grid grid-cols-3 gap-4 mt-6">
        <div className="bg-blue-50 p-4 rounded-2xl text-center">
          Humidity
          <p className="font-bold text-blue-400">{weather.humidity}%</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-2xl text-center">
          Wind
          <p className="font-bold text-green-300">{weather.windspeed} km/h</p>
        </div>

        <div className="bg-blue-50 p-4 rounded-2xl text-center">
          Visibility
          <p className="font-bold text-violet-600">{weather.visibility} km</p>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
