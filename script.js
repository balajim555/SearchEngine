const accessKey = "eQ4ctiyM1Nmm57ATByX1xHkT0-nE8lgeewFr3cOlePg"


const searchform = document.getElementById("search-form")
const searchbox = document.getElementById("searchbox")
const searchresult = document.getElementById("search-result")
const showMoreBtn = document.getElementById("show-more-btn")


let keyword = ""
let page = 1

async function searchimage(){
    keyword = searchbox.value
    let url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`

    const response = await fetch(url)
    const data = await response.json()

    if(page === 1){
        searchresult.innerHTML = ""
    }
    
    const results = data.results
    results.map((result)=>{
        const image = document.createElement("img")
        image.src = result.urls.small;
        const imagelink = document.createElement("a")
        imagelink.href = result.links.html
        imagelink.target="_blank"

        imagelink.appendChild(image)
        searchresult.appendChild(imagelink)
    })

    showMoreBtn.style.display = "block"
}

searchform.addEventListener("submit",(e)=>{
    e.preventDefault();
    page = 1
    searchimage()

})
showMoreBtn.addEventListener("click", ()=>{
    page++
    searchimage()
})