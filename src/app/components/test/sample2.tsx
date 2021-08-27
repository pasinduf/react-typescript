import React from 'react';

interface IPops {
    labelOn: any,
    labelOff: any
}

interface IState {
    isChecked: boolean
}

export default class Sample2 extends React.Component<IPops, IState> {

    constructor(props: any) {
        super(props);
        this.state = { isChecked: true };
        this.onChange = this.onChange.bind(this);
    }

    onChange() {
        this.setState({ isChecked: !this.state.isChecked });
    }

    render() {
        return (
            <label>
                <input
                    type="checkbox"
                    checked={this.state.isChecked}
                    onChange={this.onChange}
                />
                {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
            </label>
        );
    }

}