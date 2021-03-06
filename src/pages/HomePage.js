import React from 'react'
import imgHero from "../Images/boardgames.jpg"
import Project from "../components/Project";
import imgTenzies from "../Images/dices.jpg"
import imgMemory from "../Images/flags.jpg"
import imgMagic from "../Images/numbers.jpg"

const HomePage = () => {
  return (
    <>
        <div className='container-homepage'>
            <section className="homepage-body">
            <img className="img-hero" src={imgHero} />
            </section>
            <section className="title-hero">
                <h1 className="title-call">Creating games for everyone with React</h1>
                <p className="subtitle-call">If you want to have a modern interaction with your customers, use React to create your pages and games</p>
            </section>
            <div className="container-supreme">
             <Project name="React Memory Game"
             text="Matching the flags with just a few moves. How many moves do you need? "
             link="memory-game"
             image={imgMemory}
             />
             <Project name="React Magic Square Game"
             text="Arrange the numbers to sum 15 in every direction. Can you do it? "
             image={imgMagic}
             link="magic-square"/>
             <Project name="React Tenzies Game"
             text="Roll ten dices and try to get the same value in all. How is your luck today? "
             image={imgTenzies}
             link="tenzies"/>
            </div>
        </div>

    </>
  )
}

export default HomePage