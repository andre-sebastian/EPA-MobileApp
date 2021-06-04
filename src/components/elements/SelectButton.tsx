import React, { useEffect, useState } from 'react';
import { IonButton } from '@ionic/react';
import { UserContext } from '../../context/User.Context';
import Translator from './Translator';
interface SelectButtonType {
	firstButtonTitle: string;
	secondButtonTitle: string;
	onSelectedButton: Function;
}

const SelectButton = ({
	firstButtonTitle,
	secondButtonTitle,
	onSelectedButton,
}: SelectButtonType) => {
	const { currentUser } = React.useContext(UserContext);

	const [selectedItem, setSelectedItem] = useState(firstButtonTitle);

	function selectFirstButtom() {
		setSelectedItem(firstButtonTitle);
		onSelectedButton(firstButtonTitle);
	}

	function selectSecondButton() {
		setSelectedItem(secondButtonTitle);
		onSelectedButton(secondButtonTitle);
	}
	return (
		<>
			<div className='ion-text-center px-2'>
				<IonButton
					onClick={selectFirstButtom}
					size='small'
					color={selectedItem === firstButtonTitle ? 'primary' : 'light'}
					className={`mx-1 ion-button-full-rounded ion-text-capitalize ${
						selectedItem === firstButtonTitle ? 'fw-bold' : 'fw-normal'
					}`}>
					<p className='px-4'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text={firstButtonTitle}
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</p>
				</IonButton>
				<IonButton
					onClick={selectSecondButton}
					size='small'
					color={selectedItem === secondButtonTitle ? 'primary' : 'light'}
					className={`mx-1 ion-button-full-rounded ion-text-capitalize ${
						selectedItem === secondButtonTitle ? 'fw-bold' : 'fw-normal'
					}`}>
					<p className='px-4'>
						<Translator
							from='en'
							to={currentUser.data.preferredLanguage || 'en'}
							text={secondButtonTitle}
							returnText={true}
							onTextTranslated={() => {}}
						/>
					</p>
				</IonButton>
			</div>
		</>
	);
};

export default SelectButton;