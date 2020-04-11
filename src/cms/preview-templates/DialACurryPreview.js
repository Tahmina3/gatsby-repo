import React from 'react'
import PropTypes from 'prop-types'
import { DialACurryTemplate } from '../../templates/dial-a-curry'

const DialACurryPreview = ({ entry, widgetFor }) => (
  <MealDealsTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

DialACurryPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default DialACurryPreview