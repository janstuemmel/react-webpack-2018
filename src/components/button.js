import React from 'react'
import PropTypes from 'prop-types';

import { buttonPrimary } from './button.scss'

const Button = ({ children, color }) => (
  <button className={buttonPrimary}>{children}</button>
)

export default Button

Button.propTypes = {
  color: PropTypes.string.isRequired
}
