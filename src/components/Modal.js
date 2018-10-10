/* global tw */
import React from 'react'
import { css } from 'react-emotion'
import AddNews from './AddNews'
import ModalToggler from './ModalToggler'
import posed, { PoseGroup } from 'react-pose'
import { connect } from 'react-redux'

import close from '../assets/close-button.svg'

const AnimatedModal = posed.div({
  enter: {
    y: 0,
    opacity: 1,
    delay: 300,
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 200 },
  },
})

const Shade = posed.div({
  enter: { opacity: 1 },
  exit: { opacity: 0 },
})

const Modal = ({ modal }) => (
  <PoseGroup>
    {modal && [
      <Shade key={'shade'}>
        <div
          className={css`
            ${tw(['fixed', 'pin'])};
            background-color: rgba(0, 0, 0, 0.25);
          `}
        />
      </Shade>,
      <AnimatedModal
        key={'modal'}
        className={css`
          ${tw([
            'fixed',
            'flex',
            'flex-col',
            'items-center',
            'justify-center',
            'pin',
            'z-50'
          ])};
        `}
      >
        <div
          className={css`
            ${tw(['bg-white', 'p-4', 'relative'])};
          `}
        >
          <div
            className={css`
              ${tw(['flex', 'flex-row', 'justify-between'])};
            `}
          >
            <ModalToggler
              className={css`
                ${tw(['ml-auto'])};
              `}
            >
              <div
                className={css`
                  ${tw(['bg-center', 'bg-contain', 'bg-no-repeat'])};
                  background-image: url(${close});
                  height: 24px;
                  width: 24px;
                `}
              />
            </ModalToggler>
          </div>
          <div
            className={css`
              ${tw(['px-4'])};
            `}
          >
            <h2
              className={css`
                ${tw(['font-bold', 'text-4xl', 'uppercase'])};
                margin: 4rem 0;
              `}
            >
              Добавить новость
            </h2>
            <AddNews />
          </div>
        </div>
      </AnimatedModal>,
    ]}
  </PoseGroup>
)

export default connect(({ modal }) => ({
  modal: modal,
}))(Modal)
