/* global tw */
import React from 'react'
import styled, { css } from 'react-emotion'

import appStore from '../assets/app-store.png'

const Link = styled('span')`
  ${tw(['mb-2', 'md:mb-0', 'md:mr-2'])};
`

const Footer = () => (
  <footer
    className={css`
      ${tw(['bg-black', 'py-6', 'text-white', 'w-full'])};
    `}
  >
    <div
      className={css`
        ${tw(['mx-auto', 'max-w-xl', 'px-6'])};
        box-sizing: border-box;
      `}
    >
      <div
        className={css`
          ${tw(['flex', 'flex-row', 'justify-between'])};
          margin: 3rem 0 4.5rem 0;
        `}
      >
        <form
          className={css`
            ${tw(['flex-1', 'mr-8'])};
          `}
        >
          <input
            className={css`
              ${tw([
                'bg-transparent',
                'border-none',
                'py-2',
                'px-0',
                'text-sm',
                'w-full',
              ])};
              border-bottom: 1px solid #d8d8d8;
              max-width: 430px;
              &,
              &:active,
              &:focus {
                outline: 0;
              }
            `}
            type="search"
            placeholder="Поиск"
          />
        </form>
        <img
          src={appStore}
          alt="Установите приложение в App Strore"
          height={28}
          width={84}
        />
      </div>
      <div
        className={css`
          ${tw(['flex', 'flex-row', 'items-end', 'justify-between', 'text-xxs'])};
        `}
      >
        <nav
          className={css`
            ${tw(['flex', 'flex-col', 'md:flex-row'])};
          `}
        >
          <Link>Редакция</Link>
          <Link>Реклама</Link>
          <Link>Пресс-релизы</Link>
          <Link>Техподдержка</Link>
          <Link>Спецпроекты</Link>
          <Link>Вакансии</Link>
          <Link>RSS</Link>
        </nav>
        <div>© 1999–2018 ООО «Мировые новости»</div>
      </div>
    </div>
  </footer>
)

export default Footer
