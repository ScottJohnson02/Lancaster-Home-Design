
import React from "react"
import "./layout.css"

import { Link } from "gatsby"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default function Layout({ children }) {

  return <div>
  <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/">
          <h1>Lancaster Home Design </h1>
        </Link>

        <ul>
          <ListLink to="/">Home</ListLink>
          <div class="dropdown">
            <button class="dropbtn">
              <a href="/interior">Interior</a>
            <i class="arrow down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Bathrooms</a>
              <a href="#">Kitchens</a>
              <a href="#">Full Remodel</a>
            </div>`
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <a href="/exterior">Exterior</a>
            <i class="arrow down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Siding</a>
              <a href="#">Decks & Porches</a>
              <a href="#">Windows & Doors</a>
              <a href="#">Roofing</a>
            </div>`
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <a href="/consulting">Consulting</a>
            <i class="arrow down"></i>
            </button>
            <div class="dropdown-content">
              <a href="#">Design & Build</a>
              <a href="#">Supply & Install</a>
              <a href="#">Project Management</a>
              <a href="#">Engineering Services</a>
            </div>`
          </div>

          <ListLink to="/contact-us">Contact Us</ListLink>
        </ul>
      </header>
  {children}</div>
}
