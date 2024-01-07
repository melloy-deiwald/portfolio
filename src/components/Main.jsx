import './Main.css'

import discord from '../icons/discord.png'
import steam from '../icons/steam.png'
import insta from '../icons/insta.png'
import pfp from '../icons/pfp.png'

function Main( { to_projects } ) {
  let intro_text = [
    "Pushing the gay agenda onto terfs",
    "Gay Witches and Bad Bitches",
    "Is this what regret feels like? I hate it!",
    "Thank you for being in my life ^_^",
    "Don't Panic!",
    "I'm good at keeping up appearances, truth is I'm barely holding it together",
    "Be Gay do Crime!",
    "They're so pretty, it hurts fjfksfnhj",
    "Life is ... strange. Huh, guess they weren't wrong",
    "If your life sucks it means you're still alive",
    "I bite :3",
    "Reach out anytime; I'll try my best to answer",
    "You are enough!"
  ]

  return (
    <div className='main'>

      <div className='title_container'>
        <div className='title_left'>
          <div className='main_title'>
            {intro_text[Math.floor(Math.random() * intro_text.length)]}
          </div>
          <div onClick={() => {to_projects(3)}} className='link_button'>See Projects</div>
        </div>
        <div className='pfp'>
          <img src={pfp} alt="" />
        </div>
      </div>
     
      <div className='socials'>
        <div className='main_img_container'>
          <img src={discord} alt="discord" />
          melloy_
        </div>
        <div className='main_img_container'>
          <img src={steam} alt="steam" />
          lucy_melloy (id)
        </div>
        <div className='main_img_container'>
          <img src={insta} alt="instagram" />
          @lucy_melloy
        </div>
      </div>
    </div>
  );
}

export default Main;