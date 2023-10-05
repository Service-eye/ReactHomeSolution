import React from 'react'

const AdminSidebar = () => {
    return (
        <>
            <div>
                <h1 className="visually-hidden">Sidebars examples</h1>
                <div className="d-flex flex-column flex-shrink-0 p-3 text-bg-light" style={{ width: 280 }}>
                    <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                        <span className="fs-4 text-dark ">Sidebar</span>
                    </a>
                    <hr />
                    <ul className="nav nav-pills flex-column mb-auto">
                        <li className="nav-item ">
                            <a href="#" className="nav-link active" aria-current="page">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                Dashboard
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                Orders
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                Products
                            </a>
                        </li>
                        <li>
                            <a href="#" className="nav-link text-dark">
                                Customers
                            </a>
                        </li>
                    </ul>
                    <hr />
                    <div className="dropdown">
                        <a href="#" className="d-flex align-items-center text-dark text-decoration-none dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src="https://github.com/mdo.png" alt width={32} height={32} className="rounded-circle me-2" />
                            <strong>User</strong>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                            {/* <li><a className="dropdown-item" href="#">New project...</a></li>
                            <li><a className="dropdown-item" href="#">Settings</a></li>
                            <li><a className="dropdown-item" href="#">Profile</a></li> */}
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#">Sign out</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="b-example-divider b-example-vr"></div>



        </>
    )
}

export default AdminSidebar
