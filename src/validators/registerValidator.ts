export type RegisterFormErrors = {
  fullname: string;
  phone: string;
  email: string;
  password: string;
};

export const validateRegisterForm = (data: {
  fullname: string;
  phone: string;
  email: string;
  password: string;
}): RegisterFormErrors => {
  const errors: RegisterFormErrors = {
    fullname: '',
    phone: '',
    email: '',
    password: '',
  };

  if (!data.fullname.trim()) {
    errors.fullname = 'Full name is required.';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Phone number is required.';
  } else if (!/^0\d{9}$/.test(data.phone)) {
    errors.phone = 'Invalid phone number.';
  }

  if (!data.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Invalid email.';
  }

  if (!data.password.trim()) {
    errors.password = 'Password is required.';
  } else if (data.password.length < 6) {
    errors.password = 'Password must be at least 6 characters.';
  }
  return errors;
};
