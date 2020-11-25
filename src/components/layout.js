
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
        <div class="navigation-bar" id="myTopnav">
          <div id="navigation-container">
            <img src="/images/logo.png" alt="logo" style={{  }}
            />
            <ul class="nav-ul">
              <div class="dropdown">
                <button class="dropbtn">
                  <a href="/contact">Contact Us</a>

                </button>

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
                </div>
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
                </div>
              </div>

              <div class="dropdown">
                <button class="dropbtn">
                  <a href="/interior">Interior</a>
                <i class="arrow down"></i>
                </button>
                <div class="dropdown-content">
                  <a href="/bathrooms">Bathrooms</a>
                  <a href="/kitchens">Kitchens</a>
                  <a href="/remodel">Full Remodel</a>
                </div>
              </div>


              <div class="dropdown">
                <button class="dropbtn">
                  <a href="/">Home</a>

                </button>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                  <i class="fa fa-bars"></i>
                </a>


              </div>


            </ul>
          </div>

        </div>

      </header>
  {children}</div>
}
