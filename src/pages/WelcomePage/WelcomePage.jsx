import { DivStyled, H1Styled, PStyled } from './WelcomePage.styled';
import { WelcomeNav } from 'components/WelcomeNav';

export const WelcomePage = () => {
	return (
		<DivStyled>
			<H1Styled>Welcome to the app!</H1Styled>
			<PStyled>
				This app offers more than just a collection of recipes - it is
				designed to be your very own digital cookbook. You can easily
				save and retrieve your own recipes at any time.
			</PStyled>
			<WelcomeNav />
		</DivStyled>
	);
};
