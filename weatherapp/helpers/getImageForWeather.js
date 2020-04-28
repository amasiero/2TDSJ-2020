const images = {
    'Clear': require('../assets/clear.png'),
    'Hail': require('../assets/thunder.png'),
    'Heavy Cloud': require('../assets/heavy-cloud.png'),
    'Light Cloud': require('../assets/light-cloud.png'),
    'Heavy Rain': require('../assets/light-rain.png'),
    'Light Rain': require('../assets/light-rain.png'),
    'Showers': require('../assets/thunder.png'),
    'Sleet': require('../assets/snow.png'),
    'Snow': require('../assets/snow.png'),
    'Thunder': require('../assets/thunder.png')
}

export default weather => images[weather];