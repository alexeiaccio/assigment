/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import { injectGlobal } from 'emotion'
import { css } from 'react-emotion'
import { connect } from 'react-redux'

import Filters from './Filters'
import Footer from './Footer'
import Jumbo from './Jumbo'
import Modal from './Modal'

import '../fonts/Helvetica/stylesheet.css'

injectGlobal`
  body {
    ${tw(['font-sans', 'm-0'])};
  }
  ul {
    ${tw(['px-2'])};
  }
  .react-datepicker-wrapper, 
  .react-datepicker__input-container {
    ${tw(['flex', 'flex-1'])};
  }
`

const Layout = ({ children, modal }) => (
  <>
    <div
      className={css`
        filter: blur(${modal && 10}px);
        transition: filter .2s ease-in-out .2s;
      `}
    >
      <Jumbo />
      <section
        className={css`
          ${tw(['mx-auto', 'max-w-xl'])};
        `}
      >
        <Filters />
        {children}
      </section>
      <Footer />
    </div>
    <Modal />
  </>
)

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  modal: PropTypes.bool.isRequired,
}

export default connect(({ modal }) => ({ modal }))(Layout)
