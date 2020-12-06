import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { CheckSquareFill, GridFill } from 'react-bootstrap-icons';

function Sidebar() {

    return (
        <div class="leftpane">
            <ProSidebar collapsed={false} >
                <SidebarContent>
                    <Menu icon={<CheckSquareFill />}>
                        <MenuItem icon={<GridFill />}> <a href="/register">Dashboard</a></MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;
