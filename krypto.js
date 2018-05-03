const key = "938542d8521b4d5095c144e40b8312d4"

/* Example url: https://newsapi.org/v2/top-headlines?q=bitcoin */
let url = `https://newsapi.org/v2/everything?q=bitcoin&language=en&sortBy=popularity&apiKey=${key}`

const recievedNews = (newsdata) => {
    const articlesDiv = document.querySelector(".articles")
    //articles is an object in the JSON.



    newsdata.articles.forEach((article, index) => {
      //Here we create HTML elements that we add to our HTML file

if (index <3){

      const div = document.createElement("div")
      div.className = "news"
      div.innerHTML = `<h2>${article.title}</h2>`

      articlesDiv.appendChild(div)

      const img = document.createElement("img")
      img.src = article.urlToImage
      div.appendChild(img)

      const description = document.createElement("p")
      description.innerHTML = article.description
      div.appendChild(description)

      const link= document.createElement("a")
      link.href = article.url
      link.button = "läs mer"
      div.appendChild(link)

      const source= document.createElement("h5")
      source.innerHTML = article.source.name
      div.appendChild(source)

}
    })
}


//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews)
