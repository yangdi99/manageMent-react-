import React, { Component } from 'react';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom'
import './App.css';
import { isSuper } from '@babel/types';

class App extends Component {
    constructor(props){
        super(props)
        this.state = {date: new Date(),isToggleOn: true}
        this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount(){
        this.timerID = setInterval(
            () => this.tick(),
            1000
        );
    }
    componentWillUnmount() {
        clearInterval(this.timerID)
    }
    tick(){
        this.setState({
            date: new Date()
        })
    }
    handleClick(){
        this.setState((prevState)=>({
            isToggleOn: !prevState.isToggleOn
        }))
    }
    render() {
        return ( <div className = "App" >
            <h1>react ==》 hello,world!</h1>
            <h2>{this.state.date.toLocaleTimeString()}</h2>
            <button onClick={this.handleClick}>{this.state.isToggleOn ? '开' : '关'}</button>
            <nav className='main-menu'>
                <NavLink to='/Index'>首页</NavLink>
            </nav>
        </div>
        );
    }
}

export default App;