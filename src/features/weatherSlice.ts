import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getWeatherByCity } from '../api/weatherAPI'
import { WeatherData } from '../types/weather'

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string) => {
    return await getWeatherByCity(city)
  }
)

interface WeatherState {
  data: WeatherData | null
  loading: boolean
}

const initialState: WeatherState = {
  data: null,
  loading: false
}

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true
    })

    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.loading = false
      state.data = action.payload
    })
  }
})

export default weatherSlice.reducer
