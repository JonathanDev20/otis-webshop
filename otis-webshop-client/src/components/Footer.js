// Import React
import React from 'react'

/**
 * Represents a footer to show on every page.
 * 
 * @returns {JSX} - A footer.
 */
const Footer = () => {
	return (
		<>
			<footer className="pt-5 footer-container bg-primary">
				<div className="row m-4">
					<div className="footer-text col-12 col-md mr-5">
						OTIS Design började som en hobby-verksamhet där jag tyckte om att tillverka egendesignade produkter. Jag har alltid tyckt om att göra egna designer och att tillverka produkter själv. 
					</div>
					<div className="col-6 col-md footer-border">
						<div className="footer-links">
							<h4>
								Information<span></span>
							</h4>
							<a href="/about">Om oss</a>
						</div>
					</div>
					<div className="col-6 col-md footer-border">
						<div className="footer-links">
							<h4>
								Länkar<span></span>
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
								Kontakt<span></span>
							</h4>
							<p className="mb-3" style={{ wordWrap: 'break-word' }}>E-post: otis.webshop.test@gmail.com</p>
							<p>Telefon: 070-713 22 43</p>
						</div>
					</div>
					<div className="col-6 col-md footer-border">
						<div>
							<h4>
								Annat<span></span>
							</h4>
								<p><s>( Kommande funktionalitet )</s></p>
						</div>
					</div>
				</div>
				<div className="col-md-12 copy">
					<p className="text-center">
						&copy; 2021 - Jonathan Olsson.
					</p>
				</div>
			</footer>
		</>
	)
}

export default Footer
