import React from 'react'

const Header: React.FC = (): React.ReactElement => {
	return (
		<div className="navbar-fixed mb-1">
			<nav>
				<div className="nav-wrapper pl-2">
					<a href="#!" className="brand-logo">
						Notes
					</a>
				</div>
			</nav>
		</div>
	)
}

export default Header
