function load_us_page( tab ) {
		var newUrl = tab.url.replace("amazon.com.au", "amazon.com")

		chrome.tabs.update(tab.Id, {url: newUrl});
		return;
}

chrome.browserAction.onClicked.addListener(load_us_page)
