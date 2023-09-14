const inpUrl = document.getElementById("inpUrl")
const textArea = document.getElementById("txt")
const pbFetch = document.getElementById("pbFetchUrl")

function fetchAnyUrl(url) {
    console.log("inside fetch url=" + url)
    return  fetch(url).then(response => response.text());
}

async function actionFetchUrl(btn) {
    const url = inpUrl.value;
    console.log(url);
    const jsonOutput = await fetchAnyUrl(url);
    console.log(jsonOutput);
    textArea.textContent = jsonOutput;
}

pbFetch.addEventListener('click', actionFetchUrl)