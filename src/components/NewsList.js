import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { connect } from 'react-redux'

import * as actions from '../actions'
import { getVisibleNews, getIsFetching } from '../reducers'
import List from './List'

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
    const { filter, fetchNews } = this.props
    fetchNews(filter)
  }

  render() {
    const { isFetching, news } = this.props
    if (isFetching && !news.length) {
      return <p>Loading...</p>
    }

    return <List news={news} />
  }
}

NewsList.propTypes = {
  filter: PropTypes.oneOf(['all']).isRequired,
  news: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  fetchNews: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  const filter = 'all'
  return {
    isFetching: getIsFetching(state, filter),
    news: getVisibleNews(state, filter),
    filter,
  }
}

export default connect(
    mapStateToProps,
    actions
  )(NewsList)
