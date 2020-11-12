import * as yup from 'yup';

export default yup.object().shape({
    name: yup
    .string()
    .required('Username is required')
    .min(3, 'Username must be at least 3 characters long.'),
    email: yup
    .string()
    .email('Must have a valid email'),
    password: yup
    .string()
    .required('Must enter a password')
    .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character"
      ),
    termsOfService: yup
    .boolean()
    .oneOf([true],'Please agree to the ToS'),
})