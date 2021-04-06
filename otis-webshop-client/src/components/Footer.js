import React from 'react'

const Footer = () => {
	return (
		<footer className="py-5 footer-container bg-dark">
			<div className="row m-4">
				<div className="test col-12 col-md mr-5">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
					sequi impedit, dolorem consectetur labore in natus explicabo porro
					ducimus minus voluptate enim! Nemo velit aliquid architecto ad amet
					unde maxime.
				</div>
				<div className="col-6 col-md">
					<div>
						<h4>
							About<span></span>
						</h4>
              <a href="/about">Om oss</a>
					</div>
				</div>
				<div className="col-6 col-md">
        <div>
						<h4>
							Links<span></span>
						</h4>
					</div>
        </div>
				<div className="col-6 col-md">
        <div>
						<h4>
							Contact<span></span>
						</h4>
					</div>
        </div>
				<div className="col-6 col-md">
        <div>
						<h4>
							Something<span></span>
						</h4>
					</div>
        </div>
			</div>
		</footer>
	)
}

export default Footer
