import React, { useState, useRef,useEffect } from 'react';
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

  // 引用右侧内容区域的DOM元素
  const contentRef = useRef(null);

  // 当内容区域滚动时，更新目录栏的激活状态
  useEffect(() => {
  const handleScroll = () => {
    const currentScrollY = contentRef.current.scrollTop;
    let activeId = null;

    sections.forEach((section,index) => {
      const sectionElement = document.getElementById(`section-${section.id}`);
      if (sectionElement.offsetTop >= currentScrollY) {
        activeId = section.id;
        return;
      }
    });
    setActiveSection(activeId);
  };
    // 这里可以添加逻辑来更新页面的URL或浏览器历史
    // 例如：window.history.pushState({}, '', `#section-${currentSection.id}`);
    contentRef.current.addEventListener('scroll', handleScroll);
    
    return () => {
      contentRef.current.removeEventListener('scroll', handleScroll);
    };
  },[]);

  // 新增状态来控制显示的内容
  const [displayContent, setDisplayContent] = useState('');

  const handleSectionClick = (sectionId) => {
    // 假设文创团购 对应 "Hello world"
    if (sectionId === 1) {
      setDisplayContent('section1');
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
      <div className="content" ref={contentRef}>
      /* 在这个里面加入主页面的内容 */
      </div>
    </div>
  </div>
  );
}

export default App;