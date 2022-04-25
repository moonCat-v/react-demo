import React from 'react'
import { connect } from 'react-redux'

import MoreChild from './compontents/moreChild'

function Demo(props) {

  const handleClick = () => {
    props.haha('lalalalal')
  }
  return (
    <div>
      Demo
      <button onClick={handleClick}>dianji </button>
      <MoreChild>
        <h2>MoreChild</h2>
        <button>MoreChild</button>
      </MoreChild>
    </div>
  )
}

function action(data) {
  return (dispatch) => {
    dispatch({type: '11', data})
  }
}

function mapDispatch(dispatch) {
  return {
    haha: data => dispatch(action(data))
  }
}
export default connect(null, mapDispatch)(Demo)