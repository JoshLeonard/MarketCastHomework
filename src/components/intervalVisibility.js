import { Component } from 'react';
import Visibility from './visibility';

export default class Interval extends Component {

    state = {
        visible: true
    }

    componentDidMount(){
        this.setVisibilityInterval(this.props.intervalMS);
    }

    toggleVisibility = () => {
        this.setState({visible: !this.state.visible});
    }

    setVisibilityInterval = (interval) => {
        this.interval = setInterval(() => { this.toggleVisibility() }, interval);
    }

    shouldComponentUpdate(nextProps){
        if(this.props.intervalMS !== nextProps.intervalMS){
            clearInterval(this.interval);
            this.setVisibilityInterval(nextProps.intervalMS);
            return false;
        }
        return true;
    }

    render(){
        return (
            <Visibility visible={this.state.visible}>
                {this.props.children}
            </Visibility>
        );
    }
}