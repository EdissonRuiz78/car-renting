import React from "react"
import { Link } from "gatsby"

//CSS
import styled from "@emotion/styled"

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  padding-bottom: 3rem;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`
const NavLink = styled(Link)`
  color: #fff;
  padding: 1rem;
  margin-right: 1rem;
  font-size: 1.6rem;
  font-weight: 700;
  line-height: 1rem;
  font-family: "PT Sans", sans-serif;
  text-decoration: none;

  &:last-of-type {
    margin-right: 0;
  }

  &.active {
    border-bottom: 2px solid #fff;
  }
`

const NavBar = () => {
  return (
    <Nav>
      <NavLink to={"/"} activeClassName="active">
        Home
      </NavLink>
      <NavLink to={"/about"} activeClassName="active">
        About
      </NavLink>
    </Nav>
  )
}

export default NavBar
