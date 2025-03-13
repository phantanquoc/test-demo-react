
import React, { useState } from "react";
import AddUserinfor from "./AddUserinfor";
import Displayinfor from "./Displayinfor";

// class MyComponent extends React.Component{

//     state = {
//         listUser: [
//             { id: 1, name: "quoc", age: "20" },
//             { id: 2, name: "nam", age: "22" },
//             { id: 3, name: "tuan", age: "25" }
//         ]
//     };

    
//     handleAddNewUser = (userObj) => {
//         console.log (">>>check data :", userObj)
//         this.setState({
//             listUser: [userObj,  ...this.state.listUser]

//         })
//     }
//     handleDeleteUser = (userId) => {
//         let listUsersClone = this.state.listUser;
//         listUsersClone = listUsersClone.filter(item => item.id !== userId)
//         this.setState({
//             listUser :listUsersClone
//         })
//     };
    
//     render() {
//         //JSXJSX
//         return (
//             <div>  
//                 <AddUserinfor handleAddNewUser={this.handleAddNewUser}></AddUserinfor>
//                 <br/>
//                 <Displayinfor
//                 handleDeleteUser = {this.handleDeleteUser}
//                 listUser={this.state.listUser}
//                 ></Displayinfor>
//             </div>
//         )
//     }
// }
const MyComponent = () => {
    const [listUser, setListUser] = useState(
        [
            { id: 1, name: "quoc", age: "20" },
            { id: 2, name: "nam", age: "22" },
            { id: 3, name: "tuan", age: "25" }
        ]
    );


      const handleAddNewUser = (userObj) => {
        console.log (">>>check data :", userObj)
        setListUser([userObj,  ...listUser]);
        };

        const handleDeleteUser = (userId) => {
            setListUser(listUser.filter((item) => item.id !== userId));
        };

          return (
            <div>
              <AddUserinfor handleAddNewUser={handleAddNewUser} />
              <br />
              <Displayinfor handleDeleteUser={handleDeleteUser} listUser={listUser} />
            </div>
          );
        };
export default MyComponent;