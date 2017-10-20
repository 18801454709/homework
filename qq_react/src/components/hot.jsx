import React, { Component } from "react"

class Child extends Component {

	constructor(props){
    	super(props)
    	this.state = {
            data:this.props.num
        }
	}
	render(){
		console.log('render 2')
		return (<div className='main'>
			<header className="header">
			        <div className="header_left">
			            <a href="javascript:;">
			                <img src="images/head.png"/>
			            </a>
			        </div>
			        <div className="header_center">
			            <p>消息</p>
			        </div>
			        <div className="header_right">
			            <a href="javascript:;">＋</a>
			        </div>
			    </header>
			    <div className="content">
			        <div className="con_select">
			            <input type="text" placeholder='搜索'/>
			            <i className='fa fa-fw fa-search'></i>
			        </div>
			        <div className="lists">
			        	{this.state.data.map((i,index)=>

							<div className="list" key={index}>
			                    <div className="list_img">
			                        <img src={i.img}/>
			                    </div>
			                    <div className="list_box">
			                        <div className="list_top">
			                            <h4>{i.title}</h4>
			                            <p><span>{i.day}</span><span>{i.time}</span></p>
			                        </div>
			                        <div className="list_bottom">
			                            <p className='text-nobr'><span>{i.prompt}</span>{i.con}</p>
			                            <label className={i.bg}></label>
			                        </div>
			                    </div>
			                </div>
			        	)}
			        </div>
			    </div>
			    <footer className="footer">
			        <div className="footer_skip bg">
			            <img src="images/footer1.png" alt=""/><span>消息</span>
			            <label className="bg"></label>
			        </div>
			        <div className="footer_skip">
			            <img src="images/footer2.png" alt=""/><span>联系人</span>
			        </div>
			        <div className="footer_skip">
			            <img src="images/footer3.png" alt=""/><span>动态</span>
			        </div>
			    </footer>
			    </div>)
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
