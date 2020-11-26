import React from "react"
import Layout from "../components/layout"


export default function Home() {
  return(



  <div>
  <Layout>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="http://fonts.googleapis.com/css?family=Oswald:700|Droid+Serif:400,700italic" rel="stylesheet" type="text/css" />
    </head>
      <h2>Interiors</h2>
      <div class="breakdown">
        <div class="service">
          <h2><a href="/bathrooms">Bathrooms</a></h2>
          <img src="https://source.unsplash.com/random/250x250" alt="" />
          <ul>
            <li>Renovation / Remodel</li>
            <li>Sinks</li>
            <li>Lighting</li>
            <li>Tile</li>
            <li>Flooring</li>
          </ul>
        </div>
        <div class="service">
          <h2><a href="/kitchens">Kitchens</a> </h2>
          <img src="https://source.unsplash.com/random/250x250" alt="" />
          <ul>
            <li> Showers</li>
            <li> Tiling</li>
            <li> Sinks</li>
            <li> Lighting</li>
          </ul>
        </div>
        <div class="service">
          <h2><a href="/remodel">Full Remodels</a></h2>
          <img src="https://source.unsplash.com/random/250x250" alt="" />
          <ul>
            <li> test</li>
            <li> test</li>
            <li> test</li>
          </ul>
        </div>
      </div>

  </Layout>
  </div>
  )
}
