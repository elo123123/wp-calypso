/**
 * External dependencies
 */
import { map } from 'lodash';

export const parseZoneResponse = ( { description, name, slug, term_id } ) => ( {
	description,
	id: term_id,
	name,
	slug,
} );

export const parseZonesResponse = zones => map( zones, parseZoneResponse );
