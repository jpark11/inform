chrome.tabs.query({
    active: true,
    currentWindow: true
}, function(tabs) {
    var tabURL = tabs[0].url;
    tabURL = tabURL.replace('http://','').replace('https://','').split(/[/?#]/)[0];
    // match tabURL with domain column in database to get ID in server.js file?
    // serve up that results page and send that results page to popup.html
    console.log(tabURL);
});