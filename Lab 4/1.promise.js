function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Data fetched!");
        }, 2000);
    });
}

fetchData()
    .then((result) => {
        console.log(result); // "Data fetched!"
        return "Processing data...";
    })
    .then((nextStep) => {
        console.log(nextStep); // "Processing data..."
    })
    .catch((error) => {
        console.log("Error:", error);
    });