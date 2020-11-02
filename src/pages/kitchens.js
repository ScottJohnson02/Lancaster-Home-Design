import React from "react"
import JSONData from "../../data/kitchens.json"
import Image from "gatsby-image"
import Layout from "../components/layout"

const JSONbuildtime = () => (
<div>
<Layout>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="http://fonts.googleapis.com/css?family=Oswald:700|Droid+Serif:400,700italic" rel="stylesheet" type="text/css" />
  </head>
  <h1>{JSONData.title}</h1>
  <div class="projects">
    {JSONData.content.map((data, index) => {
      return(

      <div class="project">
        <h2>{data.title}</h2>
        <div class ="photos">
        {data.gallery.map(image => {
                return (
                  <img
                    src={image}
                    alt={`gallery_item_${image.image}`}
                    style={{ width: "400px" }}
                  />
                )
            })}
        </div>
        <p>{data.description}</p>


      </div>
      )

    })}
  </div>

</Layout>
</div>
)






export default JSONbuildtime
