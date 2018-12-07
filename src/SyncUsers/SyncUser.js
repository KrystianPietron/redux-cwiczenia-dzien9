import React from 'react'
import { database } from '../firebaseConfig'

class SyncUsers extends React.Component {

    state = {
        users: []
    }

    componentDidMount() {
        this.loadData()
    }
    loadData = () => {
        database.ref(`/jfddl6/randomusers`).once(
            'value',
            snapshot => {
                this.setState({ users: snapshot.val().results })
            })
    }
    render() {
        return (
            <div>
                <h1>10 Emails from Sync Users for Firebase</h1>
                {this.state.users.map((element, index) =>
                    <div key={element.cell}>{index + 1}. Email : {element.email}</div>
                )}
            </div>
        )
    }
}
export default SyncUsers