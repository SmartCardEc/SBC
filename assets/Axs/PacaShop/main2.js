const ua = detect.parse(navigator.userAgent)

const buttonFb = document.querySelector('.Facebook')
const buttonIg = document.querySelector('.Facebook')


if(ua.device!==null){

    if(ua.device.family==='Android'){
    buttonFb.href = 'fb://page/106213221522147'
    buttonIg.href = 'instagram://user?username=paca___shop'
    }

    if (ua.device.family === 'iPhone' || ua.device.family === 'iPad') {
    buttonFb.href = 'fb://page/?id=106213221522147'
    buttonIg.href = 'instagram://user?username=paca___shop'
}
}
