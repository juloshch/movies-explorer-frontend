import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';

function App () {
    return (
        <Switch>
            <Route path='/sign-in'>
                <Login />
            </Route>
            <Route path='/sign-up'>
                <Register />
            </Route>
            <Route path='/profile'>
                <Profile />
            </Route>
            <Route path='/movies'>
                <Movies />
            </Route>
            <Route path='/'>
                <Main/>
            </Route>

            {/* <ProtectedRoute
                path="/"
                // loggedIn={loggedIn}
                // logout={logout}
                // component={MainContainer}
                // userData={userData}
            /> */}

        </Switch>
    )
}

export default App;