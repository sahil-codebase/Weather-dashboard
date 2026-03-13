import SearchBar from '../components/SearchBar'
import WeatherCard from '../components/WheatherCard'
import Forecast from '../components/Forecast'

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-blue-100 p-10">
      <div className="max-w-2xl mx-auto pl-9">
        <h1 className="text-5xl font-bold text-blue-600 ml-5">Weather</h1>

        <p className="text-sm text-gray-500 mt-2 mb-9 ml-5">
          Your local forecast
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <SearchBar />
        <WeatherCard />
        <Forecast />
      </div>
    </div>
  )
}

export default Dashboard
