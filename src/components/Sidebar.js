import 'bootstrap/dist/css/bootstrap.min.css';
import { ProSidebar, Menu, MenuItem, SubMenu, SidebarContent } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { CheckSquareFill, GridFill, HddRackFill } from 'react-bootstrap-icons';
import Login from './Login';
import Register from './Register';

function Sidebar() {

    return (
        <ProSidebar style={{ backgroundColor: 'black', overflowY: 'scroll' }} collapsed={false}>
            <SidebarContent>
                <Menu icon={<CheckSquareFill />}>
                    <MenuItem icon={<GridFill />}> <a href="/register">Dashboard</a></MenuItem>
                    <SubMenu title="Components" icon={<HddRackFill />}>
                        <MenuItem>Component 1</MenuItem>
                        <MenuItem>Component 2</MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
        </ProSidebar>
    );
}

export default Sidebar;
