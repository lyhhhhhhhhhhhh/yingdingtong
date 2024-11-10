import {MenuProps} from "antd";
import {LogoutOutlined, UserOutlined} from "@ant-design/icons";

const DropMenuItems: MenuProps['items'] = [
    {
        key: '/userCenter',
        label: '个人中心',
        icon:<UserOutlined/>
    },
    {
        key: '/logout',
        label: '退出登录',
        icon: <LogoutOutlined />,
    },

];

export default DropMenuItems;