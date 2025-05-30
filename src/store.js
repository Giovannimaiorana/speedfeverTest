import { reactive } from "vue"

export const store = reactive({
    loading: true,
    sliderElements: {

        'Live Telemetry': {
            'description': 'Un widget che ti aiuta a tenere traccia dei tuoi input.',
            'descriptionEn':'TA widget that helps you track inputs..',
            'img': 'TELEMETRYLIVE 1.svg',
            'index':'1'
        },
        'Traction Circle': {
            'description': `Il diagramma delle accelerazioni ti aiuta a capire i limiti: della macchina, del setup e di te stesso.`,
            'descriptionEn':'The gravitational acceleration diagram helps you understand the limits: of the car, the setup, and yourself.',
            'img': 'TRACTIONCIRCLE.svg',
            'index':'2'
        },
        'Sector Time': {
            'description': 'Visualizza il tuo tempo giro diviso in tre settori.',
            'descriptionEn':'View your lap time divided into three sectors.',
            'img': 'sectorTimeTwo.svg',
            'index':'3'
        },
        'Brake Wear': {
            'description': 'Ottimizza la gestione dei freni durante la stint monitorando usura e tempo di utilizzo.',
            'descriptionEn':'Optimize brake management during your stints by monitoring wear and usage time.',
            'img': 'BRAKEWEAR3.svg',
            'index':'4'
        },
        'Live timing': {
            'description': 'Questo widget visualizza i dati telemetrici live: Brake, Clutch, throttle, Rpms, Gears, Steering.',
            'descriptionEn':'This widget displays live telemetry data: Brake, Clutch, Throttle, RPMs, Gears, Steering',
            'img': 'livetimeTwo.svg',
            'index':'5'
        },
        'Locking Sensor': {
            'description': 'Individua le perdite di grip causate da bloccaggi e micro-bloccaggi.',
            'descriptionEn':'Identify grip losses caused by lockups and micro-lockups.',
            'img': 'Lockingsensoraction.svg',
            'index':'6'
        },
        'Fuel Calculator': {
            'description': 'Calcola il carburante necessario per finire la gara o la tua stint.',
            'descriptionEn':'Calculate the fuel needed to finish the race or your stint.',
            'img': 'Fuelcalculator.svg',
            'index':'7'
        },
        'Delta Time': {
            'description': 'Capire dove guadagni o perdi tempo è fondamentale; il delta time serve proprio a questo.',
            'descriptionEn':'Seeing where you gain or lose time is essential; the delta time is exactly for this.',
            'img': 'Deltatime2positive.svg',
            'index':'8'
        }
    },
})
