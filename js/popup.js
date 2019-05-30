
function sayHello() {
    var message = document.createTextNode("Hello World!");
    var out = document.createElement("div");
    out.appendChild(message);
    document.body.appendChild(out);

    chrome.tabs.query(
        {
            active: true,
            lastFocusedWindow: true
        },
        function (tabs) {
            let currentTabURL = tabs[0].url;
            currentTabID = tabs[0].id;
            window.alert(JSON.stringify({
                ID: currentTabID,
                URL: currentTabURL
            }));
            document.title = document.title + "-" + currentTabURL;
        }
    );
}
window.onload = sayHello;