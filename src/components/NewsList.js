/* global tw */
import {
  chunk,
  concat,
  drop,
  head,
  slice,
  tail,
  take,
  takeRight,
} from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { css } from 'react-emotion'
import { connect } from 'react-redux'
import { Location } from '@reach/router'

import { categories } from '../api'
import * as actions from '../actions'
import Clock from './Clock'
import Layout from './Layout'
import List from './List'
import News from './News'
import TopNews from './TopNews'
import PageNavigation from './PageNavigation'

class NewsList extends Component {
  componentDidMount() {
    this.fetchData()
  }

  componentDidUpdate(prevProps) {
    if (this.props.filter !== prevProps.filter) {
      this.fetchData()
    }
  }

  fetchData() {
    const { categories, fetchNews } = this.props

    fetchNews(categories)
  }

  render() {
    const { news } = this.props
    const firstPage = slice(0, 5, news)
    const nextPages = drop(6, news)
    const newNews = take(4, firstPage)
    const restNews = takeRight(2, firstPage)
    const firstNews = head(newNews)
    const topNews = tail(newNews)
    const chunkedNews = concat([restNews], chunk(4, nextPages))

    return (
      <Layout>
        <Location>
          {({ location }) => {
            const match = /\?(.+)[=](.+)\&?/gi
            const matchLocation = match.exec(location.search)
            const currentPageNews = matchLocation
              ? chunkedNews[matchLocation[2] - 1]
              : chunkedNews[0]
                        
            return (
              <>
                {((!matchLocation) || matchLocation[2] === '1') && (
                  <div
                    className={css`
                      ${tw(['flex', 'flex-col', 'md:flex-row', 'md:flex-no-wrap', 'w-full'])};
                    `}
                  >
                    <div
                      className={css`
                        ${tw(['w-full', 'md:w-3/5'])};
                      `}
                    >
                      <Clock
                        className={css`
                          ${tw([
                            'font-bold',
                            'mx-4',
                            'pb-4',
                            'pt-6',
                            'text-xl',
                          ])};
                          border-top: 3px solid #000000;
                        `}
                      />
                      {firstNews && (
                        <News
                          className={css`
                            ${tw(['flex', 'relative', 'w-full'])};
                            color: inherit;
                            height: 22rem;
                          `}
                          {...firstNews}
                        />
                      )}
                    </div>
                    <div
                      className={css`
                        ${tw(['w-full', 'md:w-2/5'])};
                      `}
                    >
                      {topNews && <TopNews news={topNews} />}
                    </div>
                  </div>
                )}
                {currentPageNews && <List news={currentPageNews} />}
                {chunkedNews.length > 1 && (
                  <PageNavigation {...{ chunkedNews }} {...{ matchLocation }} />
                )}
              </>
            )
          }}
        </Location>
      </Layout>
    )
  }
}

NewsList.propTypes = {
  categories: PropTypes.array.isRequired,
  news: PropTypes.array.isRequired,
  fetchNews: PropTypes.func.isRequired,
}

const mapStateToProps = state => {
  return {
    news: state.news.filter(x => x.urlToImage),
    categories,
  }
}

export default connect(
  mapStateToProps,
  actions
)(NewsList)
