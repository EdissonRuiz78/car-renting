import React from "react"

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <footer>
      <p className="mt-4 text-center">
        Copyright &copy; {year} | Luxury Car Rental
      </p>
    </footer>
  )
}

export default Footer
