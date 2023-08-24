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


class Header extends Component {
	
  render() {
	
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const description = this.props.data.description;

	  return (
			<div>
				
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
			</div>
		);
  }
}
export default Header;
