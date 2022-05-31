export interface ShowProps {
  id: number
  url: string
  name: string
  type: string
  language: string
  genres: string[]
  status: string
  runtime: string
  averageRuntime: unknown
  premiered: string
  ended: string
  officialSite: string
  schedule: {
    time: string
    days: string[]
  }
  rating: { average: any }
  weight: number
  network: {
    id: number
    name: string
    country: {
      name: string
      code: string
      timezone: string
    }
    officialSite: string
  }
  webChannel: string
  dvdCountry: string
  externals: {
    tvrage: unknown
    thetvdb: number
    imdb: string
  }
  image: {
    medium: string
    original: string
  }
  summary: string
  updated: number
  _links: {
    self: {
      href: string
    }
    previousepisode: {
      href: string
    }
  }
}