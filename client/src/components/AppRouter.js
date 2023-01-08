import React from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import { authRoutes, publicRoutes } from '../routes';

export default function AppRouter() {
  const isAuth = useSelector(state => state.user.isAuth);

  const isAuthRoutes = authRoutes.map((route) => {
    return (
      <Route key={route.path} path={route.path} element={<route.element />} exact />
    )
  });

  const isNotAuthRoutes = publicRoutes.map((route) => {
    return (
      <Route key={route.path} path={route.path} element={<route.element />} exact />
    )
  });

  return (
    <Routes>
      {isAuth && isAuthRoutes}
      {isNotAuthRoutes}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}
