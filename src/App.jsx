import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import LandingPage from './pages/LandingPage';
import Dashboard from './pages/Dashboard';
import DomainSelection from './pages/DomainSelection';
import InterviewSession from './pages/InterviewSession';
import ReportCard from './pages/ReportCard';
import Login from './pages/Login';
import UnderConstruction from './pages/UnderConstruction';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-surface font-sans text-gray-200">
        <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/domains" element={<DomainSelection />} />
          <Route path="/interview/:domainId" element={<InterviewSession />} />
          <Route path="/interview-construction/:companyId/:roleId" element={<UnderConstruction />} />
          <Route path="/report" element={<ReportCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
