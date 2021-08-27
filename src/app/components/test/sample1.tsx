import React from 'react';
import logo from '../../../assets/LogoCarePathway.png';

const STATUS = {
    HOVERED: 'hovered',
    NORMAL: 'normal',
};

interface IPops {
    page: any
}

interface IState {
    class: any
}

export default class Sample1 extends React.Component<IPops, IState> {
    constructor(props: any) {
        super(props);

        this._onMouseEnter = this._onMouseEnter.bind(this);
        this._onMouseLeave = this._onMouseLeave.bind(this);

        this.state = {
            class: STATUS.NORMAL,
        };
    }

    _onMouseEnter() {
        this.setState({ class: STATUS.HOVERED });
    }

    _onMouseLeave() {
        this.setState({ class: STATUS.NORMAL });
    }

    render() {
        return (
            <div>
                <img src={logo} />
                <label style={{ textAlign: 'center' }}>
                    <a
                        className={this.state.class}
                        href={this.props.page || '#'}
                        target="_blank"
                        onMouseEnter={this._onMouseEnter}
                        onMouseLeave={this._onMouseLeave}
                    >
                        {this.props.children}
                    </a>
                    <br />
                    <label>
                        {this.state.class}
                    </label>
                </label>
                <title>title1</title>
            </div>


        );
    }


    // constructor(props: any) {
    //     super(props);
    //     this.state = { isChecked: true };

    //     // bind manually because React class components don't auto-bind
    //     // http://facebook.github.io/react/blog/2015/01/27/react-v0.13.0-beta-1.html#autobinding
    //     this.onChange = this.onChange.bind(this);
    // }

    // onChange() {
    //     this.setState({ isChecked: !this.state.isChecked });
    // }

    // render() {
    //     return (
    //         <label>
    //             <input
    //                 type="checkbox"
    //                 checked={this.state.isChecked}
    //                 onChange={this.onChange}
    //             />
    //             {this.state.isChecked ? this.props.labelOn : this.props.labelOff}
    //         </label>
    //     );
    // }

}