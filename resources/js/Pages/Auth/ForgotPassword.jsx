import { Logo, RightArrowIcon } from "@/Components/img/svgIcons/SvgIcon";
import LoginFooter from "@/Components/UI/LoginFooter";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head, Link } from "@inertiajs/react";
import InputError from "@/Components/UI/InputError";
import TextInput from "@/Components/UI/TextInput";
import { forgetSchema } from "@/validations/schema";
import CommonButton from "@/Components/UI/CommonButton";
import { handleError } from "@/utils/helper";
import useForms from "@/Hooks/useForms";
import AlertMsg from "@/Components/UI/AlertMsg";

const initialValues = {
  email: "",
};

export default function ForgotPassword({ status }) {
  const { data, post, processing, errors, isValidForm, handleChange } =
    useForms({
      fields: initialValues,
      validationSchema: forgetSchema,
    });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const isValid = await isValidForm();
      if (!isValid) return;
      post(route("password.email"));
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <AuthLayout>
      <Head title="Forgot Password" />
      <div className="loginCommon_rightSide">
        <div className="loginCommon_rightSide_inner">
          <div className="backbtn">
            <Link href="/">
              <RightArrowIcon /> Return to Home
            </Link>
          </div>
          <div className="loginCommon_rightSide_formBox forgot_form">
            <div className="text-center mb-4 pb-xl-2">
              <Logo />
            </div>
            <div className="loginHeading">
              <h1>Locate Your Account</h1>
            </div>

            <div className="orLine">
              <span>Enter your email or username</span>
            </div>
            <div className="loginTabs">
              <div className="loginForm">
                <form onSubmit={submit}>
                  <AlertMsg message={status} />
                  <TextInput
                    placeholder="Email"
                    className=""
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                    value={data.email}
                    error={<InputError message={errors.email} />}
                  />

                  <div className="w-100 pt-3">
                    <CommonButton
                      disabled={processing}
                      type="submit"
                      title="Locate Account"
                      fluid
                    />
                  </div>

                  <div className="pt-4">
                    <p className="text-center login_fontStyle_forget">
                      <Link href="/login">Return to Login</Link>
                    </p>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-4 mt-md-5">
            <LoginFooter />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
