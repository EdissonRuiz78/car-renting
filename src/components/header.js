import React from "react"

//CSS
import { css } from "@emotion/core"

//Components
import NavBar from "./nav"

const Header = () => {
  return (
    <header
      css={css`
        background-color: #333;
      `}
    >
      <div
        css={css`
          max-width: 1200px;
          margin: 0 auto;

          @media (min-width: 768px) {
            display: flex;
            align-items: center;
            justify-content: space-between;
          }
        `}
      >
        <h1
          css={css`
            color: #fff;
            text-align: center;
          `}
        >
          LUX CARS RENTING
        </h1>
        <NavBar />
      </div>
    </header>
  )
}

export default Header
