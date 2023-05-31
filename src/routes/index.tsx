import React from 'react'
import { Routes, Route } from 'react-router-dom';
import { Home } from '../pages/Home';
import { Login } from '../pages/Login';
import { EssayWriting } from '../pages/Student/EssayWriting';
import { MyPage } from '../pages/Student/MyPage';
import { Portfolio } from '../pages/Student/Portfolio';
import WebViewWrap from '../pages/WebViewWrap';
import useLoginStore from '../store/useLoginStore';
import PrivateRoute from './PrivateRoute';
import { Admin } from '../pages/Admin';
import { Student } from '../pages/Student/Student';
import { Teacher } from '../pages/Teacher';
import {routeValues} from './routeValues';
import SelectEssayWriting from '../pages/Student/SelectEssayWriting';
import EssayWritingSelectTopic from '../pages/Student/EssayWritingSelectTopic';

export default function Roter() {
    const { role, isOpen } = useLoginStore();
    const publicRoutes = () => {
        const routeValue = routeValues.publicRoutes;
        const mainPage = role === 'logout' ? <Home /> : (
            role === 'admin' ? <Admin /> : (
                role === 'teacher' ? <Teacher /> : <Student />
            )
        );
        return (
            <Route element={<PrivateRoute authenticated={false} />}>
                {routeValue.map((publicRoute, publicIndex) => {
                    if (publicRoute.path === '/') {
                        return <Route key={publicIndex} path={publicRoute.path} element={mainPage}/>
                    } else {
                        return <Route key={publicIndex} path={publicRoute.path} element={publicRoute.element}/>
                    }
                })}
            </Route>
        )
    }
    // const privateRoutes = () => {
    //     const routeValue = routeValues.privateRoutes;

    // }
    return (
        <div className="mx-auto items-center text-center ">
            {isOpen && <Login />}
            <Routes>
                {/* No Login Pages */}
                {publicRoutes()}
                {/* Admin 전용 페이지 */}
                <Route element={<PrivateRoute authenticated={true} pageAuth='admin' />} >
                    
                </Route>
                {/* Teacher 전용 페이지 */}
                <Route element={<PrivateRoute authenticated={true} pageAuth='teacher' />} >

                </Route>
                {/* 학생 페이지 */}
                <Route element={<PrivateRoute authenticated={true} pageAuth='student' />} >
                    <Route path='/student/SelectEssayWriting' element={<SelectEssayWriting />}></Route>
                    <Route path='/student/EssayWriting' element={ <EssayWriting />}></Route>
                    <Route path='/student/EssayWritingSelectTopic' element={ <EssayWritingSelectTopic />}></Route>
                    <Route path='/student/MyPage' element={<MyPage />}></Route>
                    <Route path='/student/Portfolio' element={<Portfolio />}></Route>

                </Route>
                {/* <Route path='' element={ }></Route> */}

                {/* webview 전용 page */}
                <Route path='/webTest' element={<WebViewWrap />}></Route>
            </Routes>
        </div>

    )
}