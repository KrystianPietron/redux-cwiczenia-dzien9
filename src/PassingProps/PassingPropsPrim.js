import React from 'react'
import PassingPropsBis from './PassingPropsBis'

const PassingPropsPrim = (props) => (
    <div>
        <h3>PassingPropsPrim</h3>
        <PassingPropsBis
            primary={props.primary}
            label={props.label}
            onClick={props.onClick}
        >
        </PassingPropsBis>
    </div>
)
export default PassingPropsPrim