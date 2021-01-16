setTimeout(function checkurl() {
    var thecurrenturl = window.location.href;
    if (thecurrenturl == 'https://gbemim.github.io/Connect/filter/filter.html?error=user_cancelled_authorize&error_description=The+user+cancelled+the+authorization' || 'https://gbemim.github.io/Connect/filter/filter.html?error=user_cancelled_login&error_description=The+user+cancelled+LinkedIn+login') {

    // Simulate an HTTP redirect:
        console.log(thecurrenturl)
        window.location.href = 'https://gbemim.github.io/Connect/filter/noaccess.html';
    }
}, 8000);