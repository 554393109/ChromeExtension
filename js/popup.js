
function init() {
    chrome.tabs.query(
        {
            active: true,
            lastFocusedWindow: true
        },
        function (tabs) {
            let currentTabURL = tabs[0].url;
            currentTabID = tabs[0].id;
            let info = JSON.stringify({
                ID: currentTabID,
                URL: currentTabURL
            });

            var message = document.createTextNode(info);
            var out = document.createElement("div");
            out.appendChild(message);
            document.body.appendChild(out);

            document.title = document.title + "-" + currentTabURL;
        }
    );
}
window.onload = init;