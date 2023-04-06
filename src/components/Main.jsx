import './Main.css'

import discord from '../icons/discord.png'
import steam from '../icons/steam.png'
import battlenet from '../icons/battlenet.png'

function Main( { to_projects } ) {

  const move_to_projects = (move_index) => {
    to_projects(move_index);
  }

  return (
    <div className='main'>
      <div className='main_title'>
        Creating things that shouldn't be created
      </div>
      <div onClick={() => {move_to_projects(3)}} className='link_button'>See Projects</div>

      <div className='socials'>
        <div className='main_img_container'>
          <img src={discord} alt="discord" />
          Melloy #1854
        </div>
        <div className='main_img_container'>
          <img src={steam} alt="steam" />
          lucy_melloy (id)
        </div>
        <div className='main_img_container'>
          <img src={battlenet} alt="steam" />
          Melloy #21300
        </div>
      </div>




    </div>
  );
}

export default Main;