import React from 'react';
import {
	IonCard,
	IonCardTitle,
	IonCardHeader,
	IonImg,
	IonThumbnail,
	IonIcon,
} from '@ionic/react';
import { heartOutline } from 'ionicons/icons';
import {
	bannerCornUrl,
	bannerTextilUrl,
	bannerHomeUrl,
} from './../../utilities/assets';

const SelectCategoryForm: React.FC = () => {
	let categories = [
		{
			id: 1,
			name: 'Agriculture & Food',
			img: bannerCornUrl,
		},
		{
			id: 2,
			name: 'Apparel, Textiles & Accessories',
			img: bannerTextilUrl,
		},
		{
			id: 3,
			name: 'Home, Lights & Construction',
			img: bannerHomeUrl,
		},
	];

	return (
		<>
			{categories.map(({ img, name, id }) => {
				return (
					<IonCard key={id} className='my-2'>
						<IonThumbnail style={{ width: '100%', height: '120px' }}>
							<IonImg src={img} />
						</IonThumbnail>
						<IonCardHeader>
							<IonCardTitle className='fw-bolter' style={{ fontSize: '18px' }}>
								{name}
								<IonIcon
									size='small'
									color='primary'
									className='ion-float-right'
									icon={heartOutline}
								/>
							</IonCardTitle>
						</IonCardHeader>
					</IonCard>
				);
			})}
		</>
	);
};

export default SelectCategoryForm;