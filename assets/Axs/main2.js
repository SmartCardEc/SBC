const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.Facebook')



if(ua.device!==null){

    if(ua.device.family==='Android'){
    button.href = 'fb://page/106213221522147'
    }

    if (ua.device.family === 'iPhone' || ua.device.family === 'iPad') {
    button.href = 'fb://page/?id=106213221522147'
}
}
