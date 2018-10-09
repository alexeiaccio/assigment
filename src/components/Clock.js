import { startCase } from 'lodash'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

class Clock extends Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date }
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 15000)
  }

  componentWillUnmount() {
    clearInterval(this.timerID)
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div className={this.props.className}>
        <span>{this.state.date.toLocaleString('ru-RU', { day: 'numeric' })} </span>
        <span>{startCase(this.state.date.toLocaleString('ru-RU', { month: 'long' }).replace('ь', 'я'))} </span>
        <span>{this.state.date.toLocaleString('ru-RU', { year: 'numeric' })}, </span>
        <span>{startCase(this.state.date.toLocaleString('ru-RU', { weekday: 'long' }))}, </span>
        <span>{this.state.date.toLocaleString('ru-RU', { hour: 'numeric', minute: 'numeric' })}</span>
      </div>
    )
  }
}

Clock.propTypes = {
  className: PropTypes.string
}

export default Clock
