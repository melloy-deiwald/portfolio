import React from 'react'
import Project from './ProjectItem.jsx'
import './Programming.css'

import trans_image from '../covers/trans-corpus.png'
import portfolio_image from '../covers/portfolio_cover.png'

import dnd1 from '../covers/dndj/1.png'
import dnd2 from '../covers/dndj/2.png'
import dnd3 from '../covers/dndj/3.png'
import dnd4 from '../covers/dndj/4.png'

function Programming () {
    return(
        <div className='Programming_container'>
            <Project 
            title= "Trans Reddit Corpus"
            description={`Created as part of my Linguistics term paper "Identity Labels in Online Trans Communities: A Study of Lexical Change",
            the Trans Reddit corpus is a collection of terms used in trans subreddits for data-analysis
            The lack of data / publicly available corpus for modern communities such as reddit, I've had to build one
            myself. I have therefore gathered all the data from trans subreddits. I was slightly constrained in time and
            I don't have a "true" corpus as in it is not saved in a database that is easily searchable and I instead only
            had my specific terms that I was looking for checked instead. I could in the future make a fully functioning
            corpus with ~85 million words. The project and the data are available on my Github.
            `}
            url="https://github.com/melloy-deiwald/lucy_deiwald_trans-reddit-corpus"
            button_text="Open on Github"
            image_url={trans_image}
            image_alt= "trans_cover"
            images={[]}
            />
            <Project
            title="Portoflio"
            description={`This is the source code for the page you are looking at... right now actually!
            This is basically just a little pet project I'm making on the side, where I can post stuff
            I like and just have a little fun doing HTML CSS and some Javascript (In react of course)
            `}
            url="https://github.com/melloy-deiwald/portfolio"
            button_text="Open on Github"
            image_url={portfolio_image}
            image_alt= "portoflio cover image"
            images={[]}
            />
            <Project
            title= "DnDJ"
            description={`Made a YT-Downloader and music player for D&D. It can download videos and playlists,
            convert them into mp3 and save them as playlists within the application, from which up to 16
            streams can be easily managed with. It never found much use though and sometimes tends to 
            crash without an error message, which is confusing and hard to debug.
            `}
            url=""
            button_text=""
            image_url={dnd1}
            image_alt="DNDJ Cover"
            images={[dnd2, dnd3, dnd4]}
            />
        </div>
    );
}

export default Programming