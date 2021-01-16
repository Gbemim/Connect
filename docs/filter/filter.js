function checkurl() {
    var thecurrenturl = window.location.href;
    if (thecurrenturl == "https://gbemim.github.io/Connect/filter/filter.html?error=user_cancelled_authorize&error_description=The+user+cancelled+the+authorization") {
        // Simulate an HTTP redirect:
        window.location.replace("https://gbemim.github.io/Connect/filter/noaccess.html");
    }
}