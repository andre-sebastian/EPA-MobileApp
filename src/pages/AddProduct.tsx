import React, { useContext } from 'react';
import {
	IonPage,
	IonContent,
	IonGrid,
	IonHeader,
	IonToolbar,
	IonButtons,
	IonTitle,
	IonBackButton,
	IonButton,
	IonIcon,
} from '@ionic/react';
import { chevronBackOutline, saveOutline } from 'ionicons/icons';
import Translator from './../components/elements/Translator';
import { UserContext } from './../context/User.Context';
import AddProductTemplate from '../components/template/AddProduct.Template';

const AddProduct: React.FC = () => {
	const { currentUser } = useContext(UserContext);

	return (
		<>
			<IonPage>
				<IonContent>
					<IonHeader className='ion-no-border'>
						<IonToolbar color='primary'>
							<IonButtons slot='start'>
								<IonBackButton
									defaultHref='/myProducts'
									icon={chevronBackOutline}
								/>
							</IonButtons>
							<IonButtons slot='secondary'>
								<IonButton>
									<IonIcon
										slot='icon-only'
										icon={saveOutline}
										style={{ color: 'transparent' }}
									/>
								</IonButton>
							</IonButtons>
							<IonTitle size='large' className='ion-text-center'>
								<Translator
									from='en'
									to={currentUser.data.preferredLanguage || 'en'}
									text='Add Product'
									returnText={true}
									onTextTranslated={() => {}}
								/>
							</IonTitle>
						</IonToolbar>
					</IonHeader>
					<IonGrid>
						<AddProductTemplate />
					</IonGrid>
				</IonContent>
			</IonPage>
		</>
	);
};

export default AddProduct;
