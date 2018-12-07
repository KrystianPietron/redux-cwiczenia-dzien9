import React from 'react'
import RaisedButton from './Button'
import PropTypes from 'prop-types'


class Counter extends React.Component {
    state = {
        number: this.props.startValue || 0
    }

    incHandler = () => (
        this.setState({ number: this.state.number + 1 })
    )

    decHandler = () => (
        this.setState({ number: this.state.number - 1 })
    )

    render() {
        return (
            <div>
                <h1>Number is: {this.state.number}</h1>
                <RaisedButton
                    label='+'
                    onClick={this.incHandler}
                    primary={true}
                />
                <RaisedButton
                    label='-'
                    onClick={this.decHandler}
                    primary={true}
                />
            </div>
        )
    }
}
Counter.defaultProps = {
    startValue: 3
};
Counter.propTypes = {
    startValue: PropTypes.element.isRequired
};
export default Counter