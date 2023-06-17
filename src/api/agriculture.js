import {get} from '@/utils/request'
export default {
    getTemperature:()=>get('/url/agriculture/temperatures'),
    getAirHumidity:()=>get('/url/agriculture/humidities'),
    getLightIntensity:()=>get('/url/agriculture/intensities'),
    getSoilMoisture:()=>get('/url/agriculture/moistures'),
    getSoilPh:()=>get('/url/agriculture/phs')
}