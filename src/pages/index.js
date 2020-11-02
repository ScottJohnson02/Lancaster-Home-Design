import React from "react"
import Layout from "../components/layout"
import { useStaticQuery, Link, graphql } from "gatsby"

export default function Home({ data }) {
  return(



  <div>
    <Layout>

    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="http://fonts.googleapis.com/css?family=Oswald:700|Droid+Serif:400,700italic" rel="stylesheet" type="text/css" />
    </head>
      <div class="banner">
        <img  src="/images/banner/shadow.jpg" alt="banner "/>
        <h2>Lancaster Home Design</h2>
        <h3>Making your house your home</h3>
      </div>

      <div class="services">
        <div class="service">
          <h2>Interiors</h2>
          <img src="https://source.unsplash.com/random/250x250" alt="" />
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nibh sed pulvinar proin gravida hendrerit. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Augue mauris augue neque gravida
            in fermentum et. Nunc lobortis mattis aliquam faucibus purus in massa. Id faucibus nisl tincidunt eget nullam non. Eleifend donec pretium
            vulputate sapien nec sagittis. Felis eget velit aliquet sagittis id consectetur purus ut. Phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt. Auctor eu augue ut lectus arcu. Urna porttitor rhoncus dolor purus. Dignissim suspendisse in est ante in.
          </p>
        </div>
        <div class="service">
          <h2>Exteriors </h2>
          <img src="https://source.unsplash.com/random/250x250" alt="" />
          <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nibh sed pulvinar proin gravida hendrerit. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Augue mauris augue neque gravida
            in fermentum et. Nunc lobortis mattis aliquam faucibus purus in massa. Id faucibus nisl tincidunt eget nullam non. Eleifend donec pretium
            vulputate sapien nec sagittis. Felis eget velit aliquet sagittis id consectetur purus ut. Phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt. Auctor eu augue ut lectus arcu. Urna porttitor rhoncus dolor purus. Dignissim suspendisse in est ante in.
          </p>
        </div>
        <div class="service">
          <h2>Consulting</h2>
          <img src="https://source.unsplash.com/random/250x250" alt="" />
          <p>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Nibh sed pulvinar proin gravida hendrerit. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Augue mauris augue neque gravida
            in fermentum et. Nunc lobortis mattis aliquam faucibus purus in massa. Id faucibus nisl tincidunt eget nullam non. Eleifend donec pretium
            vulputate sapien nec sagittis. Felis eget velit aliquet sagittis id consectetur purus ut. Phasellus egestas tellus rutrum tellus pellentesque
            eu tincidunt. Auctor eu augue ut lectus arcu. Urna porttitor rhoncus dolor purus. Dignissim suspendisse in est ante in.
          </p>
        </div>

      </div>

      <h2>Why Us?</h2>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed pulvinar proin gravida hendrerit. Egestas tellus rutrum tellus pellentesque eu tincidunt tortor. Augue mauris augue neque gravida in fermentum et. Nunc lobortis mattis aliquam faucibus purus in massa. Id faucibus nisl tincidunt eget nullam non. Eleifend donec pretium vulputate sapien nec sagittis. Felis eget velit aliquet sagittis id consectetur purus ut. Phasellus egestas tellus rutrum tellus pellentesque eu tincidunt. Auctor eu augue ut lectus arcu. Urna porttitor rhoncus dolor purus. Dignissim suspendisse in est ante in.

        Neque convallis a cras semper. In hac habitasse platea dictumst vestibulum. Morbi enim nunc faucibus a pellentesque. Vitae sapien pellentesque habitant morbi tristique. Tincidunt id aliquet risus feugiat. Orci eu lobortis elementum nibh tellus molestie nunc non. Diam volutpat commodo sed egestas egestas fringilla phasellus faucibus scelerisque. Facilisi cras fermentum odio eu feugiat pretium. Bibendum enim facilisis gravida neque convallis a. Convallis a cras semper auctor neque vitae tempus. Faucibus interdum posuere lorem ipsum.
      </p>
  </Layout>
</div>
  )
}
