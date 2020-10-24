import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  min-height: 80vh;
`

const SectionStyles = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8rem 16rem 8rem 25rem;
  @media only screen and (max-width: 1842px) {
    margin: 8rem 10rem 8rem 15rem;
  }
  @media only screen and (max-width: 1560px) {
    margin: 8rem 8rem 8rem 14rem;
  }
  @media only screen and (max-width: 1287px) {
    margin: 7rem 6rem 8rem 10rem;
  }
  @media only screen and (max-width: 1109px) {
    margin: 7rem 6rem 8rem 4rem;
  }
  @media only screen and (max-width: 767px) {
    margin: 6rem 3rem;
  }

  max-width: 820px;
  
  .titleWrapper {
    display: flex;
    align-items: center;
    margin: 6rem 0 0;
  }

  h1 {
    font-weight: 900;
    margin: 0;
  }

  span {
    width: 3.9rem;
    height: 0.3rem;
    background-color: var(--accent);
    margin-right: 1.8rem;
    @media only screen and (max-width: 767px) {
      margin-right: 1.4rem;
    }
  }
  h2 {
    text-transform: uppercase;
    font-size: 1.6rem;
    line-height: 2rem;
    font-weight: 600;
    letter-spacing: 0.96px;
    @media only screen and (max-width: 767px) {
      font-size: 1.4rem;
      line-height: 2rem;
    }
  }
  p {
    font-size: 2rem;
    line-height: 1.3em;
    font-weight: 400;
    margin-top: 4rem;
    max-width: 1600px;
    margin-right: 6rem;
    padding-left: 2rem;
    @media only screen and (max-width: 1410px) {
      margin-top: 3rem;
    }
    @media only screen and (max-width: 1204px) {
      margin-top: 2rem;
    }
    @media only screen and (max-width: 767px) {
      margin-top: 3rem;
      margin-right: 0rem;
    }
  }

`

const PrivacyPolicy = () => {
  return (    
  <Wrapper>
    <SectionStyles>
      <h1>Polityka prywatności</h1>
      <div className="titleWrapper">
        <span></span>
        <h2 className="line" id="onas">SVG’s advantages</h2>
      </div>
      <p>first, I’ll have to say, SVG’s arent good for everything. and as always you should ask yourself what about alternaties like GIF or video. the first big advantage is the “scale”, using svg inline also means you can change and twik other properties on top of width or height. (more on that coming up…) Another advantage is creating an svg and coding it means less HTTP requests which usually means your page performs better. but why should I handle messy code, I'm a designer!</p>
    
      <div className="titleWrapper">
        <span></span>
        <h2 className="line" id="onas">The shortcut — Bodymovin’</h2>
      </div>
      <p>It was roughly the same time that Airbnb Design announced Lottie
(based on the great bodymovin plugin)it reminded me of the good old swiffy days. I was amazed someone actually solved my problem and magicly turned animation to code. I Prefered this method mainly because I already work with After effects. So during one of the projects I played around with it and no doubt the resault is not bad at all.</p>
    
      <div className="titleWrapper">
        <span></span>
        <h2 className="line" id="onas">Add your own animations</h2>
      </div>
      <p>Now that you’ve gone this far, go wild and add your own shapes, illustrations, and/or animations.

One idea is to make the floating of the UFOs and building more realistic—use a bezier curve as opposed to the linear timing function. A couple of notes: transform-origin is set as center top; otherwise, it will scale at the center of the element, throwing off the positioning. Firefox does not support transform-origin for groups; therefore, we have to animate the path.</p>
    
    </SectionStyles>
  </Wrapper>
  )
}

export default PrivacyPolicy
