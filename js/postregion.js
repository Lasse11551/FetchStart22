console.log("jeg er i post region");

const pbPostRegion = document.getElementById("pbPostRegion");
const pbPutRegion = document.getElementById("pbPutRegion");
const pbDeleteRegion = document.getElementById("pbDeleteRegion");

const inpKode = document.getElementById("inpKode");
const inpName = document.getElementById("inpName");
const inpHref = document.getElementById("inpHref");

const regionUrl = "http://localhost:8080/region";

function getRegion() {
    const region = {};
    region.kode = inpKode.value;
    region.navn = inpName.value;
    region.href = inpHref.value;
    console.log(region);
    return region;
}

async function postRegion() {
    const region = getRegion()
    const res = await postObjectAsJson(regionUrl, region, "POST")
    if (res.ok) {
        alert("Region saved")
    } else if(res.status === 404){
        alert("Region not found");
    } else {
        alert("An error occurred");
    }
}

async function putRegion() {
    const regionToUpdate = getRegion();
    const regionKode = regionToUpdate.kode;

    let putRegionUrl = `http://localhost:8080/region/${regionKode}`;
    const res = await postObjectAsJson(putRegionUrl, regionToUpdate, "PUT")

    if(res.ok) {
        alert("Region updated");
    } else if(res.status === 404){
        alert("Region not found");
    } else {
        alert("An error occurred");
    }
}

async function deleteRegion() {
    let regionKode = inpKode.value;

    let url = `http://localhost:8080/region/${regionKode}`;
    const res = await deleteRequest(url);

    if(res.ok) {
        alert("Region deleted");
    } else if(res.status ===404){
        alert("Region not found")
    } else {
        alert("An error occurred")
    }
}

async function postObjectAsJson(url, object, httpVerbum) {
    const objectAsJsonString = JSON.stringify(object)
    console.log(objectAsJsonString)
    const fetchOptions = {
        method: httpVerbum,
        headers: {
            "Content-Type": "application/json",
        },
        body: objectAsJsonString
    }
    const response = await fetch(url, fetchOptions)
    return response
}

async function deleteRequest(url){
    const fetchOptions = {
        method: "DELETE",
    };

    const response = await fetch(url, fetchOptions);
    return response;
}


function actionPostRegion() {
    postRegion();
}

function actionPutRegion() {
    putRegion();
}

function actionDeleteRegion() {
    deleteRegion();
}

pbDeleteRegion.addEventListener('click', actionDeleteRegion);
pbPutRegion.addEventListener('click', actionPutRegion);
pbPostRegion.addEventListener('click', actionPostRegion);