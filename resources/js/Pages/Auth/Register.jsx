import InputError from "@/Components/UI/InputError";
import TextInput from "@/Components/UI/TextInput";
import AuthLayout from "@/Layouts/AuthLayout";
import { Link } from "@inertiajs/react";
import CommonButton from "@/Components/UI/CommonButton";
import { handleError } from "@/utils/helper";
import { RightArrowIcon, Logo } from "@/Components/img/svgIcons/SvgIcon";
import ThirdPartyLogin from "@/Components/common/ThirdPartyLogin";
import useForms from "@/Hooks/useForms";
import LoginFooter from "@/Components/UI/LoginFooter";
import { signupSchema } from "@/validations/schema";
import NavLink from "@/Components/UI/NavLink";

const initialValues = {
  email: "",
  password: "",
};

export default function Register() {
  const { data, post, processing, errors, handleChange, isValidForm } =
    useForms({
      fields: initialValues,
      validationSchema: signupSchema,
    });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const isValid = await isValidForm();
      if (!isValid) return false;
      post(route("register"));
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <AuthLayout>
      <div className="loginCommon_rightSide signup_form">
        <div className="loginCommon_rightSide_inner">
          <div className="backbtn">
            <Link href={"/"}>
              <RightArrowIcon /> Return to Home
            </Link>
          </div>
          <div className="loginCommon_rightSide_formBox">
            <div className="text-center mb-4 pb-xl-2">
              <Logo />
            </div>
            <div className="loginHeading">
              <h1>Sign up with</h1>
            </div>
            <ThirdPartyLogin />
            <div className="orLine">
              <span>or start with</span>
            </div>
            <div className="loginTabs">
              <div className="loginForm">
                <form onSubmit={submit}>
                  <TextInput
                    placeholder="Email"
                    id="email"
                    name="email"
                    type="email"
                    onChange={(e) => handleChange("email", e.target.value)}
                    value={data.email}
                    error={<InputError message={errors.email} />}
                  />

                  <TextInput
                    placeholder="Password"
                    id="password"
                    type="password"
                    onChange={(e) => handleChange("password", e.target.value)}
                    value={data.password}
                    error={<InputError message={errors.password} />}
                  />

                  <div className="w-100">
                    <CommonButton
                      type="submit"
                      title="Create Account"
                      fluid
                      disabled={processing}
                    />
                  </div>
                  <div className="anAccount mt-3 text-center">
                    <h6>
                      Already have an account?{" "}
                      <NavLink href="/login">Login</NavLink>
                    </h6>
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
