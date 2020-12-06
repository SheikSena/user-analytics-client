import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { CheckSquareFill, GridFill, HddRackFill } from 'react-bootstrap-icons';

function Sidebar() {

    return (
        <div class="leftpane">
            <ProSidebar collapsed={false} >
                <SidebarContent>
                    <Menu icon={<CheckSquareFill />}>
                        <MenuItem icon={<GridFill />}> <a href="/register">Dashboard</a></MenuItem>
                        <SubMenu title="Components" icon={<HddRackFill />}>
                            <MenuItem>Component 1</MenuItem>
                            <MenuItem>Component 2</MenuItem>
                        </SubMenu>
                        <MenuItem icon={<GridFill />}>Component 1</MenuItem>
                        <MenuItem icon={<GridFill />}>Component 2</MenuItem>
                        <MenuItem icon={<GridFill />}>Component 1</MenuItem>
                        <MenuItem icon={<GridFill />}>Component 2</MenuItem>
                        <MenuItem icon={<GridFill />}>Component 1</MenuItem>
                        <MenuItem icon={<GridFill />}>Component 2</MenuItem>
                        <MenuItem icon={<GridFill />}>Component 1</MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                        <MenuItem></MenuItem>
                    </Menu>
                </SidebarContent>
            </ProSidebar>
        </div>
    );
}

export default Sidebar;
