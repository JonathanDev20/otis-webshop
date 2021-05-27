// Import React
import React from 'react'

// Import Bootstrap
import { Spinner } from 'react-bootstrap'

/**
 * Represents an animated icon to be shown when an API call is loading.
 * 
 * @returns - A loading icon.
 */
const LoadingSpinner = () => {
	return (
		<div>
			<div className="isLoading" style={{ position: 'relative', width: '100%', height: '60vh' }}>
				<Spinner
					style={{
						width: '70px',
						height: '70px'
					}}
          variant="primary"
					animation="border"
					role="status">
					<span className="sr-only">Loading...</span>
				</Spinner>
			</div>
		</div>
	)
}

export default LoadingSpinner
