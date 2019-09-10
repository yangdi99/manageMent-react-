import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
let token = sessionStorage.getItem('token')
class RouterWrapper extends Component{
    render(){
        const { routes } = this.props;
        return (
            <Switch>
                {
                    routes.map((item, index) => {
                        console.log(item,"4545")
                        return <Route exact={item.exact} path={item.path} key={index} render = {(location) => {
                            return  item.authorization && token
                            ? <Redirect to={{pathname:'/Login',state:{from:item.path}}}></Redirect>
                            : <item.component {...location} routes={item.children} ></item.component>
                        }}></Route>
                    })
                }
            </Switch>
        )
    }
}
export default RouterWrapper