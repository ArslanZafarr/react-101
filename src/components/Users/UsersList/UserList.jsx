import { Link } from 'react-router-dom';
import { Table, Button } from 'rsuite';
import { useSelector, useDispatch } from 'react-redux';
import { deleteUser } from '../../../redux/slices/usersSlice';

const { Column, HeaderCell, Cell } = Table;

const UserList = () => {
    const users = useSelector((state) => state.users.users);
    const dispatch = useDispatch();

    const handleDelete = (id) => {
        dispatch(deleteUser(id));
    };

    return (
        <div className='container'>
            <Table height={400} data={users}>
                <Column width={60} align="center" fixed>
                    <HeaderCell>Id</HeaderCell>
                    <Cell dataKey="id" />
                </Column>

                <Column width={150}>
                    <HeaderCell>Name</HeaderCell>
                    <Cell dataKey="firstName" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Gender</HeaderCell>
                    <Cell dataKey="gender" />
                </Column>

                <Column width={100}>
                    <HeaderCell>Age</HeaderCell>
                    <Cell dataKey="age" />
                </Column>

                <Column width={80} fixed="right">
                    <HeaderCell>Edit</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Link to={`/users/edit-user/${rowData.id}`}>
                                <Button appearance="link">Edit</Button>
                            </Link>
                        )}
                    </Cell>
                </Column>

                <Column width={80} fixed="right">
                    <HeaderCell>Delete</HeaderCell>
                    <Cell style={{ padding: '6px' }}>
                        {rowData => (
                            <Button appearance="link" onClick={() => handleDelete(rowData.id)}>
                                Delete
                            </Button>
                        )}
                    </Cell>
                </Column>
            </Table>
        </div>
    );
};

export default UserList;
