const get_winsize = () => {
    var sW=window.innerWidth
    var sH=window.innerHeight
    const getWinsize = document.querySelector('#winsize')
    getWinsize.innerText = 'ウィンドウサイズ：横幅 = ' + sW + ' / 高さ = ' + sH
}
