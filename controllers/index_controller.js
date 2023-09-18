const NewsAPI = require("newsapi");
API_KEY = 'a83b17f552a3470d98ad26b2bac2beea'

const newsapi = new NewsAPI(`${API_KEY}`);

const getTopHeadlinesof = (field) => {
  return newsapi.v2.topHeadlines({
    category: field,
    language: "en",
  });
};
const getEverything = (query) => {
  return newsapi.v2.everything({
    q: query,
    language: "en",
  });
};

// Index page headlines
const HeadLineGet = async (req, res) => {
    try {
        const agricultureNews = await getEverything('agriculture') 
        const marketNews = await getEverything('market') 

        res.render('agrinews/index', {
          agriculture: agricultureNews.articles.slice(0, 10),
          market: marketNews.articles.slice(0, 10),
        })
      } catch (err) {
          console.log(err);
          res.render('agrinews/index', {
            agriculture: null,
            market: null,
        })
    }
}

// Search post page
const SearchPost = async (req, res) => {
  let search = req.body.search
  try {
    const searchResult = await getEverything(search)
    res.render('search', {
      articles: searchResult.articles.slice(1,15)
    })
  } catch (err) {
    res.render('search', {
        articles: null
      })
      console.log(err)
  }
}

module.exports = {
    HeadLineGet,
    SearchPost
}
