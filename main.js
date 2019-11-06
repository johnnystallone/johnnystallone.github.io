document.getElementById('submitButton').addEventListener('click', function () {
    MessengerExtensions.requestCloseBrowser(function success() {
        console.log("Webview closing");
    }, function error(err) {
        console.log(err);
    });
});