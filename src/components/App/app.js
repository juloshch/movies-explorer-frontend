import React from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Main from '../Main/Main';
import Register from '../Register/Register';
import Login from '../Login/Login';
import Profile from '../Profile/Profile';
import Movies from '../Movies/Movies';
import NotFound from '../NotFound/NotFound';
import SavedMovies from '../SavedMovies/SavedMovies';
import {checkToken} from '../../utils/auth';
import ProtectedRoute from './ProtectedRoute';

function App () {
    const [loggedIn, setLoggedIn] = React.useState(false);
    const [userData, setUserData] = React.useState({});
    const history = useHistory();

    React.useEffect(() => {
        if(loggedIn) {
            history.push('/')
        }
    }, [loggedIn])

    React.useEffect(() => {
        tokenCheck();
    }, [])

    const tokenCheck = () => {
        if (localStorage.getItem('token')) {
            let jwt = localStorage.getItem('token');
            checkToken(jwt).then((res) => {
                if (res && res.data) {
                    let userData = {
                        email: res.data.email
                    }
                    setLoggedIn(true);
                    setUserData(userData);
                }
            })
        }
    }
    
    const login = (email) => {
        let userData = {
            email: email
        }
        setLoggedIn(true);
        setUserData(userData);
    }

    const logout = () => {
        setLoggedIn(false);
        setUserData({});
        localStorage.setItem('token', '');
    }

    return (
        <Switch>
            <Route exact path='/'>
                <Main/>
            </Route>
            <Route path='/sign-in'>
                <Login onLogin={login} />
            </Route>
            <Route path='/sign-up'>
                <Register />
            </Route>
            <ProtectedRoute
                path="/profile"
                loggedIn={loggedIn}
                logout={logout}
                component={Profile}
                userData={userData}
            />
            <ProtectedRoute
                path="/movies"
                loggedIn={loggedIn}
                logout={logout}
                component={Movies}
                userData={userData}
            />
            <ProtectedRoute
                path="/saved-movies"
                loggedIn={loggedIn}
                logout={logout}
                component={SavedMovies}
                userData={userData}
            />
            <Route path=''>
                <NotFound/>
            </Route>
        </Switch>
    )
}

export default App;