const ua = detect.parse(navigator.userAgent)
const buttonIg = document.querySelector('.Instagram')
const buttonFb = document.querySelector('.Facebook')


if(ua.device!==null){

    if(ua.device.family==='Android'){
    buttonIg.href = 'instagram://user?username=paca___shop'    
    buttonFb.href = 'fb://page/106213221522147'
    }

    if (ua.device.family === 'iPhone' || ua.device.family === 'iPad') {
    buttonIg.href = 'instagram://user?username=paca___shop'
    buttonFb.href = 'fb://page/?id=106213221522147'
}
}
