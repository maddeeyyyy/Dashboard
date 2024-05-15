import React from 'react'

function NavNotice() {
  return (
    <li className="nav-item dropdown">
        <a className="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
            <i className="bi bi-bell"></i>
            <span className="badge bg-primary badge-number">4</span>
        </a>
        
        <ul className="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
            <li className="dropdown-header">
                You have 4 new notifications
                <a href="#">
                    <span className="badge rounded-pill bg-primary p-2 ms-2">
                        View all
                    </span>
                </a>
            </li>
            <li>
                <hr className="dropdown-divider" />
            </li>

            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Loreum Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider"></hr>
            </li>

            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Beta Loreum Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider"></hr>
            </li>

            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Sita Loreum Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider"></hr>
            </li>

            <li className="notification-item">
                <i className="bi bi-exclamation-circle text-warning"></i>
                <div>
                    <h4>Dicta Loreum Ipsum</h4>
                    <p>Quae dolorem earum veritatis oditseno</p>
                    <p>30 min. ago</p>
                </div>
            </li>

            <li>
                <hr className="dropdown-divider"></hr>
            </li>

            <li className="dropdown-footer">
                <a href="#">Show all notifications</a>
            </li>
        </ul>
    </li>
  )
}

export default NavNotice