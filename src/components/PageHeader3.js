import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader3.css'

const PageHeader3 = ({
  title,
  subtitle,
  button,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader3-large'
  return (
    <div className={`PageHeader3 relative ${className}`}>
      {backgroundImage && (
        <Image
          background
          resolutions="large"
          src={backgroundImage}
          alt={title}
          size="cover"
        />
      )}
      <div className="container relative">
        <h1 className="PageHeader3--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader3--Subtitle" src={subtitle} />
        )}
      </div>
    </div>
  )
}

PageHeader3.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader3