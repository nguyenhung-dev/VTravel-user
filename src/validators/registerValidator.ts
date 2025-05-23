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
    errors.fullname = 'Họ tên không được bỏ trống';
  }

  if (!data.phone.trim()) {
    errors.phone = 'Số điện thoại bắt buộc';
  } else if (!/^0\d{9}$/.test(data.phone)) {
    errors.phone = 'Số điện thoại không hợp lệ';
  }

  if (!data.email.trim()) {
    errors.email = 'Email bắt buộc';
  } else if (!/\S+@\S+\.\S+/.test(data.email)) {
    errors.email = 'Email không hợp lệ';
  }

  if (!data.password.trim()) {
    errors.password = 'Mật khẩu không được để trống';
  } else if (data.password.length < 6) {
    errors.password = 'Mật khẩu phải ít nhất 6 ký tự';
  }

  return errors;
};
