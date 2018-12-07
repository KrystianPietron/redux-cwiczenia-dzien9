import React from 'react'

const API_URL = 'https://randomuser.me/api/?results='
class FetchUsers extends React.Component {

    state = {
        users: []
    }
    componentDidMount() {
        this.loadData()
    }
    loadData = () => (
        fetch(`${API_URL}10`)
            .then(response => response.json())
            .then(data => this.setState({ users: data.results }))
    )
    render() {
        return (
            <div>
                <h1>10 Emails from randomusers api for fetch </h1>
                {this.state.users.map((element, index) =>
                    <div key={element.login.uuid}>{index + 1}. Email : {element.email}</div>
                )}
            </div>
        )
    }
}
export default FetchUsers