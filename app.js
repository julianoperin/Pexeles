const auth = '563492ad6f91700001000001201ea34247464290beba6e6f93b1ee3a';
const gallery = document.querySelector(".gallery");
const searchInput = document.querySelector(".search-input");
const submitButton = document.querySelector(".submit-btn");

let searchValue;

function curatedPhotos() {
    const dataFetch = await fetch("https://api.pexels.com/v1/curated?per_page=1", {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: auth
        }
    }
    );
    const data = await dataFetch.json();
    console.log(data);
}


