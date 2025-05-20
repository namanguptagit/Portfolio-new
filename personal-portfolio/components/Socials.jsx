import { BiLogoDribbble, BiLogoGithub, BiLogoLinkedin, BiLogoTwitter } from 'react-icons/bi'

const socials = [
  {
    icon: <BiLogoDribbble />,
    path: ''
  },
  {
    icon: <BiLogoGithub />,
    path: ''
  },
  {
    icon: <BiLogoLinkedin />,
    path: ''
  },
  {
    icon: <BiLogoTwitter />,
    path: ''
  }
]

const Socials = ({ containerStyles, iconStyles }) => {
    return (
        <div className={containerStyles}>
            {socials.map((item, index) => {
                return (
                    <div key={index} className={iconStyles}>{item.icon}</div>
                );
            }
            )}
        </div>
    );
}

export default Socials