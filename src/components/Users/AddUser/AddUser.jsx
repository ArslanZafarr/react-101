// import { useDispatch } from 'react-redux';
// import { addUser } from '../../../redux/slices/usersSlice';
// import { v4 as uuidv4 } from 'uuid';
// import "./AddUser.css";

// const AddUser = () => {
//     const dispatch = useDispatch();

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const newUser = {
//             id: uuidv4(),
//             firstName: e.target.firstName.value,
//             age: Number(e.target.age.value),
//             gender: e.target.gender.value,
//         };
//         dispatch(addUser(newUser));
//         e.target.reset(); 
//     };

//     return (
//         <section>
//             <div className="container">
//                 <div className="add-user-heading">
//                     <h1>Add User</h1>
//                 </div>

//                 <div className="form-wrapper">
//                     <form className="user-form" onSubmit={handleSubmit}>
//                         <div className="user-input-controller">
//                             <label>Name</label>
//                             <input type="text" name="firstName" placeholder="Name" required />
//                         </div>

//                         <div className="user-input-controller">
//                             <label>Age</label>
//                             <input type="number" name="age" placeholder="Age" required />
//                         </div>

//                         <div className="user-input-controller">
//                             <label>Gender</label>
//                             <select name="gender" required>
//                                 <option value="male">Male</option>
//                                 <option value="female">Female</option>
//                             </select>
//                         </div>

//                         <button type="submit">Submit</button>
//                     </form>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default AddUser;



import { useDispatch } from 'react-redux';
import { addUser } from '../../../redux/slices/usersSlice';
import { v4 as uuidv4 } from 'uuid';
import { toast } from 'react-hot-toast'; // Import toast from react-hot-toast
import "./AddUser.css";

const AddUser = () => {
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            id: uuidv4(),
            firstName: e.target.firstName.value,
            age: Number(e.target.age.value),
            gender: e.target.gender.value,
        };
        dispatch(addUser(newUser));
        toast.success("User added successfully!"); 
        e.target.reset(); 
    };

    return (
        <section>
            <div className="container">
                <div className="add-user-heading">
                    <h1>Add User</h1>
                </div>

                <div className="form-wrapper">
                    <form className="user-form" onSubmit={handleSubmit}>
                        <div className="user-input-controller">
                            <label>Name</label>
                            <input type="text" name="firstName" placeholder="Name" required />
                        </div>

                        <div className="user-input-controller">
                            <label>Age</label>
                            <input type="number" name="age" placeholder="Age" required />
                        </div>

                        <div className="user-input-controller">
                            <label>Gender</label>
                            <select name="gender" required>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>
                        </div>

                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default AddUser;
