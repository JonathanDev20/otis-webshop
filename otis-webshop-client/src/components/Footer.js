import React from 'react'

const Footer = () => {
	return (
		<>
			<footer className="pt-5 footer-container bg-dark">
				<div className="row m-4">
					<div className="footer-text col-12 col-md mr-5">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio
						sequi impedit, dolorem consectetur labore in natus explicabo porro
						ducimus minus voluptate enim! Nemo velit aliquid architecto ad amet
						unde maxime.
					</div>
					<div className="col-6 col-md footer-border">
						<div className="footer-links">
							<h4>
								About<span></span>
							</h4>
							<a href="/about">Om oss</a>
						</div>
					</div>
					<div className="col-6 col-md footer-border">
						<div className="footer-links">
							<h4>
								Links<span></span>
							</h4>
							<p>
								<a href="/pipes">Pipor</a>
							</p>
							<p>
								<a href="/clothbags">Tygkassar</a>
							</p>
							<p>
								<a href="/paintings">Tavlor</a>
							</p>
							<p>
								<a href="/extras">Övrigt</a>
							</p>
						</div>
					</div>
					<div className="col-6 col-md footer-border">
						<div>
							<h4>
								Contact<span></span>
							</h4>
							<p>Email: fakedata@gmail.com</p>
							<p>Phone: 0123456789</p>
						</div>
					</div>
					<div className="col-6 col-md footer-border">
						<div>
							<h4>
								Something<span></span>
							</h4>
						</div>
					</div>
				</div>
				<div className="col-md-12 copy">
					<p className="text-center">
						&copy; Copyright 2021 - OTIS. All rights reserved.
					</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
