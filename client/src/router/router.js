import { BrowserRouter as Routers, Route, Routes} from 'react-router-dom';
import React, { lazy, Suspense } from "react";
import routes from "./routes";
import Loader from "../shared/loader/Loader";
import Landing from '../modules/landing';
import Layout from '../shared/layout';

function Router() {

    return (
        <Routers>
            <Routes>
                {
                    routes.map((route, i) => {    
                        
                        const { component } = route;
                        const Component = lazy(() => import(`../${ component }`));
                        const renderLoader = Loader;

                        return <Route
                            key={i}
                            path={route.path}
                            element={
                                    <Suspense fallback={ renderLoader() }>
                                        <Layout>    
                                            <Component/>
                                        </Layout>
                                    </Suspense>
                            }
                        />                               
                    })
                }  
            </Routes>    
        </Routers>
    ) 
        
}

export default Router;
