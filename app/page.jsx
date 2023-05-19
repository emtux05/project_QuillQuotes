import React from 'react'
import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className='w-full flex-center flex-col'>
        <h1 className='head_text text-center'>
            Discover & Share
            <br className='max-md:hidden'/>
            
        </h1>
        <h2 className='head_text text-center'>

        <span className='orange_gradient text-center'>
                Your transformative magic of words
            </span>
        </h2>
        <p className='desc text-center'>
            QuillQuotes - Unveiling the Essence of Words 
        </p>

        <Feed />

    </section>
  )
}

export default Home