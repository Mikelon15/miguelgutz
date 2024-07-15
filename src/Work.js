
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
			<div id="AboutMe" className='w-full mx-auto flex bg-stone-800'>
				<div className="w-1/4 box-border" >
					<TextScroller>
						<img alt="child surprised with computer" className="sticky top-16 my-48 bg-orange-100 border-solid rounded border-orange-700 border-r-8 border-b-8 " src={child}></img>
					</TextScroller>
					<TextScroller>
						<img alt="teenager learning to code" className="sticky top-24 my-48 bg-orange-100 border-solid rounded border-orange-700 border-r-8 border-b-8 " src={young}></img>
					</TextScroller>
					<TextScroller>
						<img alt="adult collaborating with others on a solution" className="sticky top-24 my-48 bg-orange-100 border-solid rounded border-orange-700 border-r-8 border-b-8 " src={adult}></img>
					</TextScroller>
				</div>
				<div className="w-3/4" >
					<div className='pt-4 pl-12  pb-32 text-lg text-left'>
						<AboutMeText />
					</div>
				</div>
			</div>

			<NavBar passRef={workRef} vis={vis} main="Work Experience" others={['About Me', 'Projects']}></NavBar>
			<div id='WorkExperience' className='w-full flex bg-stone-800'>
				<div className='w-1/4'></div>
				<div className="w-3/4 text-left">
					<ul className="list-inside pt-4 pl-12">
						{jobs.map((job, index) => <WorkSection key={'job-' + index} date={job.date} company={job.company} description={job.description} stack={job.stack} />)}
					</ul>
				</div>
			</div>

			<NavBar passRef={projectsRef} vis={vis} main="Projects" others={['About Me', 'Work Experience']}></NavBar>
			<div id="Projects" className='w-full flex bg-stone-800'>
				<div className='w-1/4'></div>
				<div className="w-3/4 text-left">
					<ul className="list-inside pt-4 pl-12">
						{projects.map((project, index) => <WorkSection key={'proj-' + index} date={project.date} company={project.company} description={project.description} stack={project.stack} />)}
					</ul>
				</div>
			</div>
		</div>
	)
}

export default Work;