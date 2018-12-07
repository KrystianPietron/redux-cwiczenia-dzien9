import React from 'react'
import Input from '../Input'
import { connect } from 'react-redux'
import { inputFirstNumber, inputSecondNumber, sum } from '../state/AddReduxDuck'

const style = {
    input: {
        maxWidth: '130px'
    }
}
class AddRedux extends React.Component {

    render() {
        return (
            <div>
                <h1>Add first number to second number and redux</h1>
                <Input
                    style={style.input}
                    hintText='first number'
                    onChange={this.props._inputFirstNumber}
                />
                +
                <Input
                    style={style.input}
                    hintText='second number'
                    onChange={this.props._inputSecondNumber}
                />
                =
                {Number(this.props._firstNumber) + Number(this.props._secondNumber)}
            </div>
        )
    }
}

const mapStateToProps = state => ({
    _firstNumber: state.addReduxDuck.firstNumber,
    _secondNumber: state.addReduxDuck.secondNumber,
})

const mapDispatchToProps = dispatch => ({
    _inputFirstNumber: (event) => dispatch(inputFirstNumber(event.target.value)),
    _inputSecondNumber: (event) => dispatch(inputSecondNumber(event.target.value)),
})
export default connect(mapStateToProps, mapDispatchToProps)(AddRedux)