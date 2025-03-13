import React, { useEffect, useState } from "react";
import './Displayinfor.scss'
import logo from './../logo.svg';

const Displayinfor = (props) => {

    const { listUser } = props;

    const [isShowHideLisUser, setShowHideListUser] = useState (true);

    const handleShowHideListUser = () => {

        setShowHideListUser(!isShowHideLisUser);
    }

    console.log(">>> call me render")

    useEffect ( 
        () => {
        // setTimeout(() => {
        //     document.title = 'phan tan quoc'
            
        // }, 3000);
        if (listUser.length ===0) {
            alert('da xoa het user')
        }
        console.log('>>> call me useEffect')
    },[listUser]
);


    return (
        <div className="display-infor-container">
            <span onClick={() => handleShowHideListUser()}>
            {isShowHideLisUser === true ? "hide list user":"show list user"}
            </span>
            {isShowHideLisUser &&
                <>
                    {listUser.map((user, index) => {
                        return (
                            <div>
                                <div key={user.id} className={+user.age > 21 ? "green" : "red"}>
                                    <div>
                                        <div>my name {user.name} </div>
                                        <div> age {user.age}</div>
                                    </div>
                                    <div>
                                        <button onClick={() => props.handleDeleteUser(user.id)}>Xóa</button>
                                    </div>
                                    <hr></hr>

                                </div>

                            </div>
                        )
                    })}
                </>
            }
        </div>
    )

}
export default Displayinfor