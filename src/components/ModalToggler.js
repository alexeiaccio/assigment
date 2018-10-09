/* global tw */
import PropTypes from 'prop-types'
import React from 'react'
import { connect } from 'react-redux'
import styled from 'react-emotion'

import { toggleModal } from '../actions'

const Button = styled('button')`
  ${tw(['bg-transparent', 'border-none', 'cursor-pointer'])};
  outline: 0 !important;
`

const ModalToggler = ({ children, dispatch, ...props }) => (
  <Button
    onClick={() => {
      dispatch(toggleModal())
    }}
    {...props}
  >
    {children}
  </Button>
)

ModalToggler.propTypes = {
  children: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
}

export default connect()(ModalToggler)
