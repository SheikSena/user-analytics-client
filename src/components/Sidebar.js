import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SidebarContent, SidebarFooter } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { CheckSquareFill, GridFill, ChevronDoubleRight, ChevronDoubleLeft } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { useState } from 'react';
function Sidebar() {

    const [collapseSideBar, setCollapseSidebar] = useState(true);

    const toogleSideBar = () => {
        if (collapseSideBar) {
            setCollapseSidebar(false)
        } else {
            setCollapseSidebar(true)
        }
    }

    return (
        <div class="leftpane">
            <ProSidebar collapsed={collapseSideBar} >
                <SidebarContent style={{ backgroundColor: '#0B0B0D' }}>
                    <Menu icon={<CheckSquareFill />}>
                        <MenuItem icon={<GridFill />} active={true}> <Link to="/dashboard" className="nav-link"> Dashboard</Link></MenuItem>
                    </Menu>
                </SidebarContent>
                <SidebarFooter style={{ backgroundColor: '#0B0B0D' }}>
                    <div style={{ float: 'right', 'paddingRight': '15px', 'paddingTop': '15px', 'paddingBottom': '15px' }}>
                        {collapseSideBar ? <ChevronDoubleRight width="25" height="25" onClick={toogleSideBar} style={{ color: 'white' }} /> : <ChevronDoubleLeft width="25" height="25" onClick={toogleSideBar} style={{ color: 'white' }} />}
                    </div>
                </SidebarFooter>
            </ProSidebar>
        </div >
    );
}

export default Sidebar;
