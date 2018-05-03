url = `https://newsapi.org/v2/everything?q=dog&language=en&sortBy=publishedAt&apiKey=${key}`

const recievedNews4 = (newsdata) => {
    const articlesDiv = document.querySelector(".marquee")
    //articles is an object in the JSON.



    newsdata.articles.forEach((article, index) => {
      //Here we create HTML elements that we add to our HTML file

if (index <8){

      const div = document.createElement("span")

      div.innerHTML = article.title + " || "
      articlesDiv.appendChild(div)

}
    })
}


//Fetch sends a request to the API.
//Promise makes it possible to run this in the background. När vi får APIet då går den vidare och skickar tillbaka JSON.

fetch(url)
  .then(response => response.json())
  .then(recievedNews4)
