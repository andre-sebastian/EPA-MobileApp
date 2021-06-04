import React, { useState } from 'react';
import {
	IonInput,
	IonItem,
	IonIcon,
	IonButton,
	IonLabel,
	IonList,
	IonNote,
	useIonToast,
} from '@ionic/react';
import { mailOutline, lockClosedOutline } from 'ionicons/icons';

import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useHistory } from 'react-router-dom';

import { auth } from '../../config/Firebase.config';

const LoginForm: React.FC = () => {
	const [present, dismiss] = useIonToast();
	const history = useHistory();

	async function login({ email, password }: any) {
		try {
			await auth.signInWithEmailAndPassword(email, password);
		} catch (error) {
			present({
				buttons: [{ text: 'Hide', handler: () => dismiss() }],
				message: error.message,
			});
		}
	}

	const { values, setFieldValue, handleSubmit, errors } = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		onSubmit: () => {
			if (Object.entries(errors).length === 0) {
				login(values);
			}
		},
		validationSchema: Yup.object({
			email: Yup.string().email('Invalid Email').required('Required field'),
			password: Yup.string()
				.min(6, 'Min 6 characters')
				.required('Required field'),
		}),
	});
	return (
		<>
			<IonList className='px-2'>
				<h3 className='fw-bold'>Login</h3>
				<IonItem className='mt-3'>
					<IonLabel position='floating'>Email</IonLabel>
					<IonInput
						required
						type='email'
						onIonInput={(e: any) => {
							setFieldValue('email', e.target.value);
						}}
						value={values.email}
						color={errors.email ? 'danger' : 'default'}
					/>
					<IonIcon slot='start' icon={mailOutline} />
					{errors.password && (
						<IonNote color='danger'>{errors.email ? errors.email : ''}</IonNote>
					)}
				</IonItem>

				<IonItem className='mt-3'>
					<IonLabel position='floating'>Password</IonLabel>
					<IonInput
						required
						type='password'
						onIonInput={(e: any) => {
							setFieldValue('password', e.target.value);
						}}
						value={values.password}
						color={errors.email ? 'danger' : 'default'}
					/>
					<IonIcon slot='start' icon={lockClosedOutline} />
					{errors.password && (
						<IonNote color='danger'>
							{errors.password ? errors.password : ''}
						</IonNote>
					)}
				</IonItem>

				<IonButton
					onClick={() => {
						handleSubmit();
					}}
					disabled={Object.entries(errors).length !== 0}
					expand='block'
					className='mt-4 ion-button-full-rounded ion-text-capitalize fw-bold'>
					Sign In
				</IonButton>
				<IonButton
					onClick={() => {
						history.push('/signup');
					}}
					expand='block'
					fill='outline'
					className='ion-button-shadow-sm mt-3 ion-button-full-rounded ion-text-capitalize fw-bold'>
					Sign Up
				</IonButton>
			</IonList>
		</>
	);
};

export default LoginForm;
