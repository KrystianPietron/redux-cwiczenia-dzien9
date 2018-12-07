import React from 'react'
import RaisedButton from '../Button'

const PassingPropsBis = (props) => (
    <div>
        <h4>PassingPropsBis</h4>
        <RaisedButton
            primary={props.primary}
            label={props.label}
            onClick={props.onClick}
        />
    </div>
)
export default PassingPropsBis