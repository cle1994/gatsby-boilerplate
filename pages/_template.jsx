import React from 'react'
import { Container } from 'react-responsive-grid'
import { Link } from 'react-router'
import { prefixLink } from 'gatsby-helpers'
import Headroom from 'react-headroom'
import $ from 'jquery';

import 'css/_index.scss'

module.exports = React.createClass({
  propTypes () {
    return {
      children: React.PropTypes.any,
    }
  },

  componentDidMount() {},

  render () {
    return (
      <div className="">
        <Headroom
          wrapperStyle={{
            maxHeight: 68
          }}
          style={{
            background: 'rgba(255, 255, 255, 0.95)'
          }}
        >
          <Container
            style={{
              maxWidth: 1280,
              padding: 12,
            }}
          >
            Hello World
          </Container>
        </Headroom>
        <div
          style={{
            padding: 0
          }}
        >
          { this.props.children }
        </div>
      </div>
    )
  },
})
