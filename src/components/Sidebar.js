import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { CheckSquareFill, GridFill } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
function Sidebar() {

    return (
        <div class="leftpane">
            <ProSidebar collapsed={false} >
                <SidebarContent style={{ backgroundColor: 'black' }}>
                    <Menu icon={<CheckSquareFill />}>
                        <MenuItem icon={<GridFill />}> <Link to="/dashboard" className="nav-link">Dashboard</Link></MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;
