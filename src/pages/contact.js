import React from "react"
import Layout from "../components/layout"


export default function Home() {
  return(



  <div>
  <Layout>
      <div class="container">
    			<h1>contact us</h1>
    	<div class="row">
    			<h4>We'd love to hear from you!</h4>
    	</div>
      <form action="https://formspree.io/f/xzbkardo" method="POST">
        <div class="row input-container">
            <div class="col-xs-12">
              <div class="styled-input wide">
                <input type="text" name="Name"required />
                <label>Name*</label>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="styled-input">
                <input type="text" name="email" required />
                <label>Email*</label>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="styled-input" style={{ float: "right" }} >
                <input type="text" name="phone" />
                <label>Phone Number</label>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="styled-input wide">
                <input type="text" name="type" required />
                <label>Project Type*</label>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="styled-input wide">
                <input type="text"name="subject" required />
                <label>Subject*</label>
              </div>
            </div>
            <div class="col-xs-12">
              <div class="styled-input wide">
                <textarea required name="message"></textarea>
                <label>Message*</label>
              </div>


              </div>
            <div class="col-xs-12">
              <div >
                  <button class="btn-lrg submit-btn"type="submit">Send</button>

              </div>
            </div>
            </div>
        </form>
    	  </div>


  </Layout>
  </div>
  )
}
