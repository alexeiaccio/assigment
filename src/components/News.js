/* global tw */
import { startCase } from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'react-emotion'

import share from '../assets/share.svg'
import { ruCategories } from '../api'

const News = ({ publishedAt, title, category, url, urlToImage, className }) => {
  const date = new Date(publishedAt)
  const getBgColor = category => {
    switch (category) {
      case 'politic':
        return 'pink'
      case 'sport':
        return 'orange'
      case 'emergency':
        return 'teal'
      case 'science':
        return 'blue'
      case 'business':
        return 'green'
      default:
        return false
    }
  }

  return (
    <a {...{className}} href={url} target="_blank" rel="noreferrer noopener">
      <figure
        className={css`
          ${tw(['flex-1', 'm-0', 'p-4'])};
          &::after {
            ${tw(['absolute', 'm-4', 'pin'])};
            background-image: linear-gradient(
              to bottom,
              rgba(238, 238, 238, 0) 66%,
              rgba(0, 0, 0, 0.65) 100%
            );
            content: '';
          }
        `}
      >
        <img
          className={css`
            ${tw(['h-full', 'realtive', 'w-full'])};
            object-fit: cover;
          `}
          src={urlToImage}
          alt={title}
        />
        <figcaption
          className={css`
            ${tw([
              'absolute',
              'flex',
              'flex-col',
              'items-start',
              'justify-between',
              'p-8',
              'pin',
              'text-white',
              'z-30',
            ])};
          `}
        >
          <div
            className={css`
              ${tw(['bg-orange', 'px-3', 'py-1', 'rounded-sm', 'text-xxs'])};
              background-color: ${getBgColor(category)};
            `}
          >
            {startCase(ruCategories[category])}
          </div>
          <div
            className={css`
              ${tw(['mt-auto', 'text-xxs'])};
            `}
          >
            <span>
              {date.toLocaleString('ru-RU', {
                hour: 'numeric',
                minute: 'numeric',
              })}
              ,{' '}
            </span>
            <span>{date.toLocaleString('ru-RU', { day: 'numeric' })} </span>
            <span>{date.toLocaleString('ru-RU', { month: 'long' })} </span>
            <span>{date.toLocaleString('ru-RU', { year: 'numeric' })} </span>
          </div>
          <h3
            className={css`
              ${tw(['font-medium', 'm-0', 'mb-1', 'mt-2', 'text-base'])};
            `}
          >
            {title}
          </h3>
        </figcaption>
        <div
          className={css`
            ${tw([
              'absolute',
              'bg-center',
              'bg-contain',
              'bg-no-repeat',
              'inline-block',
              'm-8',
              'pin-r',
              'pin-t',
            ])};
            background-image: url(${share});
            height: 12px;
            width: 12px;
          `}
        />
      </figure>
    </a>
  )
}

News.propTypes = {
  category: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  urlToImage: PropTypes.string.isRequired,
}

export default News
