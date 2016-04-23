chrome.extension.sendMessage({}, function (response) {
	var readyStateCheckInterval = setInterval(function () {

		if (document.readyState === "complete") {
			var lineNodes = document.querySelectorAll('.lines-added,.lines-removed');
			if (lineNodes.length !== 0) {
				clearInterval(readyStateCheckInterval);
				var netLinesOfCode = Array.from(lineNodes).map(e=>e.innerText).reduce((r, e)=>r += +e, 0);
				console.log(netLinesOfCode);

				document.getElementById('diff-tab-preload').appendChild(document
					.createRange()
					.createContextualFragment(`<h1>Net Lines: ${netLinesOfCode}</h1>`));

			}

		}
	}, 10);
});