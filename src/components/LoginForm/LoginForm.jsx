import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import { login } from "../../redux/auth/operations";
import styles from "./LoginForm.module.css";

const validationSchema = yup.object().shape({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup.string().min(7, "Too Short!").required("Required"),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm }) => {
    dispatch(login(values));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <div className={styles.field}>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="div" className={styles.error} />
        </div>

        <div className={styles.field}>
          <Field type="password" name="password" placeholder="Password" />
          <ErrorMessage
            name="password"
            component="div"
            className={styles.error}
          />
        </div>

        <button type="submit" className={styles.button}>
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
