import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser } from '../../../redux/slices/usersSlice';
import "./EditUser.css";
import toast from 'react-hot-toast';

const EditUserComponent = () => {
    const { id } = useParams();
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const user = users.find(user => user.id === id);

    const handleSubmit = (e) => {
        e.preventDefault();
        const updatedUser = {
            id,
            firstName: e.target.firstName.value,
            age: Number(e.target.age.value),
            gender: e.target.gender.value,
        };
        dispatch(updateUser(updatedUser));
        toast.success("User edit successfully!"); 
        navigate('/users');
    };

    return (
        <section>
            <div className="container">
                <div className="add-user-heading">
                    <h1>Edit User</h1>
                </div>

                <div className="form-wrapper">
                    <form className="user-form" onSubmit={handleSubmit}>
                        <div className="user-input-controller">
                            <label>Name</label>
                            <input type="text" name="firstName" defaultValue={user.firstName} required />
                        </div>

                        <div className="user-input-controller">
                            <label>Age</label>
                            <input type="number" name="age" defaultValue={user.age} required />
                        </div>

                        <div className="user-input-controller">
                            <label>Gender</label>
                            <select name="gender" defaultValue={user.gender} required>
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

export default EditUserComponent;
