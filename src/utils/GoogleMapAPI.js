const API_KEY=process.env.VUE_APP_GOOGLE_MAP_API;
const CALLBACK_NAME = 'googleMap';
let inititalized = !!window.google;

let resolvePromise;
let rejectPromise;

const initPromise = new Promise((resolve, reject) => {
    resolvePromise = resolve;
    rejectPromise = reject;
})

function GoogleMapAPI () {
    if (inititalized) return initPromise;

    inititalized = true;

    window[CALLBACK_NAME] = () => {
        resolvePromise(window?.google);
    }

    let script = document.createElement('script');
    script.async = true;
    script.defer = true;
    script.src = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}&callback=${CALLBACK_NAME}`;
    script.onerror = rejectPromise;
    document.querySelector('head').appendChild(script);
    return initPromise;
}

export default GoogleMapAPI;