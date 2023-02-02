import { Card } from 'react-bootstrap';

export function Header() {
	return (
		<Card className="mb-4 d-flex  align-items-center">
			<Card.Title className="ms-4 p-4">
				<h1 style={{ color: '#0d6efd' }}>ONLINE STORE</h1>
				<p>best service 24/7 for online shopping</p>
			</Card.Title>
		</Card>
	);
}
