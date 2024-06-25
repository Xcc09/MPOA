import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import StaffManagement from './Maincontent/StaffManagement'; 
import ExpenditureMagement from './Maincontent/ExpenditureMagement'; 
import Heritage from './Maincontent/Heritage';
import OrderManagement from './Maincontent/OrderManagement'; 
import './App.css';

function App() {
  const [activeSection, setActiveSection] = useState(null);
  const [sections, setSections] = useState([
    { id: 1, title: '人员管理' },
    { id: 2, title: '订单管理' },
    { id: 3, title: '支出管理' },
    { id: 4, title: '资产管理' },
    { id: 5, title: '文创团购' },
    // 更多的section...
  ]);

  
  return (
    <Router>
    <div className="App">
    <header className="top-bar">知趣文化后台管理系统</header>
    <div className="main-content">
      <nav className="sidebar">
        {sections.map((section) => (
          <Link
            key={section.id}
            to={section.id === 1 ? '/StaffManagement' : 
                section.id === 2 ? '/OrderManagement' :
                section.id === 3 ? '/ExpenditureMagement':
                section.id === 4 ? '/Heritage': ''}
            
            className={section.id === activeSection ? 'active' : ''}
            onClick={() => {
              setActiveSection(section.id);
            }}           
          >
            {section.title}
          </Link>
        ))}
      </nav>
      <div className="content">
      <Routes>
          <Route path="/StaffManagement" element={<StaffManagement />} />
          <Route path="/OrderManagement" element={<OrderManagement />} />
          <Route path="/ExpenditureMagement" element={<ExpenditureMagement />} />
          <Route path="/Heritage" element={<Heritage />} />
  
      </Routes>
      </div>
    </div>
  </div>
  </Router>
);
}

export default App;