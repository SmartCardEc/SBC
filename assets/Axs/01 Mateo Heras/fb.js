const ua = detect.parse(navigator.userAgent)
const buttonFb = document.querySelector('.Facebook')


if(ua.device!==null){

    if(ua.device.family==='Android'){   
    buttonFb.href = 'fb://page/109165095124709'
    }

    if (ua.device.family === 'iPhone' || ua.device.family === 'iPad') {
    buttonFb.href = 'fb://page/?id=109165095124709'
}
}

const ua2 = detect.parse(navigator.userAgent)
const buttonIg = document.querySelector('.Instagram')


if(ua.device!==null){

    if (ua2.device.family === 'iPhone' || ua2.device.family === 'iPad'|| ua2.device.family === 'Android') {
    buttonIg.href = 'instagram://user?username=smartcard.ec'
}
}