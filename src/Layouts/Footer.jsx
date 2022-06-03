import React from 'react'
import '../Styles/Footer.scss'

const Footer = () => {
  return (
    <footer className='py-3'>
      <div className='container footer d-flex justify-content-center py-5'>
      <div class='d-flex col-12 row mt-1 justify-content-between'>
          <div class='col-6 col-sm-3 col-lg-2'>
            <strong>Where to Buy</strong>
            <ul class='mt-3'>
              <li>Mac</li>
              <li>iPad</li>
              <li>iPhone</li>
              <li>Watch</li>
              <li>Airpods</li>
              <li>TV & Home</li>
              <li>iPod touch</li>
            </ul>
          </div>
          <div class='col-6 col-sm-3 col-lg-2'>
            <strong>Register to win</strong>
            <ul class='mt-3'>
              <li>Apple Music</li>
              <li>Apple TV+</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple Arcade</li>
              <li>iCloud</li>
              <li>Apple One</li>
              <li>Apple Pay</li>
              <li>Apple Books</li>
              <li>Apple Podcasts</li>
              <li>App Store</li>
            </ul>
          </div>
          <div class='col-6 col-sm-4 col-lg-2'>
            <strong>Software updates</strong>
            <ul class='mt-3'>
            <li>Apple Music</li>
              <li>Apple TV+</li>
              <li>Apple Fitness+</li>
              <li>Apple News+</li>
              <li>Apple Arcade</li>
              <li>iCloud</li>
              <li>Apple One</li>
              <li>Apple Pay</li>
              <li>Apple Books</li>
              <li>Apple Podcasts</li>
              <li>App Store</li>
            </ul>
          </div>
          <div class='col-6 col-sm-5 col-lg-2'>
            <strong>Developer World</strong>
            <ul class='mt-3'>
              <li>Genius Bar</li>
              <li>Today at Apple</li>
              <li>Apple Summer Camp</li>
              <li>Apple Store App</li>
              <li>Refurbished and</li>
              <li>Clearance</li>
              <li>Financing</li>
              <li>Apple Trade in</li>
              <li>Order Status</li>
              <li>Shopping Help</li>
            </ul>
          </div>
          <div class='col-6 col-sm-5 col-lg-2'>
            <strong>Home Page archives</strong>
            <ul class='mt-3'>
              <li>Apple Leadership</li>
              <li>Career Opportunities</li>
              <li>Warranty</li>
              <li>Investords</li>
              <li>Ethics & Compliance</li>
              <li>Events</li>
              <li>European Job Creation</li>
              <li>Contact Apple</li>
            </ul>
          </div>
        </div>
      </div>
      <hr style={{height: 3, color: 'black'}} />
      <p className='text-center'>&copy;2022 @thescribe990. All rights reserved. Privacy Policy . Term Condition</p>
    </footer>
  )
}

export default Footer