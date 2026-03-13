import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchWeather } from '../features/weatherSlice'

const SearchBar = () => {
  const [city, setCity] = useState('')
  const dispatch = useDispatch()

  const handleSearch = () => {
    dispatch(fetchWeather(city))
  }

  return (
    <div className="flex gap-3 mb-6">
      <input
        className="flex-1 border p-3 rounded"
        placeholder="Search City"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />

      <button
        className="bg-blue-500 text-white px-5 rounded"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  )
}

export default SearchBar
