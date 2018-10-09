/* global tw */
import PropTypes from 'prop-types'
import React, { createRef, Component } from 'react'
import { connect } from 'react-redux'
import { v4 } from 'node-uuid'
import { startCase, delay } from 'lodash/fp'
import { css } from 'react-emotion'
import DatePicker from 'react-datepicker'

import { addNews, updateNewNewsAction, toggleModal } from '../actions'
import close from '../assets/close-button.svg'
import { categories, ruCategories } from '../api'
import 'react-datepicker/dist/react-datepicker.css'

const Input = css`
  ${tw([
    'mb-4',
    'px-6',
    'py-4',
    'border',
    'border-solid',
    'border-grey-light',
    'focus:border-black',
    'text-xxs',
    'text-grey-light',
    'focus:text-black',
  ])};
  outline: 0 !important;
  ::placeholder {
    ${tw(['text-grey-light'])};
  }
`

class AddNews extends Component {
  constructor(props) {
    super(props)
    this.category = createRef()
    this.file = createRef()
    this.dateChange = this.dateChange.bind(this)
    this.submit = this.submit.bind(this)
    this.updateText = this.updateText.bind(this)
    this.updateFile = this.updateFile.bind(this)
    this.updateCategory = this.updateCategory.bind(this)
    this.state = {
      title: this.props.newNews.title || '',
    }
  }

  dateChange(publishedAt) {
    const { newNews, dispatch } = this.props
    dispatch(updateNewNewsAction({ ...newNews, publishedAt: publishedAt }))
  }

  updateCategory() {
    const { newNews, dispatch } = this.props
    dispatch(
      updateNewNewsAction({ ...newNews, category: this.category.current.value })
    )
  }

  updateText({ target }) {
    const { newNews, dispatch } = this.props
    dispatch(
      updateNewNewsAction({
        ...newNews,
        title: target.value,
      })
    )
    this.setState({
      title: target.value,
    })
  }

  updateFile(value) {
    if (value) {
      const { newNews, dispatch } = this.props
      dispatch(
        updateNewNewsAction({
          ...newNews,
          file: this.file.current.files[0].name,
        })
      )
    } else {
      this.file.current.value = ''
      const { newNews, dispatch } = this.props
      dispatch(updateNewNewsAction({ ...newNews, file: '' }))
    }
  }

  submit(e) {
    e.preventDefault()
    const { newNews, dispatch } = this.props
    if (
      !newNews.title ||
      !newNews.publishedAt ||
      !newNews.category ||
      !newNews.file
    ) {
      return
    }
    dispatch(addNews(newNews))
    delay(600, () => {
      dispatch(toggleModal())
      dispatch(updateNewNewsAction())
    })
  }

  render() {
    const { className, newNews } = this.props
    const {} = newNews
    return (
      <div {...{ className }}>
        <form
          className={css`
            ${tw(['flex', 'flex-col'])};
          `}
          onSubmit={this.submit}
        >
          <input
            className={css`
              ${Input};
              ${newNews.title && tw(['border-black', 'text-black'])};
            `}
            onChange={this.updateText}
            placeholder="Название"
            type="text"
            value={this.state.title}
          />
          <DatePicker
            className={css`
              ${Input};
              ${tw(['w-full'])};
              ${newNews.publishedAt && tw(['border-black', 'text-black'])};
            `}
            selected={newNews.publishedAt}
            onChange={this.dateChange}
            showTimeSelect
            timeFormat="HH:mm"
            timeIntervals={15}
            dateFormat="LLL"
            timeCaption="time"
            locale="ru-ru"
            placeholderText="Выберите дату"
          />
          <select
            className={css`
              ${Input};
              ${newNews.category && tw(['border-black', 'text-black'])};
            `}
            onChange={this.updateCategory}
            ref={this.category}
            value={newNews.category}
          >
            <option disabled>Категория</option>
            {categories.map(category => (
              <option key={v4()} value={category}>
                {startCase(ruCategories[category])}
              </option>
            ))}
          </select>
          <div
            className={css`
              ${Input};
              ${tw(['relative'])};
              ${newNews.file && tw(['border-black', 'text-black'])};
            `}
          >
            <span>
              {newNews.file ? newNews.file : 'Выберите файл'}
            </span>
            <input
              className={css`
                ${tw([
                  'absolute',
                  'cursor-pointer',
                  'opacity-0',
                  'pin',
                  'w-full',
                ])};
              `}
              onChange={this.updateFile}
              ref={this.file}
              type="file"
            />
            {newNews.file && (
              <button
                className={css`
                  ${tw([
                    'absolute',
                    'bg-center',
                    'bg-contain',
                    'bg-no-repeat',
                    'bg-transparent',
                    'border-none',
                    'cursor-pointer',
                    'm-4',
                    'pin-r',
                    'pin-t',
                  ])};
                  background-image: url(${close});
                  height: 12px;
                  outline: 0 !important;
                  width: 12px;
                `}
                onClick={() => this.updateFile()}
              />
            )}
          </div>
          <button
            className={css`
              ${tw([
                'bg-white',
                'border-none',
                'cursor-pointer',
                'font-medium',
                'py-4',
                'uppercase',
              ])};
              outline: 0 !important;
              &:disabled {
                ${tw(['text-grey-light'])};
                cursor: not-allowed;
              }
            `}
            disabled={
              !newNews.title ||
              !newNews.publishedAt ||
              !newNews.category ||
              !newNews.file
            }
            type="submit"
          >
            Отправить
          </button>
        </form>
      </div>
    )
  }
}

AddNews.propTypes = {
  //dispatch: PropTypes.func.isRequired,
  className: PropTypes.string,
}

export default connect(({ newNews }) => ({ newNews }))(AddNews)
