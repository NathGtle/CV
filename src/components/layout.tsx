import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ children }: LayoutInterface) => <div className="app">{children}</div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
