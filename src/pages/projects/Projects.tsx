import Masonry, { ResponsiveMasonry } from 'react-responsive-masonry';
import { Helmet } from 'react-helmet-async';

import { portfolioMetaTags } from '../../config/metaTags';
import projectsData from './projectsData';

import './Projects.scss';

const Projects = () => {
	return (
		<div className='wrapper'>
			<Helmet>
				<title>{portfolioMetaTags.title}</title>
				<meta name='description' content={portfolioMetaTags.description} />

				{/* Open Graph Meta Tags */}
				<meta property='og:url' content={portfolioMetaTags.ogUrl} />
				<meta property='og:title' content={portfolioMetaTags.ogTitle} />
				<meta property='og:description' content={portfolioMetaTags.ogDescription} />
				<meta property='og:image' content={portfolioMetaTags.ogImage} />

				{/* Twitter Meta Tags */}
				<meta property='twitter:url' content={portfolioMetaTags.ogUrl} />
				<meta name='twitter:title' content={portfolioMetaTags.ogTitle} />
				<meta name='twitter:description' content={portfolioMetaTags.ogDescription} />
				<meta name='twitter:image' content={portfolioMetaTags.ogImage} />
			</Helmet>

			<h1 className='base-title h1'>Some Works</h1>
			<div className='projects-container'>
				<ResponsiveMasonry
					columnsCountBreakPoints={{ 320: 1, 666: 2, 1024: 3, 1281: 5 }}
				>
					<Masonry gutter={'40px'}>
						{projectsData.map(({ img, url, urlCode, name, desk, skills }, i) => {
							return (
								<div className='project' key={i}>
									<a
										className='project-link'
										href={url}
										target='_blank'
										rel='noopener noreferrer'
									>
										<img className='project-link__img' src={img} alt={desk} />
									</a>

									{skills || desk ? (
										<div className='project-description'>
											<p className='project-description__name'>
												{name}
												<span>_</span>
											</p>

											<p className='project-description__text'>{desk}</p>

											<div className='project-description__actions'>
												{url && (
													<a
														href={url}
														target='_blank'
														rel='noopener noreferrer'
														className='nav-link'
													>
														Site
													</a>
												)}

												{urlCode && (
													<a
														href={urlCode}
														target='_blank'
														rel='noopener noreferrer'
														className='nav-link'
													>
														Code
													</a>
												)}
											</div>

											{skills && <p className='project-description__title'>Skills:</p>}

											<div className='project-description__items'>
												{skills?.map((skill, i) => {
													return <span key={i}>{skill}</span>;
												})}
											</div>
										</div>
									) : null}
								</div>
							);
						})}
					</Masonry>
				</ResponsiveMasonry>
			</div>
		</div>
	);
};

export default Projects;
