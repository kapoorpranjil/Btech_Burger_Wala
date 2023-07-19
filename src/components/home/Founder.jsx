import React from 'react'
import {motion} from "framer-motion"
import me from "../../assets/KP.jpg"
const Founder = () => {
    const option = {
        initial:{
            x:"-100%",
            opacity:0
        },
        whileInView:{
            x:0,
            opacity:1
        }
    }
  return (
    <>
    <section className="founder">
        <motion.div {...option}>
            <img src={me} alt='' height={200} width={200} />
            <h3>Pranjil Kapoor</h3>
            <p>Hey, Everyone I am Pranjil Kapoor , founder of MBAA Burger Wala. <br />
                Goal is to provide delicious and authentic taste !!
             </p>
        </motion.div>
    </section>
    </>
  )
}

export default Founder