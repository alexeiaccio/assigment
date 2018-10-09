/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import { css } from 'react-emotion'
import { v4 } from 'node-uuid'

import eye from '../assets/eye.svg'

const TopNews = ({ news }) => (
  <div
    className={css`
      ${tw(['flex', 'flex-col', 'h-full'])};
    `}
  >
    <h2
      className={css`
        ${tw(['font-bold', 'my-0', 'mx-4', 'pb-4', 'pt-6', 'text-xl'])};
        border-top: 3px solid #000000;
      `}
    >
      Главные новости
    </h2>
    <div
      className={css`
        ${tw([
          'flex',
          'flex-col',
          'justify-between',
          'flex-1',
          'pb-4',
          'px-4',
        ])};
      `}
    >
      {news.map(news => {
        const { publishedAt, title, url } = news
        const date = new Date(publishedAt)
        return (
          <div key={v4()}>
            <a
              key={v4()}
              className={css`
                ${tw(['no-underline'])};
                color: inherit;
              `}
              href={url}
              target="_blank"
              rel="noreferrer noopener"
            >
              <h3
                key={v4()}
                className={css`
                  ${tw(['font-medium', 'm-0', 'mb-1', 'mt-4', 'text-base'])};
                `}
              >
                {title}
              </h3>
            </a>
            <div
              key={v4()}
              className={css`
                ${tw(['py-2', 'text-xxs', 'text-grey-light'])};
                border-bottom: 1px solid #d8d8d8;
              `}
            >
              <span
                className={css`
                  ${tw([
                    'bg-center',
                    'bg-contain',
                    'bg-no-repeat',
                    'inline-block',
                    'mr-1',
                  ])};
                  background-image: url(${eye});
                  height: 7px;
                  width: 12px;
                `}
              />
              <span
                key={v4()}
                className={css`
                  ${tw(['mr-8'])};
                `}
              >
                {Math.floor(Math.random() * 999)}
              </span>
              <span key={v4()}>
                {date.toLocaleString('ru-RU', {
                  hour: 'numeric',
                  minute: 'numeric',
                })}
                ,{' '}
              </span>
              <span key={v4()}>
                {date.toLocaleString('ru-RU', { day: 'numeric' })}{' '}
              </span>
              <span key={v4()}>
                {date
                  .toLocaleString('ru-RU', { month: 'long' })
                  .replace('ь', 'я')}{' '}
              </span>
              <span key={v4()}>
                {date.toLocaleString('ru-RU', { year: 'numeric' })}{' '}
              </span>
            </div>
          </div>
        )
      })}
    </div>
  </div>
)

TopNews.propTypes = {
  news: PropTypes.arrayOf(
    PropTypes.shape({
      publishedAt: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
}

export default TopNews
