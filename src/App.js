import React, { useState } from 'react';
import './App.css';
import MagicalScientist from './MagicalScientist.png'

function App() {
  
  let [count, setCounter] = useState(0);

  function plusOne() {
    setCounter(count + 1)
  }

  function showJecht() {
    if (count === 0) {
      return <>
      <div className='Jecht' id='a0' onClick={plusOne}>
      I'm The Best!
      </div>
      </>
    }
    else if (count === 1) {
      return <>
      <div className='Jecht' id='a1' onClick={plusOne}>
      You Can't Do It, Kid.
      </div>
      </>
    }
    else if (count === 2) {
      return <>
      <div className='Jecht' id='a2' onClick={plusOne}>
      You're Out Of Your League!
      </div>
      </>
    }
    else if (count === 3) {
      return <>
      <div className='Jecht' id='a3' onClick={plusOne}>
      No One Else Can Do It.
      </div>
      </>
    }
    else if (count === 4) {
      return <>
      <div className='Jecht' id='a4' onClick={plusOne}>
      Gahahahah!
      </div>
      </>
    }
    else if (count === 5) {
      return <>
      <div className='Jecht' id='a5' onClick={plusOne}>
      I'm Fuckin' Invincible!
      </div>
      </>
    }
    else if (count === 6) {
      return <>
      <div className='Jecht' id='a6' onClick={plusOne}>
      Nanomachines, Daughter!
      </div>
      </>
    }
    else if (count > 6) {
      return <>
      <div className='final-wrapper'>
      <div className='Tips'>
      <p>So, you found yourself trapped in some timeless soul space, huh?  Well ya better not be crying!
      Don't worry!  You're my daughter!  You can do this!
      </p>
      <p>
        So, you know I used to be a magical scientist working for Stills Co., right?  Well, look 
        at this!
      </p>
      <div className='imageAndStuff'>
      <img src={MagicalScientist} alt='MagicalScientist.png' />
      <div className='bundle'>
      <p>Gahahahah!  I looked so dorky back then.  A different time...anyway, science is all about 
        grabbing reality by the horns and twisting it until the numbers add up!  Sometimes, you really 
        just gotta smash a square peg through a round hole!  Use this with Catapult Turtle to pay (almost) all 
        your life for some goons, and throw em all at your enemy!  Hell, you can throw me and my 
        reptile invention at em too while you're at it! To get us together, use card draw like mad!  
        And don't feel sorry for me if you gotta discard me into the graveyard...I'm no stranger to 
        coming back from the grave! Gahahahah!
      </p>
      <p>
        I know your adoptive daughter went to magical law school or something; use that!  
        Half the idiots in this deck exist only for insurance fraud!  Have them write me or 
        my turtle into their Last Will and find a way to off em'!
      </p>
      <p>But go fast, ya dig?  Even a small scratch on you and the price my research cost will be 
        too much for you to handle!  HA!  I always knew you were just a shrimp!
      </p>
      </div>
      </div>
      <p>
        And I don't wanna see you cryin' if you lose to this guy!  He's a veteran and your just an 
        amateur!  Heh, I'm probably the only one that can beat him, so don't be too down on yourself.
      </p>
      </div>
      <div className='mastered'>
        You mastered the Jecht Shot!  That Longsword he gave you isn't useless anymore!
        When playing it, you can transform it into the Jecht Shot simply by believing in yourself 
        and being loud about your intentions!
      </div>
      </div>
      </>
    }
  }


  return (
    <div className="Apper-Wrapper">
      {showJecht()}
    </div>
  );
}

export default App;
