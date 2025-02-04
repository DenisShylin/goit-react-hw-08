import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { register } from "../../redux/auth/operations";
import styles from "./RegisterForm.module.css";

const validationSchema = yup.object().shape({
  name: yup.string().trim().required("Name is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  password: yup
    .string()
    .min(7, "Password must be at least 7 characters")
    .required("Password is required"),
});

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    const { name, email, password } = values;
    dispatch(
      register({
        name,
        email,
        password,
      })
    );
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: "", email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <label className={styles.label}>
            Name
            <Field
              type="text"
              name="name"
              placeholder="Enter your name"
              className={styles.input}
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </label>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>
            Email
            <Field
              type="email"
              name="email"
              placeholder="Enter your email"
              className={styles.input}
            />
            <ErrorMessage
              name="email"
              component="div"
              className={styles.error}
            />
          </label>
        </div>

        <div className={styles.field}>
          <label className={styles.label}>
            Password
            <Field
              type="password"
              name="password"
              placeholder="Enter your password"
              className={styles.input}
            />
            <ErrorMessage
              name="password"
              component="div"
              className={styles.error}
            />
          </label>
        </div>

        <button type="submit" className={styles.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegisterForm;
