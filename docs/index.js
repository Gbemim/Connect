var myLink = document.getElementById('loginp');

myLink.onclick = function myFunction() {
    window.location.href='https://www.linkedin.com/oauth/v2/authorization?response_type=code&scope=r_liteprofile&client_id=78u164wa90o3qt&redirect_uri=https%3A%2F%2Fwww.facebook.com/';
}

loginFunction()