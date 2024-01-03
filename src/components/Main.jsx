import './Main.css'

import discord from '../icons/discord.png'
import steam from '../icons/steam.png'
import riot from '../icons/riot.png'
import insta from '../icons/insta.png'

function Main( { to_projects } ) {
  return (
    <div className='main'>
      <div className='main_title'>
        Creating things that shouldn't be created
      </div>
      <div onClick={() => {to_projects(3)}} className='link_button'>See Projects</div>

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
          <img src={riot} alt="riot" />
          Lucy #16523
        </div>
        <div className='main_img_container'>
          <img src={insta} alt="riot" />
          @lucy_melloy
        </div>
      </div>




    </div>
  );
}

export default Main;