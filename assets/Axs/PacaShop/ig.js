const ua = detect.parse(navigator.userAgent)

const buttonIg = document.querySelector('.Instagram')


if(ua.device!==null){

    if(ua.device.family==='Android'){
    buttonFb.href = 'instagram://user?username=paca___shop'
    }

    if (ua.device.family === 'iPhone' || ua.device.family === 'iPad') {
    buttonFb.href = 'instagram://user?username=paca___shop'

}
}
