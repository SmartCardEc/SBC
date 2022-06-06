const ua = detect.parse(navigator.userAgent)
const button = document.querySelector('.btn')

if (ua.device.family === 'iPhone' || ua.device.family === 'iPad') {
  button.textContent = 'Facebook iOS'
}
