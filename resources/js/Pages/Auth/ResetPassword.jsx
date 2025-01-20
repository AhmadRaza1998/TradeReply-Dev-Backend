import CommonButton from "@/Components/UI/CommonButton";
import AuthLayout from "@/Layouts/AuthLayout";
import { Head } from "@inertiajs/react";
import useForms from "@/Hooks/useForms";
import { RightArrowIcon, Logo } from "@/Components/img/svgIcons/SvgIcon";
import LoginFooter from "@/Components/UI/LoginFooter";
import NavLink from "@/Components/UI/NavLink";
import AlertMsg from "@/Components/UI/AlertMsg";
import InputError from "@/Components/UI/InputError";
import TextInput from "@/Components/UI/TextInput";
import { noop } from "lodash";
import { resetSchema } from "@/validations/schema";
import { handleError } from "@/utils/helper";

export default function ResetPassword({ token, email }) {
  const { data, post, processing, errors, reset, handleChange, isValidForm } =
    useForms({
      fields: {
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
      },
      validationSchema: resetSchema,
    });

  const submit = async (e) => {
    e.preventDefault();
    try {
      const isValid = await isValidForm();
      if (!isValid) return;

      post(route("password.store"), {
        onFinish: () => reset("password", "password_confirmation"),
      });
    } catch (error) {
      handleError(error);
    }
  };

  return (
    <AuthLayout>
      <Head title="Reset Password" />

      <div className="loginCommon_rightSide">
        <div className="loginCommon_rightSide_inner">
          <div className="backbtn">
            <NavLink href={"/"}>
              <RightArrowIcon /> Return to Home
            </NavLink>
          </div>
          <div className="loginCommon_rightSide_formBox">
            <div className="text-center mb-4 pb-xl-2">
              <Logo />
            </div>

            <div className="orLine">
              <span>Reset Password</span>
            </div>
            <div className="loginTabs">
              <div className="loginForm">
                <AlertMsg message={status} />

                <form onSubmit={submit}>
                  <TextInput
                    placeholder="Email"
                    className=""
                    id="email"
                    name="email"
                    type="email"
                    value={data.email}
                    disabled
                    onChange={noop}
                    error={<InputError message={errors.email} />}
                  />
                  <TextInput
                    placeholder="Password"
                    id="password"
                    className=""
                    type="password"
                    onChange={(e) => handleChange("password", e.target.value)}
                    autoFocus={true}
                    value={data.password}
                    error={<InputError message={errors.password} />}
                  />

                  <TextInput
                    type="password"
                    placeholder="Confirm Password"
                    id="password_confirmation"
                    name="password_confirmation"
                    value={data.password_confirmation}
                    className="mt-1 block w-full"
                    autoComplete="new-password"
                    onChange={(e) =>
                      handleChange("password_confirmation", e.target.value)
                    }
                    error={
                      <InputError message={errors.password_confirmation} />
                    }
                  />

                  <div className="w-100">
                    <CommonButton
                      type="submit"
                      title="Reset Password"
                      fluid
                      disabled={processing}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className="mt-4 mt-md-5">
            {" "}
            <LoginFooter />
          </div>
        </div>
      </div>
    </AuthLayout>
  );
}
