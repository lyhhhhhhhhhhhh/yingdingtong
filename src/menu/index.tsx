import Link from "next/link";
import {HomeOutlined, SelectOutlined, TableOutlined} from "@ant-design/icons";
import MovieIcon from "../../public/icon/MovieIcon";
import CinemaIcon from "../../public/icon/CinemaIcon";

export const item = [
    {
        key: '/',
        label: <Link href={"/"}>首页</Link>,
        icon: <HomeOutlined/>,
    },
    {
        key: '/movies',
        label: <Link href={"/movies"}>电影</Link>,
        icon: <MovieIcon type={"icon-movie"}/>,
    },
    {
        key: '/cinema',
        label: <Link href={"/cinema"}>影院</Link>,
        icon: <MovieIcon type={"icon-yingyuan"}/>,
    },

    {
        key: '/testTable',
        label: <Link href={"/testTable"}>测试表格页面</Link>,
        icon: <TableOutlined/>
    },
    {
        key: '/testSelectSeat',
        label: <Link href={"/testSelectSeat"}>测试电影选座页面</Link>,
        icon: <SelectOutlined/>
    }


]