import React from 'react'
import {AiFillInstagram,AiFillYoutube,AiFillGithub} from "react-icons/ai"

const Footer = () => {
  return (
    <>
        <footer>
            <div>
                <h2>BTECH Burger Wala</h2>
                <p>Hope to deliver the best.</p>
                <br />
                <em>We give attention to genuine feedback.</em>
                <strong>All rights reserved @btechburgerwala</strong>
            </div>

            <aside>
                <h4>Follow Us</h4>
                <a href="#"><AiFillGithub /></a>
                <a href="#"><AiFillInstagram /></a>
                <a href="#"><AiFillYoutube /></a>
            </aside>
        </footer>
    </>
  )
}

export default Footer