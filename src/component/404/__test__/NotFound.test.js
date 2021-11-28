import { screen, render } from '@testing-library/react';
import NotFound from '../NotFound';
describe('404 page', () => {
	test('should have a a heading "I have bad news for you"', () => {
		render(<NotFound />);
		const headingText = screen.getByRole('heading', {
			name: 'I have bad news for you',
		});
		expect(headingText).toBeInTheDocument();
	});

	test('should have a text "404 NOT FOUND"', () => {
		render(<NotFound />);
		const notFoundText = screen.getByRole('heading', {
			name: /404 Not Found/i,
		});
		expect(notFoundText).toBeInTheDocument();
	});

	test('should have a paragraph "The page you are looking for might be removed or is temporarily unavailable"', () => {
		render(<NotFound />);
		const paragraphText = screen.getByText(
			'The page you are looking for might be removed or is temporarily unavailable'
		);
		expect(paragraphText).toBeInTheDocument();
	});

	test('should have a button "Back to homepage"', () => {
		render(<NotFound />);
		const button = screen.getByRole('button', {
			name: 'Back to homepage',
		});
		expect(button).toBeInTheDocument();
	});

	test('should have an image of scarecrow', () => {
		render(<NotFound />);
		const image = screen.getByAltText('Scarecrow');
		expect(image).toBeInTheDocument();
	});

	test('Logo must have src = "/logo.svg" and alt = "Logo"', () => {
		render(<NotFound />);
		const scareCrowImage = screen.getByRole('img');
		expect(scareCrowImage).toHaveAttribute('src', 'Scarecrow.png');
		expect(scareCrowImage).toHaveAttribute('alt', 'Scarecrow');
		//Can find image with alt text too
		const scareCrowAltText = screen.getByAltText('Scarecrow');
		expect(scareCrowAltText).toBeInTheDocument();
	});

	test('should have a text "created by wick3ds0ul - devChallenges.io"', () => {
		render(<NotFound />);
		const footerText = screen.getByText(
			/created by wick3ds0ul - devChallenges.io/i
		);
		expect(footerText).toBeInTheDocument();
	});
});
