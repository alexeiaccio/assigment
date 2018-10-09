import { v4 } from 'node-uuid'
import { sortBy, flatten, reverse } from 'lodash/fp'
import NewsAPI from 'newsapi'
import fakeDb from './fakeDb'

const today = new Date()
const yesterday = new Date(today.setDate(today.getDate() - 1))
export const categories = ['politic', 'sport', 'emergency', 'science', 'business']
export const ruCategories = {
  politic: 'политика',
  sport: 'спорт',
  emergency: 'происшествия',
  science: 'наука',
  business: 'бизнес',
}

const getNews = categories => {
    let result = []
    const newsapi = new NewsAPI('331b776f9e4b458688fd9ba66674e263')
    const response = categories.map(category =>
      newsapi.v2.everything({
        q: category,
        from: yesterday,
        to: today,
        language: 'ru',
        pageSize: 10,
        page: 1,
      }).then(res => result.concat(res.articles.map(x => ({ ...x, category, id: v4() }))))
    )
    return Promise.all(response)
  }

const delay = (ms) =>
  new Promise(resolve => setTimeout(resolve, ms))

export const fetchNews = filter => 
  getNews(filter).then(xs => reverse(sortBy(['publishedAt'], flatten(xs))))
  //delay(500).then(() => reverse(sortBy(['publishedAt'], fakeDb.news)))

export const addNews = addingNews =>
  delay(500).then(() => {
    const NewNews = {
      ...addingNews,
      id: v4()
    }
    fakeDb.news.push(NewNews)
    return getNews(categories).then(xs => reverse(sortBy(['publishedAt'], flatten(xs))))
  })
