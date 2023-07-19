import React from 'react'
import { Link } from "react-router-dom"
import { RiFindReplaceLine } from "react-icons/ri"
import me from "../../assets/KP.jpg"

function About() {
  return (
    <section className="about" >
        <main>
            <h1>About Us</h1>
            <article>
                <h4>BTech Burger Wala</h4>
                <p>We are BTech Burger Wala. Treat yourself and your date with authentic and tasty burgers !! </p>
                <p>Explore the various burgers and beverages.Click below to see the menu</p>
                <Link to="/">
                    <RiFindReplaceLine />
                </Link>
            </article>
            <div>
                <h2>Founder</h2>
                <article>
                    <div>
                        <img src={me} alt="" />
                        <h3>Pranjil Kapoor</h3>
                    </div>
                        <p>
                            I am Pranjil Kapoor , the founder .. I am here to bring back the originality ! 
                        </p>
                </article>
            </div>
        </main>
    </section>
  )
}

export default About