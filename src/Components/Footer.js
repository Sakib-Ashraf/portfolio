import React, { Component } from "react";
import Fade from "react-reveal";
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
import { faCopyright } from "@fortawesome/free-solid-svg-icons";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    return (
		<footer>
			<div className='row'>
				<Fade bottom>
					<div className='twelve columns'>
						<ul className='social-links'>
							<li>
								<a
									href='https://www.facebook.com/SayedAshrafulIslamSakib'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faFacebook} />
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
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
							</li>
							<li>
								<a
									href='https://wa.me/8801744491526'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faWhatsapp} />
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
									<FontAwesomeIcon icon={faInstagram} />
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
									<FontAwesomeIcon icon={faDribbble} />
								</a>
							</li>
							<li>
								<a
									href='https://www.flickr.com/photos/sakibs_web_studio/'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faFlickr} />
								</a>
							</li>
						</ul>

						<ul className='copyright'>
                <li><FontAwesomeIcon icon={faCopyright}/> Copyright 2021 Sakib Ashraf</li>
							<li>
								Design by{' '}
								<a
									title='Sakib_ashraf'
									href='http://www.styleshout.com/'
								>
									Sakib Ashraf
								</a>
							</li>
						</ul>
					</div>
				</Fade>

				<div id='go-top'>
					<a
						className='smoothscroll'
						title='Back to Top'
						href='#home'
					>
						<i className='icon-up-open'></i>
					</a>
				</div>
			</div>
		</footer>
	);
  }
}

export default Footer;
