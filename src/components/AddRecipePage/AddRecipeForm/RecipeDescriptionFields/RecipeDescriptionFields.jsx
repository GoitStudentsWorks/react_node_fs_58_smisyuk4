import { Formik } from 'formik';
import {
	DescrForm,
	DescriptionDiv,
	InputFile,
	InputForm,
	InputWrapper,
	LabelForm,
	// RecipeImg,
} from './RecipeDescriptionFields.styled';
import { useState } from 'react';
// import { PropTypes } from 'prop-types';

export const RecipeDescriptionFields = ({ onSubmit }) => {
	const [title, setTitle] = useState('');
	const [about, setAbout] = useState('');
	const [categori, setCategori] = useState('');
	const [picture, setPicture] = useState(null);

	// const imgURL = URL.createObjectURL(picture);
	// const handlerTitle = text => {
	//   setTitle(text.value)
	//   console.log(title)

	// }
	const handleSubmit = async ({ title, about, categori }, { resetForm }) => {
		console.log(title, about, categori);
		onSubmit(data);
		resetForm();
	};

	const handleOnChange = event => {
		console.log('Form::onChange', event.target.name);
		const name = event.target.name;
		switch (name) {
			case 'title':
				setTitle(event.target.value);
				console.log('title:', title);
				break;
			case 'about':
				setAbout(event.target.value);
				console.log('about:', about);
				break;
			case 'picture':
				setPicture(event.target.value);
				console.log('picture:', picture);
				// const url = URL.createObjectURL(event.target.value);
				// console.log('picture', event.target.value)
				// console.log('picture', url);
				break;
			case 'categori':
				setCategori(event.target.value);
				console.log('categori:', categori);
				break;
			default:
				console.log('Invalid subscription type');
		}
	};

	const data = {
		title,
		about,
		categori,
	};
	console.log('data---', data);
	return (
		<DescriptionDiv>
			<Formik
				initialValues={{
					title: '',
					about: '',
					categori: '',
				}}
				onSubmit={handleSubmit}>
				<DescrForm autoComplete="off" onChange={handleOnChange}>
					<LabelForm>
						<InputFile name="picture" type="file">
							{/* <RecipeImg src={imgURL} alt="PICTURE" /> */}
						</InputFile>
					</LabelForm>
					<InputWrapper>
						<LabelForm>
							Enter item title
							<InputForm name="title" type="text" />
						</LabelForm>
						<LabelForm>
							Enter about recipe
							<InputForm name="about" type="text" />
						</LabelForm>
						<LabelForm>
							Categori
							<InputForm name="categori" as="select">
								<option value=""> </option>
								<option value="red">Red</option>
								<option value="green">Green</option>
								<option value="blue">Blue</option>
							</InputForm>
						</LabelForm>
						<LabelForm>
							Cooking time
							<InputForm name="categori" as="select">
								<option value="red">Red</option>
								<option value="green">Green</option>
								<option value="blue">Blue</option>
							</InputForm>
						</LabelForm>
					</InputWrapper>

					<button type="submit">submit</button>
				</DescrForm>
			</Formik>
		</DescriptionDiv>
	);
};

// RecipeDescriptionFields.propTypes = {
// 	onSubmit: PropTypes.func.isRequired,
// };


// "Компонент рендерить поля для вводу користувачем:
//  - файлу з фото рецепту
//  - назви рецепту
//  - опису рецепту
//  - категорії рецепту - обирається з випадаючого списку, який приходить з бекенду
//  - часу приготування рецепту - обирається з випадаючого списку в діапазоні від 5хв до 120хв з кроком 5
// Випадаючі списки повинні показувати 6 рядків даних, всі інші повинні скролитись в межах даного списку.
// Компонент пропсами отримує значення для інпутів, а також хендлер для опрацювання цих значень"