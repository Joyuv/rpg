function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getInner(){
    await sleep(10000)
    const forca = document.getElementsByName("forca");
    console.log(forca.value);
}
getInner