import { v4 } from 'node-uuid'

const db = {
  news: [
    {
      id: v4(),
      title: 'Poop',
      date: 1538919401000,
      category: 'Poop',
      posted: true,
    },
    {
      id: v4(),
      title: 'Other news',
      date: 1538919801000,
      category: 'Poop',
      posted: true,
    },
  ],
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

export const fetchNews = filter =>
  delay(500).then(() => {
    switch (filter) {
      case 'all':
        return db.news
      default:
        throw new Error(`Unknown filter: ${filter}`)
    }
  })
