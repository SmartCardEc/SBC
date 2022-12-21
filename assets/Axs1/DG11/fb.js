const ua = detect.parse(navigator.userAgent)
const buttonFb = document.querySelector('.Facebook')
const buttonIg = document.querySelector('.Instagram')



if(ua.device!==null){

    if(ua.device.family==='Android'){   
    buttonIg.href = 'instagram://user?username=duragasec'
    buttonFb.href = 'fb://page/693235311042557'
    }

    if (ua.device.family === 'iPhone' || ua.device.family === 'iPad' || ua.device.family === 'Nexus 5') {
    buttonIg.href = 'instagram://user?username=duragasec'
    buttonFb.href = 'fb://page/?id=693235311042557'
}
}
