import React, { Component } from "react"

class Child extends Component {

	constructor(props){
    	super(props)
    	this.state = {
            num:this.props.num
        }
        setTimeout(function(){
        	this.setState({
                num:this.state.num+1
            })
        },3000)
	}
	render(){
		console.log('render 2')
		return (<div>这里是two{this.state.num}</div>)
	}
	componentWillMount(){
		console.log("componentWillMount 2")
	}
	componentWillReceiveProps(){
		console.log("componentWillReceiveProps 2")
	}
	shouldComponentUpdate(nextProps,nextState){
		console.log(nextProps,nextState)
        if(nextProps.num===nextState.num){
            return false;


        }
        return true;
    }
}
export default Child

