import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ColorRing } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';

import {
	DivStyled,
	TitleStyled,
	JewelryBox,
	JewelryBoxBig,
	JewelryBoxSmall,
	CategoryList,
	CategoryItem,
	CardList,
	CardItem,
	CardBox,
	CardTitle,
	Image,
	DivPositionen,
	ImageBG,
} from './CategorySelection.styled';
import { fetchAllCategory, fetchOneCategory } from '../FetchWithCategory';

export const CategorySelection = () => {
	const [category, setCategory] = useState([]);
	const [oneCategory, setOneCategory] = useState([]);
	const { categoryName } = useParams();

	useEffect(() => {
		fetchAllCategory()
			.then(({ data }) => setCategory(data.data.resultCategory))
			.catch(error => error);
	}, []);

	useEffect(() => {
		fetchOneCategory(categoryName)
			.then(({ data }) => setOneCategory(data.resultCategory))
			.catch(error => error);
	}, [categoryName]);

	if (category.length < 1 && oneCategory.length < 1)
		return (
			<ColorRing
				visible={true}
				ariaLabel="blocks-loading"
				wrapperClass="blocks-wrapper"
				colors={['#2a2c36', '#04711a', '#4ebb46', '#8cc293', '#cfd8d4']}
			/>
		);

	return (
		<DivStyled>
			<TitleStyled>Categories</TitleStyled>
			<JewelryBox>
				<JewelryBoxBig className="left" />
				<JewelryBoxBig className="right" />
				<JewelryBoxSmall />
			</JewelryBox>
			<CategoryList>
				{category.map(categ => {
					return (
						<CategoryItem key={categ}>
							<NavLink
								to={`/categories/${categ}`}
								replace={true}
								className={`${
									categ === categoryName ? 'isActive' : null
								} nav-link`}>
								{categ}
							</NavLink>
						</CategoryItem>
					);
				})}
			</CategoryList>
			<CardList>
				{oneCategory.map(({ title, thumb }) => {
					return (
						<CardItem key={title}>
							<Image src={thumb} alt={title} />
							<CardBox>
								<CardTitle>{title}</CardTitle>
							</CardBox>
						</CardItem>
					);
				})}
			</CardList>
			<DivPositionen>
				<ImageBG />
			</DivPositionen>
		</DivStyled>
	);
};
