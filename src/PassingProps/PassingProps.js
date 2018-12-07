import React from 'react'
import RaisedButton from '../Button'
import PassingPropsPrim from './PassingPropsPrim'

class PassingProps extends React.Component {
    render() {
        return (
            <div>
                <h1>passingValue for props: {this.props.passingValue}</h1>
                <RaisedButton
                    primary={true}
                    label={'passingFun for props'}
                    onClick={this.props.passingFun}
                />
                <PassingPropsPrim
                    primary={true}
                    label={'passingFun for props PassingPropsBis'}
                    onClick={this.props.passingFunProps}
                >
                    <h2>PassingProps</h2>
                </PassingPropsPrim>
            </div>
        )
    }
}
export default PassingProps