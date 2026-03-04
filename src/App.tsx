import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useAppContext } from './context/AppContext';
import Login from './screens/Login';
import Dashboard from './screens/Dashboard';
import Calendar from './screens/Calendar';
import Community from './screens/Community';
import RetreatFeed from './screens/RetreatFeed';
import PublishActivity from './screens/PublishActivity';
import Settings from './screens/Settings';
import Customization from './screens/Customization';
import Account from './screens/Account';
import Security from './screens/Security';
import Help from './screens/Help';

const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAppContext();
  return isAuthenticated ? <>{children}</> : <Navigate to="/login" />;
};

export default function App() {
  return (
    <AppProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/calendar" element={<ProtectedRoute><Calendar /></ProtectedRoute>} />
          <Route path="/community" element={<ProtectedRoute><Community /></ProtectedRoute>} />
          <Route path="/retreat" element={<ProtectedRoute><RetreatFeed /></ProtectedRoute>} />
          <Route path="/publish" element={<ProtectedRoute><PublishActivity /></ProtectedRoute>} />
          <Route path="/settings" element={<ProtectedRoute><Settings /></ProtectedRoute>} />
          <Route path="/settings/customization" element={<ProtectedRoute><Customization /></ProtectedRoute>} />
          <Route path="/settings/account" element={<ProtectedRoute><Account /></ProtectedRoute>} />
          <Route path="/settings/security" element={<ProtectedRoute><Security /></ProtectedRoute>} />
          <Route path="/settings/help" element={<ProtectedRoute><Help /></ProtectedRoute>} />
        </Routes>
      </Router>
    </AppProvider>
  );
}
