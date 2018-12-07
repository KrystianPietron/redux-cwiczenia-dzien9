import React from 'react'
import Input from '../Input'

const style = {
    input: {
        maxWidth: '130px'
    }
}
class Add extends React.Component {
    state = {
        firstNumber: 0,
        secondNumber: 0

    }

    render() {
        return (
            <div>
                <h1>Add first number to second number</h1>
                <Input
                    style={style.input}
                    hintText='first number'
                    onChange={(event) => this.setState({ firstNumber: Number(event.target.value) })}
                />
                +
                <Input
                    style={style.input}
                    hintText='second number'
                    onChange={(event) => this.setState({ secondNumber: Number(event.target.value) })}
                />
                =
                 {this.state.firstNumber + this.state.secondNumber}
            </div>
        )
    }
}
export default Add