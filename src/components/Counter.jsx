import React, {Component} from "react";

class Counter extends Component {
    state = {
        value: this.props.value,
        tags: [
            'tag1', 'tag2', 'tag3'
        ]
    }
    stylesP = {
        marginBottom: 0,
    }

    renderTags() {
        if (this.state.tags.length === 0) return <p>F</p>
    }

    handleIncrement = () => {
        this.state.value += 1
        this.setState({value: this.state.value})
    }

    render() {
        return (
            <div>
                <span style={{
                    fontSize: 20, fontWeight: 'bold', padding: 10,
                }} className={this.getBadgeClasses()}>
                    {this.formatCount()}
                </span>
                <button onClick={this.handleIncrement} className="btn btn-secondary btn-sm">Increment</button>



            </div>
        )
    }

    getBadgeClasses() {
        let classes = "badge m-2";
        classes += (this.state.value === 0) ? ' badge-warning' : ' badge-primary';
        return classes;
    }

    formatCount() {
        const {value} = this.state;
        const zeroText = <p style={this.stylesP}>Zero</p>
        return value === 0 ? zeroText : value;
    }
}

export default Counter