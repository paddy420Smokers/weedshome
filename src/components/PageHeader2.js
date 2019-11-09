import React from 'react'
import PropTypes from 'prop-types'

import Image from './Image'
import Content from './Content'
import './PageHeader2.css'

const PageHeader2 = ({
  title,
  subtitle,
  button,
  backgroundImage,
  large,
  className = ''
}) => {
  if (large) className += ' PageHeader2-large'
  return (
    <div className={`PageHeader2 relative ${className}`}>
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
        <h1 className="PageHeader2--Title">{title}</h1>
        {subtitle && (
          <Content className="PageHeader2--Subtitle" src={subtitle} />
        )}
      <button href="#" className="PageHeader2--Button">Join Newsletter</button>
      </div>
      <svg width="100%" height="120" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="#47e61f" d="M 0 35.2646 C 283.041 84.8505 434.704 80.2052 745.401 29.819 C 995.096 -12.1019 1230.51 0.859295 1456.87 17.7216 C 2037.96 56.2645 2199.95 82.847 2560 35.2648 V 181.266 L 0 181.266 V 35.2646 Z"><animate repeatCount="indefinite" fill="freeze" attributeName="d" dur="10s" values="M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z; M0 86.3149C316 86.315 444 159.155 884 51.1554C1324 -56.8446 1320.29 34.1214 1538 70.4063C1814 116.407 2156 188.408 2560 86.315V232.317L0 232.316V86.3149Z; M0 53.6584C158 11.0001 213 0 363 0C513 0 855.555 115.001 1154 115.001C1440 115.001 1626 -38.0004 2560 53.6585V199.66L0 199.66V53.6584Z; M0 25.9086C277 84.5821 433 65.736 720 25.9086C934.818 -3.9019 1214.06 -5.23669 1442 8.06597C2079 45.2421 2208 63.5007 2560 25.9088V171.91L0 171.91V25.9086Z "></animate></path></svg>
    </div>
  )
}

PageHeader2.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default PageHeader2