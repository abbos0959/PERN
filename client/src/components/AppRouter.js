import React from "react";
import { Route, Routes } from "react-router-dom";
import { authRoutes, publisherRoutes } from "../routes";

export const AppRouter = () => {
   const isAuth = false;
   return (
      <Routes>
         {isAuth &&
            authRoutes.map(({ path, element }) => (
               <Route key={path} path={path} element={element} exact />
            ))}

         {publisherRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} exact />
         ))}
      </Routes>
   );
};
