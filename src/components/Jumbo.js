/* global tw */
import React from 'react'
import styled, { css } from 'react-emotion'

import Clock from './Clock'
import backImg from '../assets/bitmap_2.jpg'
import ModalToggler from './ModalToggler'

const Back = styled('div')`
  ${tw([
    'absolute',
    'bg-black',
    'bg-center',
    'bg-cover',
    'bg-no-repeat',
    'pin',
  ])};
  background-image: url(${backImg});
`

const Jumbo = () => {
  return (
    <div
      className={css`
        ${tw(['relative', 'overflow-hidden'])};
      `}
    >
      <Back />
      <div
        className={css`
          ${tw([
            'flex',
            'flex-col',
            'items-center',
            'justify-center',
            'relative',
            'text-white',
            'w-full',
          ])};
          padding: 4rem 0;
          @media (min-width: 576px) {
            padding: 10rem 0;
          }
        `}
      >
        <h1
          className={css`
            ${tw(['text-center', 'm-0', 'uppercase'])};
            font-size: 36px;
            font-weight: bold;
            margin-top: 4.5rem;
            @media (min-width: 576px) {
              margin-top: 9rem;
            }
          `}
        >
          МИРОВЫЕ НОВОСТИ
        </h1>
        <Clock
          className={css`
            ${tw(['text-center', 'uppercase'])};
            font-size: 11px;
            font-weight: 500;
            margin-top: 1rem;
          `}
        />
        <ModalToggler
          className={css`
            ${tw(['px-0', 'text-white', 'text-xxs', 'uppercase'])};
            border-bottom: 1px solid white;
            margin-top: 4rem;
            padding-bottom: 0.75rem;
            @media (min-width: 576px) {
              margin-top: 8rem;
            }
          `}
        >
          <>
            <span>ДОБАВИТЬ НОВОСТЬ</span>
            <span
              className={css`
                ${tw(['ml-8'])};
              `}
            >
              +
            </span>
          </>
        </ModalToggler>
      </div>
    </div>
  )
}

export default Jumbo
