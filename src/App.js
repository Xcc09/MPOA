import React, { useState,useEffect } from 'react';
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


  //控制弹窗显示的状态
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 新增状态来控制显示的内容
  const [displayContent, setDisplayContent] = useState('');

  const handleSectionClick = (sectionId) => {
    // 假设文创团购 对应 "Hello world"
    if (sectionId === 1) {
      setDisplayContent('section1');
      setIsModalOpen(true);//显示弹窗
    } 
    if (sectionId === 2){
      setDisplayContent('section2'); 
    }
    if (sectionId === 3){
      setDisplayContent('section3'); 
    }
    if (sectionId === 4){
      setDisplayContent('section4'); 
    }
    if (sectionId === 5){
      setDisplayContent('section5'); 
    }else{
      setDisplayContent('');
    }
  };

  return (
    <div className="App">
    <header className="top-bar">知趣文化后台管理系统</header>
    <div className="main-content">
      <nav className="sidebar">
        {sections.map((section) => (
          <button
            key={section.id}
            className={section.id === activeSection ? 'active' : ''}
            onClick={() => {
              handleSectionClick(section.id);
              setActiveSection(section.id);
            }}           
          >
            {section.title}
          </button>
        ))}
      </nav>
      <div>
        <iframe className="content" title='content'></iframe>
      </div>
   </div>
  </div>
);
}

export default App;