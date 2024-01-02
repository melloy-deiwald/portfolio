import './About.css'
import white_star_line from '../icons/white_star_line.png'
import glyph from '../icons/light_glyph.png'

function About() {
  // Declare state variables and useState hooks here
  // Declare event handlers and other functions here

  return (
    <div className='abt'>
      <div className='about_text'>
        <div className='about_header'>
          <span className='about_header_title'>WHITE STAR LINE</span> <span>TICKET# <span className='typewritten'>191102</span></span>
        </div>

        <div className='separator' />
      
        <div className='flex align-v'>
          Passenger Ticket per Steamship: R.M.S &nbsp;<div className='du handwritten'>Olympic</div>
        </div>

        <div className='flex'>
          SAILING FROM: &nbsp;<div className='du typewritten'>Student life</div> 
          TO: &nbsp;<div className='du typewritten'> Homelessness</div>
        </div>

        <div className='separator' />

        <div className='flex'>
          PASSENGER NAME: &nbsp;<div className='du typewritten'>Ms. Lucy Deiwald</div>
        </div>

        <div className='flex'>
          AGE: &nbsp;<div className='du typewritten'>{(new Date().getFullYear()) - 2002 - (new Date().getMonth() >= 10 && new Date().getDate() >= 19 ? 0 : 1)}
        </div> 
          BIRTHDAY: &nbsp; <div className='du typewritten'>19.11.2002</div> 
          PRONOUNS: &nbsp; <div className='du typewritten'> She/They/It</div>
        </div>

        <div className='flex'>
          STUDYING: &nbsp; <div className='du typewritten'> English & PolSci </div>
          SEMESTER: &nbsp; 
          <div className='du typewritten'> 
            {(() => {
              const startDate = new Date('2022-10-01');
              const currentDate = new Date();

              let count = 0;
              let currentDateCopy = new Date(startDate);

              while (currentDateCopy <= currentDate) {
                const month = currentDateCopy.getMonth() + 1; // Months are zero-based
                const day = currentDateCopy.getDate();
                if ((month === 4 && day === 1) || (month === 10 && day === 1)) {
                  count++;
                }
                currentDateCopy.setMonth(currentDateCopy.getMonth() + 6);
              }
              const suffix = sem => sem % 10 === 1 && sem !== 11 ? 'st' : sem % 10 === 2 && sem !== 12 ? 'nd' : sem % 10 === 3 && sem !== 13 ? 'rd' : 'th';
              return `${count}${suffix(count)}`;
            })()}
          </div>
        </div>

        <div className='separator' />

        <div className='flex'>
          PASSENGER FACT:  &nbsp;
          <div className='du typewritten'>
            To the dork who's reading this, Hi. I'm Lucy, also known
          </div>
        </div>

        <div className='flex du typewritten'>
          as Bean, online I go by the handle Melloy. As is obvious from this webpage,
        </div> <div className='flex du typewritten'>
          I'm a pretty big nerd. I mean I play dnd, have my own server, and own a 
        </div> <div className='flex du typewritten'>
          3d printer. I love coding, web design, writing instruments, synthesizers, 
        </div> <div className='flex du typewritten'>
          and girls! (Yeah, this bitch is fucking gay) I'm also the textbook
        </div> <div className='flex du typewritten'>
          definition of a stereotypical lesbo, well I just have to actually go and
        </div> <div className='flex du typewritten'>
          finally pick up skating to complete my personality fr. I study English and
        </div> <div className='flex du typewritten'>
          Political science to ... varying degrees of success. My favourite TV-show
        </div> <div className='flex du typewritten'>
          is The Owl House &nbsp; <img style={{ width: "28px" }} src={glyph} alt='Glyph'/>
          , though Arcane and Sense8 do deserve an honourable
        </div> <div className='flex du typewritten'>
          mention. As for games, nothing beats Life is Strange Before the Storm
        </div> <div className='flex du typewritten'>
          and its soundtrack. Currently trying to figure out what to do with my life
        </div> <div className='flex du typewritten'>
          wish me luck, this shit's more difficult than I thought.
        </div>
        
        <div className='separator' />
        <div className='wsl_logo' >
          <img src={white_star_line} alt="WSL Logo" />
        </div>


      </div>
    </div>
  );
}


export default About;
