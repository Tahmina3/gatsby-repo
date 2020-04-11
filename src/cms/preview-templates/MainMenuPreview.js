import React from 'react'
import PropTypes from 'prop-types'
import { MainMenuTemplate } from '../../templates/main-menu'

const MainMenuPreview = ({ entry, widgetFor }) => (
  <MainMenuTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

MainMenuPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default MainMenuPreview