import React from 'react'
import PropTypes from 'prop-types'
import { MealDealsTemplate } from '../../templates/meal-deals'

const MealDealsPreview = ({ entry, widgetFor }) => (
  <MealDealsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MealDealsPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MealDealsPreview