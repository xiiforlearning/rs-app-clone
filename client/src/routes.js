import React from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'
import { FirstPage } from './pages/FirstPage' 
import { LoginPage } from './pages/student/LoginPage'
import { LoginPageMentors } from './pages/mentor/LoginPage'
import { RegisterPage } from './pages/student/RegisterPage'
import { RegisterPageMentors } from './pages/mentor/RegisterPage'
import { DashboardPage } from './pages/DashboardPage'
import { MainPage } from './pages/MainPage'
import  Table from './schedule/App'
import {createStore,applyMiddleware,compose} from 'redux'
import {Provider} from 'react-redux'
import reducers from './schedule/reducers'
import thunk from 'redux-thunk'
import StudentTable from './schedule/student'
const store = createStore(reducers,compose(applyMiddleware(thunk)))
export const useRoutes = (isAuthenticated, isMentor) => {
    if(isAuthenticated) {
        if(!isMentor) {
            return(
                <Switch> 
                    <Route path="/main" exact>
                    <MainPage />
                    </Route>
                    <Route path="/schedule" exact>
                    <Provider store= {store}>
                    <StudentTable/>
                    </Provider>
                    </Route>
                    <Route path="/dashboard" exact>
                        <DashboardPage />
                    </Route>
                    <Redirect to="/main" />
                </Switch>
            )
        }
        return(
            <Switch>
                <Route path="/mentor" exact>
                    <MainPage />
                </Route>
                <Route path="/schedule" exact>
                    <Provider store= {store}>
                    <Table/>
                    </Provider>
                    </Route>
                <Route path="/dashboardMentors" exact>
                    <DashboardPage />
                </Route>
                <Redirect to="/mentor" />
            </Switch>
        )

    }

    return(
        <Switch>
            <Route path="/" exact>
                    <FirstPage />
            </Route>
            <Route path="/login" exact>
                    <LoginPage />
            </Route>
            <Route path="/loginMentors" exact>
                    <LoginPageMentors />
            </Route>
            <Route path="/register" exact>
                    <RegisterPage />
            </Route>
            <Route path="/registerMentors" exact>
                    <RegisterPageMentors />
            </Route>
            <Redirect to="/" />
        </Switch>
    )

}