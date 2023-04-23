import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { DivStyled } from './Layout.styled';
import { Header } from 'components/Header';
import { Footer } from 'components/Footer';
import { useAuth } from 'hooks/useAuth';

export const Layout = () => {
	const { isLoggedIn } = useAuth();
	if (!isLoggedIn)
		return (
			<DivStyled>
				<Suspense fallback={null}>
					<Outlet />
				</Suspense>
			</DivStyled>
		);
	return (
		<DivStyled>
			<Header />
			<Suspense fallback={null}>
				<Outlet />
			</Suspense>
			<Footer />
		</DivStyled>
	);
};
