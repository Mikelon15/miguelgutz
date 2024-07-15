
import TextScroller from './TextScroller';

const AboutMeText = () => {
    return (
        <div>
            <TextScroller>
                <div className='my-24 sticky top-32'>
                    My parents often recall how they thought I might faint when they surprised me
                    with my first computer as a kid.
                </div>
            </TextScroller>
            <TextScroller>
                <div className='my-64 sticky top-32'>
                    From that moment on, I was captivated, and
                    it was no surprise when I fell in love with coding in high school and later
                    majored in <b className='text-orange-300'>computer science</b>.
                </div>
            </TextScroller>
            <TextScroller>
                <div className='my-48 sticky top-32'>
                    I have since enjoyed building <b className='text-orange-300'>software </b>
                    and <b className='text-orange-300'>collaborating</b> with others to tackle
                    challenging problems.
                </div>
            </TextScroller>
            <TextScroller>
                <div className='my-72 sticky top-32'>
                    Throughout my career, I have had the privilege of working for
                    <b className='text-orange-300'> large corporations</b>,
                    addressing a wide range of issues and impacting thousands of users
                    daily in <b className='text-orange-300'>critical</b> operations.
                    I have grown and learned a lot from the responsibility and pressure of
                    improving software that's critical to the organization's success.
                </div>

            </TextScroller>
            <TextScroller>
                <div className='my-64 sticky top-32'>
                    Outside of my career, I love working on projects to explore
                    <b className='text-orange-300'> new technologies</b> and stay abreast
                    of the <b className='text-orange-300'>latest innovations</b>. This allows me to
                    continuously improve my technical skills and be ready for the next challenge.
                </div>
            </TextScroller>
        </div>

    )
}
export default AboutMeText;