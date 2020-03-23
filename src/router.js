import React, { Component } from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import Common from './common'
import Login from './pages/login'
import Home from './pages/home'
import Admin from './admin'
import Buttons from './pages/ui/buttons'
import Modals from './pages/ui/modals'
import Loadings from './pages/ui/loadings'
import Notice from './pages/ui/notice'
import Message from './pages/ui/messages'
import Tabs from './pages/ui/tabs'
import Gallery from './pages/ui/gallary'
import Carousels from './pages/ui/carousel'
import FormLogin from './pages/form/login'
import FormRegister from './pages/form/register'
import BasicTable from './pages/table/basicTabel'
import HighTable from './pages/table/highTable'
import City from './pages/city'
import Order from './pages/order'
import OrderDetail from './pages/order/detail'
class MyRouter extends Component {
    render() {
        return (
            <Router>
                <Switch>
                    <Route path='/login' component={Login} />
                    <Route path="/common" render={ () => 
                        <Common>
                            <Route path="/common/order/detail/:orderId" component={OrderDetail} />
                        </Common>
                    }>          
                    </Route>
                    <Route path='/' render={ () => 
                       <Switch>
                           <Admin>
                                <Route path='/home' component={Home} />
                                <Route path='/ui/buttons' component={Buttons} />
                                <Route path='/ui/modals' component={Modals} />
                                <Route path='/ui/loadings' component={Loadings} />
                                <Route path='/ui/notification' component={Notice} />
                                <Route path='/ui/messages' component={Message} />
                                <Route path='/ui/tabs' component={Tabs} />
                                <Route path='/ui/gallery' component={Gallery} />
                                <Route path='/ui/carousel' component={Carousels} />
                                <Route path="/form/login" component={FormLogin} />
                                <Route path="/form/reg" component={FormRegister} />
                                <Route path="/table/basic" component={BasicTable} />
                                <Route path="/table/high" component={HighTable} />
                                <Route path="/city" component={City} />
                                <Route path="/order" component={Order} />
                                <Redirect to="/home" />
                            </Admin> 
                       </Switch>   
                    } />    
                </Switch>
            </Router>
        );
    }
}

export default MyRouter;