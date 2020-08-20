import React, { Component } from 'react';

export default function(WrapperdComponent) {
    return class extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isHover: false
            };
        }
    
        onMouseEnter() {
            this.setState({
                isHover: true
            });
        }
    
        onMouseLeave() {
            this.setState({
                isHover: false
            });
        }
    
        render() {
            return (
                <div
                    style={ {
                        opacity: this.state.isHover ? 0.5 : 1
                    } }
                    onMouseEnter={ this.onMouseEnter.bind(this) }
                    onMouseLeave={ this.onMouseLeave.bind(this) }
                >
                    <WrapperdComponent {...this.props} />
                </div>
            );
        }
    }
}