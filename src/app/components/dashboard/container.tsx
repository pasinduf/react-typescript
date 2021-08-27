import React, { Children } from 'react'
import Component from './component'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'
import { setUser, setRole } from '../../../redux/actions/actions'
import { AppState } from '../../../redux/appState'

interface IState { }

interface IProps {
    dispatch: Dispatch;
    user: User;
    role: Role;
}

class Dashboard extends React.Component<IProps, IState> {

    constructor(props: IProps) {
        super(props)
        this.state = {}
        console.log(props);
    }

    onChangeStore = () => {
        this.props.dispatch(setUser({ id: 2, name: 'sss' }))
        this.props.dispatch(setRole({ id: 2, role: 'admin' }))
    }
    render() {
        return (
            <Component
                user={this.props.user}
                role={this.props.role}
                onChangeStore={this.onChangeStore}
            />
        )
    }
}

const mapStateToProps = (state: AppState) => ({
    user: state.user,
    role: state.role
});


export default connect(mapStateToProps)(Dashboard)