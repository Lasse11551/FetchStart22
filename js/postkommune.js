console.log("jeg er i post Kommune");

const pbPostKommune = document.getElementById("pbPostKommune");

const inpKode = document.getElementById("inpKode");
const inpName = document.getElementById("inpName");
const inpHref = document.getElementById("inpHref");
const inpRegionKode = document.getElementById("inpRegionKode");

const KommuneUrl = "http://localhost:8080/kommune";

function getKommune() {
    const Kommune = {};
    Kommune.kode = inpKode.value;
    Kommune.navn = inpName.value;
    Kommune.href = inpHref.value;
    Kommune.region = {}
    Kommune.region.kode = inpRegionKode.value;

    console.log(Kommune);
    return Kommune;
}

async function postKommune() {
    const Kommune = getKommune()
    const res = await postObjectAsJson(KommuneUrl, Kommune, "POST")
    if (res.ok) {
        alert("Kommune saved")
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

function actionPostKommune() {
    postKommune();
}

pbPostKommune.addEventListener('click', actionPostKommune);