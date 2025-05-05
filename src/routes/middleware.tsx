import { ReactNode } from "react";
import { Routes, Route } from "react-router-dom";
import { private_routes, public_routes } from ".";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import NotFoundPage from "../pages/notFound";
import Layout from "../components/Layout";

const RoutesMiddleware = () => {

    const isAuthenticated = useSelector((state: RootState) => state.auth.isAuthenticated);

    const createComponent = (Component: any): ReactNode => {
        return <Component />;
    }

    return (
        <Routes>
            {isAuthenticated
                ? private_routes.map((route, index) => (
                    <Route 
                        key={index} 
                        path={route.path} 
                        element={
                            route.config.structure === "layout" ? 
                            <Layout>{createComponent(route.component)}</Layout> 
                            : createComponent(route.component)
                        } 
                    />
                ))
                : public_routes.map((route, index) => (
                    <Route key={index} path={route.path} element={createComponent(route.component)} />
                ))}

            {/* 404 sahifa uchun fallback */}
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
}
export default RoutesMiddleware;