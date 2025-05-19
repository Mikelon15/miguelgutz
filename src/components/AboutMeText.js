
import TextScroller from './TextScroller';
import child from '../1.webp';
import young from '../2.webp';
import adult from '../3.webp';

const AboutMeText = () => {
    return (
        <div className='mb-72 mt-32'>
            <TextScroller>
                <div className='my-4 md:my-24'>
                    My parents often recall how they thought I might faint when they surprised me
                    with my first computer as a kid. From that moment on, I was captivated, and
                    it was no surprise when I fell in love with coding in high school and later
                    majored in <b className='text-orange-300'>computer science</b>.
                </div>
                {/* <img alt="child surprised with computer" className="w-1/3 md:hidden mx-auto  " src={child}></img> */}
            </TextScroller>
            {/* <TextScroller>
                <div className='my-4 md:my-12 md:mt-24'>
                    From that moment on, I was captivated, and
                    it was no surprise when I fell in love with coding in high school and later
                    majored in <b className='text-orange-300'>computer science</b>.
                </div>
                <img alt="teenager learning to code" className="w-1/3 md:hidden mx-auto  " src={young}></img>
            </TextScroller> */}

            <TextScroller>
                <div className='my-4 md:my-12'>
                    I have since enjoyed building <b className='text-orange-300'>software </b>
                    and <b className='text-orange-300'>collaborating</b> with others to tackle
                    challenging problems. I have had the privilege of working for
                    <b className='text-orange-300'> large corporations</b>,
                    addressing a wide range of issues and impacting thousands of users
                    daily in <b className='text-orange-300'>critical</b> operations.
                    I have grown and learned a lot from the responsibility and pressure of
                    improving software that's critical to the organization's success.
                </div>
                {/* <img alt="adult collaborating with others on a solution" className="w-1/3 md:hidden mx-auto  " src={adult}></img> */}
            </TextScroller>
            {/* <TextScroller>
                <div className='my-4 md:my-72'>
                </div>
            </TextScroller> */}

            {/* <TextScroller>
                <div className='my-24 md:my-64'>
                    Outside of my career, I love working on projects to explore
                    <b className='text-orange-300'> new technologies</b> and stay abreast
                    of the <b className='text-orange-300'>latest innovations</b>. This allows me to
                    continuously improve my technical skills and be ready for the next challenge.
                </div>
            </TextScroller> */}
        </div>

    )
}
export default AboutMeText;