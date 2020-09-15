import React, {Fragment, useState} from 'react';
import Sidebar from './Sidebar/Sidebar';
import MenuIcon from './MenuIcon';
import TodoApp from './TodoApp';


function Layout() {
  
  const [sidebarVisible, setSidebarVisible] = useState(false);
  
    function toggleSidebar () {
        setSidebarVisible(!sidebarVisible);
    }

  return (
    <Fragment>
      {
        sidebarVisible && 
        <Sidebar visiblity={sidebarVisible}/>
      }
      <div className="Layout">
        <div className="header">
          <div className="menu-icon" onClick={toggleSidebar}>
           <MenuIcon />
          </div>
          <h2> My First React App </h2>
          <h2></h2>
        </div>
       
        <div className="content">
        <TodoApp/>
          {/* <h1> Content </h1> */}
        </div>
       
        <div className="footer">
          <h2>Footer </h2>
        </div>
      </div>
    </Fragment>
    );
}
export default Layout;