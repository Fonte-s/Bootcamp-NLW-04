import '../styles/global.css';

import { ChallengesContext, ChallengesProvider } from '../contexts/ChallengesContexts'
import { useState } from 'react';
import { CountdownProvider } from '../contexts/Countdown';

function MyApp({ Component, pageProps }) {



  return (


    <Component {...pageProps} />

  )
}

export default MyApp
