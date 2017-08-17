/** @format */
/**
 * External dependencies
 */
import React from 'react';
import PropTypes from 'prop-types';
import AutoDirection from 'components/auto-direction';
import classNames from 'classnames';
export default class PostCommentContent extends React.Component {
	static propTypes = {
		content: PropTypes.string.isRequired,
		isPlaceholder: PropTypes.bool,
		className: PropTypes.string,
		onMoreClicked: PropTypes.func,
		showMore: PropTypes.bool,
	};

	render() {
		// Don't trust comment content unless it was provided by the API
		if ( this.props.isPlaceholder ) {
			return (
				<div className={ classNames( 'comments__comment-content', this.props.className ) }>
					{ this.props.content.split( '\n' ).map( ( item, key ) => {
						return (
							<span key={ key }>
								{ item }
								<br />
							</span>
						);
					} ) }
				</div>
			);
		}

		/*eslint-disable react/no-danger*/
		return (
			<AutoDirection>
				<div className="comments__comment-content-wrapper">
					<div
						className={ classNames( 'comments__comment-content', this.props.className ) }
						dangerouslySetInnerHTML={ { __html: this.props.content } }
					/>
					{ this.props.showMore &&
						<span className="comments__comment-read-more" onClick={ this.props.onMoreClicked }>
							Read More
						</span> }
				</div>
			</AutoDirection>
		);
		/*eslint-enable react/no-danger*/
	}
}
