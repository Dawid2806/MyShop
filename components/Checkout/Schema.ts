import * as yup from "yup";

export const validateMMYY = (value: any) => {
  if (!value || !value.includes("/")) {
    return false;
  }
  const [month, year] = value.split("/");
  if (Number(month) > 12) {
    return false;
  }
  if (Number(year) < 22 || Number(year) > 33) {
    return false;
  }
  return true;
};

export const schema = yup
  .object({
    firstName: yup.string().max(16).required(),
    lastName: yup.string().max(24).required(),
    email: yup.string().email().required(),
    coutry: yup.string().required(),
    postalCode: yup.string().min(3).max(8).required(),
  })
  .shape({
    phone: yup.string().matches(/^[0-9]{9}$/),
    cardNumber: yup
      .string()
      .matches(/^[0-9]{16}$/, "Invalid credit card number")
      .required(),
    cardExpiry: yup
      .string()
      .test("test MMYY", "Only MM/YY", validateMMYY)
      .required(),
    cardCVC: yup
      .string()
      .matches(/^[0-9]{3}$/, "Invalid code CVC")
      .required(),
  })
  .required();
