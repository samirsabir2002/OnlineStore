import { Badge, IconButton } from "@mui/material";
import * as React from "react";
import { useSelector } from "react-redux";
import { styled } from "@mui/material/styles";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

function ResponsiveAppBar() {
  const { cart } = useSelector((store) => store);
  let CartItem = cart.length;
  console.log(
    "🚀 ~ file: Navbar.jsx:8 ~ ResponsiveAppBar ~ cart:",
    cart.length
  );
  const StyledBadge = styled(Badge)(({ theme }) => ({
    "& .MuiBadge-badge": {
      right: -3,
      top: 13,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px"
    }
  }));
  return (
    <header className="p-3 mb-3 border-bottom">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
          >
            <svg
              className="bi me-2"
              width="40"
              height="32"
              role="img"
              aria-label="Bootstrap"
            >
              <use xlinkHref="#bootstrap"></use>
            </svg>
          </a>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2 link-secondary">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-body-emphasis">
                Men Products
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2 link-body-emphasis">
                Women Products
              </a>
            </li>
            <li className=" ">
              <form
                className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3  mx-auto"
                role="search"
              >
                <input
                  type="search"
                  className="form-control"
                  placeholder="Search..."
                  aria-label="Search"
                />
              </form>
            </li>
          </ul>

          <div className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3">
            <a
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasExample"
              aria-controls="offcanvasExample"
              href="#"
              className="nav-link px-2 link-body-emphasis"
            >
              {" "}
              <IconButton aria-label="cart">
                <StyledBadge badgeContent={CartItem} color="secondary">
                  <ShoppingCartIcon />
                </StyledBadge>
              </IconButton>
              {/* Cart */}
            </a>
          </div>

          <div className="dropdown text-end">
            <a
              href="#"
              className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src="https://github.com/mdo.png"
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </a>
            <ul className="dropdown-menu text-small">
              <li>
                <a className="dropdown-item" href="#">
                  New project...
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Settings
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Profile
                </a>
              </li>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
export default ResponsiveAppBar;
