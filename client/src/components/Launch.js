import React, { Component, Fragment } from 'react';
import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import LaunchItem from './LaunchItem';

const LAUNCH_QUERY = gql`
	query LaunchQuery($flight_number: Int!) {
		launch(flight_number: $flight_number) {
			flight_number
			mission_name
			launch_year
			launch_success
			launch_date_local
			rocket {
				rocket_id
				rocket_name
				rocket_type
			}
		}
	}
`;

const LaunchDetails(flight_number) {
  const 	{(loading, error, data)} = useQuery(LAUNCH_QUERY);
  if (loading) return <h4>Loading...</h4>; 
  if (error) console.log(error);
}

export class Launch extends Component {
	render() {
		let { flight_number } = this.props.match.params;
		flight_number = parseInt(flight_number);
		return (
			<Fragment>
			
			</Fragment>
		);
		return (
			<div>
				<Fragment>
					<h1 className='display-4 my-3'>Launch</h1>
				</Fragment>
			</div>
		);
	}
}

export default Launch;
