import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getUserToken } from '../../../helpers/comman_helper';
const EditorsRoute = (props) => {
    const history = useHistory();

    let Component = props.component;

    useEffect(() => {
        if (getUserToken()) {
            if (getUserToken().data.role === 1) { // 1 = Admin user // 0 = Normal user
                history.push("/admin/dashboard");
            } else {
                history.push("/");
            }
        } else {
            history.push("/");
        }
    }, []);
    return (
        <>
            <Component />
        </>
    );
}

export default EditorsRoute;