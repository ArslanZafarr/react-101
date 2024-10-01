import { Link } from "react-router-dom"
import "./users.css"
import UserList from "./UsersList/UserList"

const UsersIndex = () => {
  return (
    <>
      <section>
        <div
          className="container"
        >
          <div
            className="users-heading"
          >

            <h1>Users</h1>

            <Link
              to={"/users/add-new-user"}
            >
              <button>Add User</button>
            </Link>

          </div>

        </div>

        <UserList />

      </section>


    </>
  )
}

export default UsersIndex