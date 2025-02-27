import { Link } from "react-router-dom"

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
      <div className="container-fluid">

        <Link className="navbar-brand" to={"/"}>
          Home
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link aria-current="page" className="nav-link active" to={"/users"}>
                Users CRUD
              </Link>
            </li>


            <li className="nav-item">
              <Link aria-current="page" className="nav-link active" to={"/conditional-rendering"}>
                Conditional Rendering
              </Link>
            </li>


            <li className="nav-item">
              <Link aria-current="page" className="nav-link active" to={"/multi-step-form"}>
                Multi Step Form
              </Link>
            </li>

          </ul>

          <form className="d-flex" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>

  )
}

export default Header