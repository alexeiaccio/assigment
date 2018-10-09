import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chunk } from 'lodash/fp'
import { Location } from '@reach/router'

import { categories } from '../api'
import Layout from './Layout'
import List from './List'
import PageNavigation from './PageNavigation'

class CategoryNewsList extends Component {
  render() {
    const { news, filter } = this.props
    const chunkedNews = chunk(
      4,
      news.filter(({ category }) => category === filter)
    )

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
                {currentPageNews && <List news={currentPageNews} />}
                {chunkedNews.length > 1 && (
                  <PageNavigation {...{chunkedNews}} {...{matchLocation}} />
                )}
              </>
            )
          }}
        </Location>
      </Layout>
    )
  }
}

CategoryNewsList.propTypes = {
  filter: PropTypes.string.isRequired,
  news: PropTypes.array.isRequired,
}

const mapStateToProps = state => {
  return {
    news: state.news.filter(x => x.urlToImage),
    categories,
  }
}

export default connect(
  mapStateToProps
)(CategoryNewsList)
