/**
 * External dependencies
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { localize } from 'i18n-calypso';

/**
 * Internal dependencies
 */
import Button from 'components/button';
import Card from 'components/card';
import ExternalLink from 'components/external-link';
import SectionHeader from 'components/section-header';

class Intro extends Component {
	static propTypes = {
		translate: PropTypes.func.isRequired,
	};

	render() {
		const { translate } = this.props;

		return (
			<div>
				<SectionHeader label={ translate( 'Welcome to the Setup Wizard!' ) } />
				<Card>
					<p>
						{ translate(
							'Thanks for installing {{em}}WP Job Manager{{/em}}! Let\'s get your site ready to accept job listings.',
							{ components: { em: <em /> } }
						) }
					</p>

					<p>
						{ translate(
							'This setup wizard will walk you through the process of creating pages for job submissions, ' +
							'management, and listings.'
						) }
					</p>

					<p>
						{ translate(
							'If you\'d prefer to skip this and set up your pages manually, our {{docs}}documentation{{/docs}} ' +
							'will walk you through each step.',
							{
								components: {
									docs: (
										<ExternalLink
											icon={ true }
											target="_blank"
											href="https://wpjobmanager.com/documentation/"
										/>
									),
								}
							}
						) }
					</p>
					<Button compact>
						{ translate( 'Skip setup. I will set up the plugin manually' ) }
					</Button>
				</Card>
			</div>
		);
	}
}

export default localize( Intro );
