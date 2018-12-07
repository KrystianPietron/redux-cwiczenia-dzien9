import React from 'react'
import RaisedButton from 'material-ui/RaisedButton';
const style = {
    margin: 15,
}
const Button = (props) => (
    <RaisedButton
        primary={props.primary}
        label={props.label}
        onClick={props.onClick}
        style={style}
    />
)
export default Button