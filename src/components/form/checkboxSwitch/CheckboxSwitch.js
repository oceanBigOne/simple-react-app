import React, {Component} from "react";
import style from "./CheckboxSwitch.module.scss";

class CheckboxSwitch extends Component {
    constructor(props) {
        super(props);
        this.state={
            focused:false
        }
    }

    sum(a,b){
        return a+b;
    }

    focus(){
        this.setState({ focused: true });
    }

    blur(){
        this.setState({ focused: false });
    }

    render() {
        return (
            <label className={(this.state.focused?style.focused:"")+" "+style.switch} >
                <input
                    type="checkbox"
                    id={this.props.id}
                    onFocus={() => this.setState({ focused: true })}
                    onBlur={() => this.setState({ focused: false })}
                    name={this.props.name}
                    tabIndex={this.props.tabIndex}
                    onClick={this.props.onClick}
                    className={this.props.className}
                />
                <span className={style.slider} />
            </label>
        );
    }
}

export default CheckboxSwitch;