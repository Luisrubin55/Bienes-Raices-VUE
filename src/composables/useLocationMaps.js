import { ref } from 'vue'

export default function useLocationMap(){
    
    const zoom = ref(15)
    const center = ref([19.3461495,-99.2113895])

    function pin(e) {
        const market = e.target.getLatLng()
        center.value = [market.lat, market.lng]
    }


    return {
        zoom,
        center,
        pin
    }
}