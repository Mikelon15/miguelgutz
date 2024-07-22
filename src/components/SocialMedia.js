import github from '../github-mark-white.svg';
import mail from '../mail-icon.svg';
import linkedIn from '../linkedIn.png';
import facebook from '../Facebook_Logo_Secondary.png'

const logos = [{
  logo: github,
  url: 'https://github.com/Mikelon15',
},
{
  logo: mail,
  url: 'miguelgutz95@gmail.com'
},
{
  logo: linkedIn,
  url: 'https://www.linkedin.com/in/miguel-gutierrez-439918b1/'
},
{
  logo: facebook,
  url: 'https://www.facebook.com/profile.php?id=100001865923552',
}]

const SocialMedia = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between mt-2">
      {logos.map((item, index) =>
        <a key={'logo-' + index} href={index == 1 ? 'mailto:' + item.url : item.url} target={index == 1 ? '' : '_blank'} rel="noreferrer noopener" className='mx-2'>
          <button>
            <img key={index} src={item.logo} className={`w-8 h-8 mt-4 ${index != 1 ? 'p-[2px]' : ''}`} alt="Logo" />
          </button>
        </a>
      )}
    </div>
  )
}

export default SocialMedia; 