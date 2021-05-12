import React, { useState } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'

const ProductRating = ({ rating, setRating }) => {
  const [hover, setHover] = useState(null)

	return (
		<div>
			{[...Array(5)].map((star, i) => {
				const ratingValue = i + 1

				return (
					<label key={ratingValue}>
						<input
							type="radio"
							name="rating"
							value={ratingValue}
							onClick={() => setRating(ratingValue)}
						/>
						<AiTwotoneStar
							className="star"
							color={ratingValue <= (hover || rating) ? '#ffc107' : '#e4e5e9'}
              size={40}
              onMouseEnter={() => setHover(ratingValue)}
              onMouseLeave={() => setHover(null)}
						/>
					</label>
				)
			})}
      <p style={{ fontWeight: '600' }}>{rating < 1 ? "Sätt ett betyg :)" : "Betyget är satt till " + rating + "."}</p>
		</div>
	)
}

export default ProductRating
