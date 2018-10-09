/* global tw */
import { startCase } from 'lodash'
import { v4 } from 'node-uuid'
import React from 'react'
import { css } from 'react-emotion'

import { categories, ruCategories } from '../api'
import FilterLink from './FilterLink'

const Filters = () => (
  <nav
    className={css`
      ${tw([
        'flex',
        'flex-row',
        'flex-wrap',
        'justify-start',
        'sm:justify-between',
      ])};
      padding: 2.5rem 0.5rem;
    `}
  >
    <FilterLink to="/">Все</FilterLink>
    {categories.map(category => (
      <FilterLink key={v4()} to={`/${category}`}>
        {startCase(ruCategories[category])}
      </FilterLink>
    ))}
  </nav>
)

export default Filters
