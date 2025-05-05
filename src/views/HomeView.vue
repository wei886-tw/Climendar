<template>
  <div class="container-fluid">
    <div class="row flex-wrap">
      <div class="col-2 border-end border-2 border-dark vh-100">
        <navbar-view></navbar-view>
      </div>

      <div class="col-6 ps-40 pt-24">
        <div class="container" style="height: 30%">
          <div class="container ps-0">
            <h1 class="fs-40 mb-24 noto-serif-tc fw-bold">台北市今日天氣</h1>
            <div class="container ps-0">
              <p class="fs-24 mb-0">天氣狀況：{{ weatherDescription }}</p>
              <p class="fs-24 mb-24">溫度： {{ parseInt(temp) }} °C</p>
            </div>
          </div>
          <div class="container">
            <img src="" alt="" />
          </div>
        </div>

        <!-- 今日天氣 -->
        <div
          class="container d-flex px-0 justify-content-between flex-wrap align-items-center mb-0"
          style="height: 70%"
        >
          <div
            class="border rounded rounded-3 ps-16 d-flex flex-column justify-content-center shadow"
            style="width: 45%; height: 30%"
          >
            <p class="fs-24"><i class="bi bi-thermometer-half"></i> 體感溫度</p>
            <p class="fs-24 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;{{ parseInt(feelsLike) }} °C</p>
          </div>

          <div
            class="border rounded rounded-3 ps-16 d-flex flex-column justify-content-center shadow"
            style="width: 45%; height: 30%"
          >
            <p class="fs-24"><i class="bi bi-droplet"></i> 濕度</p>
            <p class="fs-24 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;{{ humidity }} %</p>
          </div>

          <div
            class="border rounded rounded-3 ps-16 d-flex flex-column justify-content-center shadow"
            style="width: 45%; height: 30%"
          >
            <p class="fs-24"><i class="bi bi-thermometer-sun"></i> 最高溫度</p>
            <p class="fs-24 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;{{ parseInt(tempMax) }} °C</p>
          </div>

          <div
            class="border rounded rounded-3 ps-16 d-flex flex-column justify-content-center shadow"
            style="width: 45%; height: 30%"
          >
            <p class="fs-24"><i class="bi bi-graph-up"></i> 氣壓</p>
            <p class="fs-24 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;{{ pressure }} hPa</p>
          </div>

          <div
            class="border rounded rounded-3 ps-16 d-flex flex-column justify-content-center shadow"
            style="width: 45%; height: 30%"
          >
            <p class="fs-24"><i class="bi bi-thermometer-snow"></i> 最低溫度</p>
            <p class="fs-24 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;{{ parseInt(tempMin) }} °C</p>
          </div>

          <div
            class="border rounded rounded-3 ps-16 d-flex flex-column justify-content-center shadow"
            style="width: 45%; height: 30%"
          >
            <p class="fs-24"><i class="bi bi-wind"></i> 風速</p>
            <p class="fs-24 fw-bold">&nbsp;&nbsp;&nbsp;&nbsp;{{ speed }} m/s</p>
          </div>
        </div>
      </div>

      <div class="col-4 pt-96">
        <div class="container ps-0"></div>
        <!-- 明日預測 -->
        <div class="container mb-16" style="height: 20.5%">
          <p class="fs-24 mb-0">明日天氣： {{ nextWeatherDescription }}</p>
          <div class="container d-flex ps-0">
            <div class="container ps-0 d-flex">
              <p class="mb-0 fw-bolder fs-24">
                <i class="bi bi-thermometer-half" style="-webkit-text-stroke: 0.5px"></i
                >&nbsp;&nbsp;
              </p>
              <p class="mb-0 fs-md-20">{{ parseInt(nextDayFeelsLike) }} °C</p>
            </div>
            <div class="container d-flex ps-0">
              <p class="mb-0 fw-bolder fs-24">
                <i class="bi bi-thermometer-snow" style="-webkit-text-stroke: 0.5px"></i
                >&nbsp;&nbsp;
              </p>
              <p class="mb-0 fs-md-20">{{ parseInt(nextDayTempMin) }} °C</p>
            </div>
            <div class="container d-flex ps-0">
              <p class="mb-0 fw-bolder fs-24">
                <i class="bi bi-thermometer-sun" style="-webkit-text-stroke: 0.5px"></i>&nbsp;&nbsp;
              </p>
              <p class="mb-0 fs-md-20">{{ parseInt(nextDayTempMax) }} °C</p>
            </div>
          </div>
        </div>

        <!-- 一週預測 -->
        <div
          class="container px-0 d-flex flex-column justify-content-between border border-2 rounded rounded-3"
          style="height: 76%"
        >
          <div class="container border-bottom border-2" style="height: 18%">
            <p class="my-auto d-flex pt-16 pb-8 mb-0">
              {{ forecastDays.day1 ? forecastDays.day1.substr(5, 5) : '' }}
            </p>
          </div>

          <div class="container border-bottom border-2" style="height: 18%">
            <p class="my-auto d-flex mb-0 pt-16 pb-8">
              {{ forecastDays.day2 ? forecastDays.day2.substr(5, 5) : '' }}
            </p>
          </div>

          <div class="container border-bottom border-2" style="height: 18%">
            <p class="my-auto d-flex mb-0 pt-16 pb-8">
              {{ forecastDays.day3 ? forecastDays.day3.substr(5, 5) : '' }}
            </p>
          </div>

          <div class="container border-bottom border-2" style="height: 18%">
            <p class="my-auto d-flex mb-0 pt-16 pb-8">
              {{ forecastDays.day4 ? forecastDays.day4.substr(5, 5) : '' }}
            </p>
          </div>

          <div class="container" style="height: 18%">
            <p class="mb-0 pt-16 pb-8">
              {{ forecastDays.day5 ? forecastDays.day5.substr(5, 5) : '' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import '@/components/NavbarView.vue'
import NavbarView from '@/components/NavbarView.vue'

export default {
  components: { NavbarView },
  data() {
    return {
      apiKey: import.meta.env.VITE_API_KEY,
      weatherDescription: null,
      temp: null,
      feelsLike: null, // 體感溫度
      tempMin: null, // 最低溫度
      tempMax: null, // 最高溫度
      pressure: null, // 氣壓
      humidity: null, // 濕度
      speed: null, // 風速
      name: null, // 城市名稱
      nextDayTemp: null,
      nextDayFeelsLike: null,
      nextDayTempMin: null,
      nextDayTempMax: null,
      nextDayPressure: null,
      nextDayHumidity: null,
      nextDaySpeed: null,
      nextDayName: null,
      nextWeatherDescription: null,
      todayDate: new Date(),
      fiveDaysForecast: null,
      forecastData: null,
      todayDays: null,
      weatherEmoji: {
        小雨: '🌧️',
        多雲: '🌥️',
        '陰，多雲': '☁️',
        晴: '☀️',
        陰: '🌫️',
        雷雨: '⛈️',
        大雨: '🌧️',
        雪: '❄️',
        霧: '🌫️',
      },
      forecastDays: {
        day1: null,
        day2: null,
        day3: null,
        day4: null,
        day5: null,
      },
    }
  },

  methods: {
    async getCurrentWeather() {
      try {
        const res = await this.$http.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Taipei,TW&appid=${this.apiKey}&units=metric&lang=zh_tw`
        )
        this.weatherDescription = res.data.weather[0].description
        this.temp = res.data.main.temp
        this.feelsLike = res.data.main.feels_like // 體感溫度
        this.tempMin = res.data.main.temp_min // 最低溫度
        this.tempMax = res.data.main.temp_max // 最高溫度
        this.pressure = res.data.main.pressure // 氣壓
        this.humidity = res.data.main.humidity // 濕度
        this.speed = res.data.wind.speed // 風速
        this.name = res.data.name // 城市名稱
      } catch (err) {
        console.log(err.message)
      }
    },

    async getNextDayForecast() {
      try {
        const res = await this.$http.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=${this.apiKey}&units=metric&lang=zh_tw`
        )
        this.nextDayTemp = res.data.main.temp
        this.nextDayFeelsLike = res.data.main.feels_like
        this.nextDayTempMin = res.data.main.temp_min
        this.nextDayTempMax = res.data.main.temp_max
        this.nextDayPressure = res.data.main.pressure
        this.nextDayHumidity = res.data.main.humidity
        this.nextDaySpeed = res.data.wind.speed
        this.nextDayName = res.data.name
        this.nextWeatherDescription = res.data.weather[0].description
      } catch (err) {
        console.log(err.message)
      }
    },

    async getFiveDayForecast() {
      try {
        const res = await this.$http.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=Taipei&units=metric&lang=zh_tw&appid=${this.apiKey}`
        )
        this.forecastData = res.data.list
        let j = 1
        for (let i = 0; i < this.forecastData.length; i++) {
          if (this.forecastData[i].dt_txt.includes('00:00:00')) {
            this.forecastDays['day' + [j]] = this.forecastData[i].dt_txt
            j++
          }
        }
      } catch (err) {
        alert(err.message)
      }
    },

    convertTimeStamp2LocalTime(timeStamp) {
      const date = new Date(timeStamp * 1000)
      return date.toLocaleString('zh-Tw', {
        timeZone: 'Asia/Taipei',
      })
    },

    convert2WeatherEmoji(weather) {
      return this.weatherEmoji(weather)
    },
  },

  mounted() {
    this.getCurrentWeather()
    this.getNextDayForecast()
    this.getFiveDayForecast()
  },
}
</script>