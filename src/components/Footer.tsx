import { Card, Container, ListGroup, ListGroupItem } from 'react-bootstrap';

export function Footer() {
	return (
		<Container style={{ backgroundColor: '#333', color: 'white' }}>
			<footer className="h-30 d-flex flex-md-row flex-sm-column align-items-start p-4 justify-content-between ">
				<div className="p-4">
					<h2>Other link</h2>
					<ul style={{ listStyle: 'none' }}>
						<li>store 1</li>
						<li>store 2</li>
						<li>store 3</li>
						<li>store 4</li>
					</ul>
				</div>
				<div className="p-4">
					<h2>contact</h2>
					<ul style={{ listStyle: 'none' }}>
						<li>
							email: <span>exampl@example.com</span>
						</li>
						<li>
							phone: <span>07xxxxxxxx</span>
						</li>
					</ul>
				</div>
				<div className="p-4">
					<h2>about us</h2>
				</div>
			</footer>
		</Container>
	);
}
