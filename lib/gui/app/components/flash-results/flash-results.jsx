/*
 * Copyright 2018 resin.io
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict'

const React = require('react')
const PropTypes = require('prop-types')
const _ = require('lodash')
const { Underline } = require('./../../styled-components')

/* eslint-disable no-inline-comments */

const FlashResults = (props) => {
  return (
    <div style={{
      position: 'absolute', left: '153px', top: '66px'
    }}>
      <div className="inline-flex title">
        <span className="tick tick--success space-right-medium"></span>
        <h3>Flash Complete!</h3>
      </div>
      <div className="results" style={{ margin: '11px 0 0 40px' }}>
        <Underline
          tooltip={props.errors()}>
          {_.map(props.results.devices, (quantity, type) => {
            return (quantity) ? (
              <div key={type} className={`target-status-line target-status-${type}`}>
                <span className="target-status-dot"></span>
                <span className="target-status-quantity">{ quantity }</span>
                <span className="target-status-message">{ props.message[type](quantity) }</span>
              </div>
            ) : null
          })}
        </Underline>
      </div>
    </div>
  )
}

FlashResults.propTypes = {
  results: PropTypes.object,
  message: PropTypes.object,
  errors: PropTypes.func
}

module.exports = FlashResults
