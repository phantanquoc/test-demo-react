import React, { useState } from "react";
// class AddUserInfor extends React.Component{
//     state = {
//         name: '',
//         address: 'dldl',
//         age: ''
//     };

//     handleClick = (event) => {
//         // console.log("click button")
//         console.log (this.state.name);
        
//         this.setState({
//             name: 'erick',
//             age: Math.floor((Math.random()*100)+1)})

//     };
//     handleOnMouseOver(event) {
//         console.log(event.pageX);
//     }
//     handleOnChangeInput = (event) =>{
//         // console.log(event.target.value)
//         this.setState({
//             name: event.target.value
//         })

//     }

//     handleOnChangeAge = (event) =>{
//         // console.log(event.target.value)
//         this.setState({
//             age: event.target.value
//         })

//     }
//     handleOnSubmit =(event)=> {
//         event.preventDefault();
//         console.log(this.state)
//         this.props.handleAddNewUser({
//             id: Math.floor((Math.random() * 101) +1),
//             name: this.state.name,
//             age: this.state.age,
//         });

//     }
//     render() {
//         return(
//         <div>
//             my name is {this.state.name} and  {this.state.age}
//                 {/* <button onClick={(event)=>{this.handleClick(event)}}>clickme</button>
//                 <button onMouseOver={this.handleOnMouseOver}>hover</button> */}
//                 <form
//                 onSubmit={(event) => this.handleOnSubmit(event)}>
//                     <label>your name</label>
//                     <input
//                     value={this.state.name}
//                     type="text"
//                     onChange={(event)=>{this.handleOnChangeInput(event)}}
//                     />

//                     <label>your Age</label>
//                     <input
//                     value={this.state.age}
//                     type="text"
//                     onChange={(event)=>{this.handleOnChangeAge(event)}}
//                     />
//                     <button>submit</button>
//                 </form>
//         </div>
//         )
//     }

// }

const AddUserInfor = (props) => {

    //     state = {
    //     name: '',
    //     address: 'dldl',
    //     age: ''
    // };

    const [name, setName] = useState('');
    const [address, setAddress] = useState('dldl');
    const [age, setAge] = useState('');


    // handleClick = (event) => {
    //     // console.log("click button")
    //     console.log (this.state.name);
        
    //     this.setState({
    //         name: 'erick',
    //         age: Math.floor((Math.random()*100)+1)})

    // };
    // handleOnMouseOver(event) {
    //     console.log(event.pageX);
    // }


    const handleOnChangeInput = (event) =>{
        // this.setState({
        //     name: event.target.value
        // })
    setName(event.target.value)

    }

    const handleOnChangeAge = (event) =>{
        // console.log(event.target.value)
        // this.setState({
        //     age: event.target.value
        // })
        setAge(event.target.value)

    }
    const handleOnSubmit =(event)=> {
        event.preventDefault();
        props.handleAddNewUser({
            id: Math.floor((Math.random() * 101) +1),
            name: name,
            age: age,
        }
    );

    }
    return(

        <div>
            my name is {name} and  {age}
                {/* <button onClick={(event)=>{this.handleClick(event)}}>clickme</button>
                <button onMouseOver={this.handleOnMouseOver}>hover</button> */}
                <form
                onSubmit={(event) => handleOnSubmit(event)}>
                    <label>your name</label>
                    <input
                    value={name}
                    type="text"
                    onChange={(event)=>{handleOnChangeInput(event)}}
                    />

                    <label>your Age</label>
                    <input
                    value={age}
                    type="text"
                    onChange={(event)=>{handleOnChangeAge(event)}}
                    />
                    <button>submit</button>
                </form>
        </div>
        
    )

}

export default AddUserInfor;