
import React, { useEffect, useRef, useState } from 'react';


import TextScroller from './components/TextScroller';
import WorkSection from './components/WorkSection';
import AboutMeText from './components/AboutMeText';
import NavBar from './components/NavBar';

import child from './1.webp';
import young from './2.webp';
import adult from './3.webp';

import { jobs, projects } from './jobsText';



function Work() {
	const workRef = useRef(null);
	const projectsRef = useRef(null);
	const aboutRef = useRef(null);
	const [vis, setVis] = useState('')

	useEffect(() => {
		const handleScroll = () => {
			const ar = aboutRef.current.getBoundingClientRect().top
			const wr = workRef.current.getBoundingClientRect().top;
			const pr = projectsRef.current.getBoundingClientRect().top
			let _vis = ''
			if (ar <= 100) _vis = aboutRef.current.id
			if (wr <= 100) _vis = workRef.current.id
			if (pr <= 100) _vis = projectsRef.current.id
			setVis(_vis)

		};

		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
		<div className="w-full max-w-screen-lg mx-auto" >
			<NavBar passRef={aboutRef} vis={vis} main="About Me" others={['Work Experience', 'Projects']}></NavBar>
			<div id="AboutMe" className='w-full mx-auto md:flex bg-stone-800'>
				{/* <div className="md:block hidden w-1/4 box-border" >
					<TextScroller>
						<img alt="child surprised with computer" className="my-24   " src={child}></img>
						</TextScroller>
						<TextScroller>
						<img alt="teenager learning to code" className="my-32   " src={young}></img>
						</TextScroller>
						<TextScroller>
						<img alt="adult collaborating with others on a solution" className="my-48   " src={adult}></img>
						</TextScroller>
				</div> */}
				<div className="w-full" >
					<div className='p-4 md:p-0 md:pt-4 md:p-24 pb-32 text-lg text-left'>
						<AboutMeText />
					</div>
				</div>
			</div>

			<NavBar passRef={workRef} vis={vis} main="Work Experience" others={['About Me', 'Projects']}></NavBar>
			<div id='WorkExperience' className='w-full flex bg-stone-800'>
				<div className='w-1/5 md:w-1/4'></div>
				<div className="w-4/5 md:w-3/4 text-left my-24">
					<ul className="list-inside p-2 md:p-0 pt-4 pl-12">
						{jobs.map((job, index) => <WorkSection key={'job-' + index} date={job.date} company={job.company} description={job.description} stack={job.stack} />)}
					</ul>
				</div>
			</div>

			<NavBar passRef={projectsRef} vis={vis} main="Projects" others={['About Me', 'Work Experience']}></NavBar>
			<div id="Projects" className='w-full flex bg-stone-800'>
				<div className='w-1/5 md:w-1/4'></div>
				<div className="w-4/5 md:w-3/4 text-left mb-24">
					<ul className="list-inside p-2 md:p-0 p-4 my-24 pl-12">
						{projects.map((project, index) => <WorkSection key={'proj-' + index} date={project.date} company={project.company} description={project.description} stack={project.stack} />)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Work;