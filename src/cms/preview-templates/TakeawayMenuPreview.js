import React from 'react'
import PropTypes from 'prop-types'
import { TakeawayMenuTemplate } from '../../templates/takeaway-menu'

const TakeawayMenuPreview = ({ entry, widgetFor }) => (
  <TakeawayMenuTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

TakeawayMenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default TakeawayMenuPreview
