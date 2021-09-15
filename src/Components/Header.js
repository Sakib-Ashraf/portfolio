import React, { Component } from "react";
import Fade from "react-reveal";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faBehance,
	faDiscord,
	faDribbble,
	faFacebook,
	faFlickr,
	faGithub,
	faInstagram,
	faLinkedin,
	faTwitter,
	faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';
import Particles from 'react-particles-js';

const particlesOptions = {
	particles: {
		number: {
			value: 60,
			density: {
				enable: true,
				value_area: 800,
			},
		},
		color: {
			value: 'rgb(26, 28, 61)',
		},
		shape: {
			type: 'circle',
			stroke: {
				width: 0,
				color: 'rgb(26, 28, 61)',
			},
			polygon: {
				nb_sides: 5,
			},
			image: {
				src: 'img/github.svg',
				width: 100,
				height: 100,
			},
		},
		opacity: {
			value: 0.5,
			random: false,
			anim: {
				enable: true,
				speed: 0.1,
				opacity_min: 0.1,
				sync: true,
			},
		},
		size: {
			value: 3,
			random: true,
			anim: {
				enable: true,
				speed: 2,
				size_min: 0.1,
				sync: true,
			},
		},
		line_linked: {
			enable: true,
			distance: 150,
			color: 'rgb(47, 54, 173)',
			opacity: 0.4,
			width: 1,
		},
		move: {
			enable: true,
			speed: 1,
			direction: 'none',
			random: false,
			straight: false,
			out_mode: 'out',
			bounce: false,
			attract: {
				enable: false,
				rotateX: 600,
				rotateY: 1200,
			},
		},
	},
	interactivity: {
		detect_on: 'window',
		events: {
			onhover: {
				enable: false,
				mode: 'grab',
			},
			onclick: {
				enable: false,
				mode: 'push',
			},
			resize: true,
		},
		modes: {
			grab: {
				distance: 400,
				line_linked: {
					opacity: 1,
				},
			},
			bubble: {
				distance: 400,
				size: 40,
				duration: 2,
				opacity: 8,
				speed: 3,
			},
			repulse: {
				distance: 200,
				duration: 0.4,
			},
			push: {
				particles_nb: 4,
			},
			remove: {
				particles_nb: 2,
			},
		},
	},
	retina_detect: true,
};


class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

	  return (
			<>
				<Particles className='particles' params={particlesOptions} />
				<header id='home'>
					<nav id='nav-wrap'>
						<a
							className='mobile-btn'
							href='#nav-wrap'
							title='Show navigation'
						>
							Show navigation
						</a>
						<a
							className='mobile-btn'
							href='#home'
							title='Hide navigation'
						>
							Hide navigation
						</a>

						<ul id='nav' className='nav'>
							<li className='current'>
								<a className='smoothscroll' href='#home'>
									Home
								</a>
							</li>

							<li>
								<a className='smoothscroll' href='#about'>
									About
								</a>
							</li>

							<li>
								<a className='smoothscroll' href='#resume'>
									Resume
								</a>
							</li>

							<li>
								<a className='smoothscroll' href='#portfolio'>
									Works
								</a>
							</li>

							<li>
								<a className='smoothscroll' href='#contact'>
									Contact
								</a>
							</li>
						</ul>
					</nav>

					<div className='row banner'>
						<div className='banner-text'>
							<Fade bottom>
								<h1 className='responsive-headline'>{name}</h1>
							</Fade>
							<Fade bottom duration={1200}>
								<h3>{description}.</h3>
							</Fade>
							<hr />
							<Fade bottom duration={2000}>
								<ul className='social'>
									<li>
										<a
											href='https://www.facebook.com/SayedAshrafulIslamSakib'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon
												icon={faFacebook}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://twitter.com/sakib_ashraf'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon icon={faTwitter} />
										</a>
									</li>
									<li>
										<a
											href='https://www.linkedin.com/in/sakib-ashraf-a1614b140'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon
												icon={faLinkedin}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://wa.me/8801744491526'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon
												icon={faWhatsapp}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://github.com/Sakib-Ashraf'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon icon={faGithub} />
										</a>
									</li>
									<li>
										<a
											href='https://www.instagram.com/sakib_ashraf/'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon
												icon={faInstagram}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://www.behance.net/sakibashraf'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon icon={faBehance} />
										</a>
									</li>
									<li>
										<a
											href='https://discord.gg/sakib#6315'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon icon={faDiscord} />
										</a>
									</li>
									<li>
										<a
											href='https://dribbble.com/Sakib_Ashraf'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon
												icon={faDribbble}
											/>
										</a>
									</li>
									<li>
										<a
											href='https://www.flickr.com/photos/sakibs_web_studio/'
											target='_blank'
											rel='noreferrer'
										>
											<FontAwesomeIcon
												icon={faFlickr}
											/>
										</a>
									</li>
								</ul>
							</Fade>
						</div>
					</div>

					<p className='scrolldown'>
						<a className='smoothscroll' href='#about'>
							<i className='icon-down-circle'></i>
						</a>
					</p>
				</header>
			</>
		);
  }
}

export default Header;
