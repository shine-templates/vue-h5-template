export const getScanCodeSource = () => {
  const ua = window.navigator.userAgent.toLowerCase()
  if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    return 1
  }
  if (ua.match(/AlipayClient/i) == 'alipayclient') {
    return 2
  }
  return 3
}

export const getUrlParms = (url) => {
  var object = {}
  if (url.indexOf('?') != -1) {
    var str = url.substr(1)
    var strs = str.split('&')
    for (var i = 0; i < strs.length; i++) {
      object[strs[i].split('=')[0]] = strs[i].split('=')[1]
    }
  }
  return object
}
