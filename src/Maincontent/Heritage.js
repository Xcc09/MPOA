import React from 'react';
import { Link,useNavigate} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAdd } from '@fortawesome/free-solid-svg-icons'; // 替换为实际的图标名

import './Maincontent.css';

function Heritage() {
  const history = useNavigate(); // 引入 useHistory 钩子

  const goBack = () => {
    history.goBack(); // 实现返回功能
  };

  return (

    
    <div className='content'>
      <div><h2>资产管理</h2></div>
      {/* 假设你有四个图标对应的路由 */}
      <div>
        <Link to="/public" className="icon-link">
          <FontAwesomeIcon icon={faAdd} /> 增加
        </Link>
        <Link to="/public" className="icon-link">
          <FontAwesomeIcon icon={faAdd} /> 删除
        </Link>
        <Link to="/public" className="icon-link">
          <FontAwesomeIcon icon={faAdd} /> 更改
        </Link>
        <Link to="/public" className="icon-link">
          <FontAwesomeIcon icon={faAdd} /> 查看
        </Link>
      </div>
      <div>
      <button onClick={goBack}>返回</button>
      </div>
    </div>
  );
}

export default Heritage;