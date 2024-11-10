"use client"
import {useSelector} from "react-redux";

const UserCenter = () => {

    const loginUser = useSelector((state) => state.loginUser)

    return (
        <div>
            {JSON.stringify(loginUser)}
            111
        </div>
    );
};

export default UserCenter;