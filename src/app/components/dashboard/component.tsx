import React from 'react'
import Sample from '../test/sample1'

interface IProps {
    user: User,
    role: Role,
    onChangeStore: () => void,
}

const component = (props: IProps) => {
    return (
        <div>
            Dashboard

            <div style={{ textAlign: 'center' }}>
                <h5>redux store</h5>
                <div>
                    User

                    id : {props.user.id}
                    <br />
                    name :{props.user.name}
                    <br />
                </div>
                <br />
                <div>
                    Role
                    id : {props.role.id}
                    <br />
                    name :{props.role.role}
                    <br />
                </div>

                <button onClick={props.onChangeStore}>Change stored</button>
                <br />

            </div>
            <br />
            <Sample page={'https://www.youtube.com/'}>youtube</Sample>
        </div>
    );
}

export default component;