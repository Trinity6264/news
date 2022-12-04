import React from 'react'
import '../../style/Home.css'
import LadingPicture from '../../assets/images/image-web-3-mobile.jpg'
import ImageInfoDetails from '../../components/ImageInfoDetails'
import { SecondData } from '../../helper/Second_section_data'


const Home = () => {
  return (
    <section className='home page'>

      <div className="first-container">
        <div className="first-div">
          <img src={LadingPicture} alt="landing pic" />
          <div className="landing-info">
            <h2 className='title'>The Bright Future of Web 3.0?</h2>
            <div className="landing-sub-info">
              <p className="subtitle">
                We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
              </p>
              <button className="read-more">READ MORE</button>
            </div>
          </div>
        </div>
        {/* Second div */}
        <div className="second-div">
          <h1>New</h1>
          <h4>Hydrogen VS Electric Cars</h4>
          <p>Will hydrogen-fueled cars ever catch up to Evs?</p>
          <hr />
          <h4>The Downsides of AI Artistry</h4>
          <p>What are the possible adverse effects of on-demand AI image generation</p>
          <hr />
          <h4>Is VC Funding Drying Up?</h4>
          <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </div>
      </div>
      <div className="second-container">
        {SecondData.map(({ content, image, index, title }) => {
          return <ImageInfoDetails content={content} image={image} index={index} title={title} key={index} />

        })}
      </div>
    </section>
  )
}

export default Home