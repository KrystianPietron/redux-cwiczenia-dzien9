import React from 'react'
import Drawer from 'material-ui/Drawer'
import { Link } from 'react-router-dom'
import { ListItem } from 'material-ui'
import MenuItem from 'material-ui/MenuItem'
import AppBar from 'material-ui/AppBar'

const style = {
    links: {
        textDecoration: 'none',
        color: 'black'
    }
}

class Navigation extends React.Component {
    constructor(props) {
        super(props)
        this.state = { open: false }
    }

    handleToggle = () => this.setState({ open: !this.state.open })

    handleClose = () => this.setState({ open: false })


    render() {

        const MenuLink = (props) => (
            <MenuItem onClick={this.handleClose}>
                <Link
                    style={style.links}
                    to={props.to}
                >
                    <ListItem>{props.label}</ListItem>
                </Link>
            </MenuItem>
        )
        return (
            <div>
                <AppBar
                    title="React Exercices Day 9"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                    onLeftIconButtonClick={this.handleToggle}
                />
                <Drawer
                    docked={false}
                    width={200}
                    open={this.state.open}
                    onRequestChange={this.handleToggle}
                >
                    <MenuLink
                        to='/'
                        label='HOME'
                    />
                    <MenuLink
                        to='/counter'
                        label='Counter'
                    />
                    <MenuLink
                        to='/counterwithstartvalue'
                        label='CounterWithStartValue'
                    />
                    <MenuLink
                        to='/passingprops'
                        label='PassingProps'
                    />
                    <MenuLink
                        to='/fetchusers'
                        label='FetchUsers'
                    />
                    <MenuLink
                        to='/syncusers'
                        label='SyncUsers'
                    />
                    <MenuLink
                        to='/add'
                        label='ADD'
                    />
                    <MenuLink
                        to='/addredux'
                        label='AddRedux'
                    />
                </Drawer>
            </div>
        )
    }

}
export default Navigation
