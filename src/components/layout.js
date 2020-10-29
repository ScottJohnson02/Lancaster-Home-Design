
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

        <ul class="nav-ul">
          <ListLink to="/">Home</ListLink>
          <div class="dropdown">
            <button class="dropbtn">
              <a href="/interior">Interior</a>
            <i class="arrow down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/bathrooms">Bathrooms</a>
              <a href="/kitchens">Kitchens</a>
              <a href="remodel">Full Remodel</a>
            </div>`
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <a href="/exterior">Exterior</a>
            <i class="arrow down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/siding">Siding</a>
              <a href="/decks">Decks & Porches</a>
              <a href="/windows">Windows & Doors</a>
              <a href="/roofing">Roofing</a>
            </div>`
          </div>
          <div class="dropdown">
            <button class="dropbtn">
              <a href="/consulting">Consulting</a>
            <i class="arrow down"></i>
            </button>
            <div class="dropdown-content">
              <a href="/design">Design & Build</a>
              <a href="/supply">Supply & Install</a>
              <a href="/management">Project Management</a>
              <a href="/engineering">Engineering Services</a>
            </div>`
          </div>

          <ListLink to="/contact-us">Contact Us</ListLink>
        </ul>
      </header>
  {children}</div>
}
