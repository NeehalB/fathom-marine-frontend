import React, { useEffect } from "react";
import Card from "../../components/Cards/Card";
import { useForm, SubmitHandler } from "react-hook-form";
import { Inputs } from "./LoginDto";
import InputField from "../../components/Input/InputField";
import { LoginScreenField, LoginScreenText } from "./loginEnum";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { login } from "../../store/user/User.Actions";
import { UserState } from "../../store/user/User.Slice";
import SubmitButton from "../../components/Button/SubmitButton";
import { useNavigate } from "react-router-dom";

const LoginScreen: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const userDispatch = useAppDispatch();
  const userData = useAppSelector((state: { user: UserState }) => state.user);

  const navigate = useNavigate();

  const handleOnSubmitForm: SubmitHandler<Inputs> = (data) => {
    userDispatch(login(data));
  };

  useEffect(() => {
    if (!userData.isLoading && userData.loginStatus) {
      navigate("/");
    }
  }, [navigate, userData.isLoading, userData.loginStatus]);

  return (
    <div className="w-screen h-screen flex justify-center items-center box-border bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="min-w-xs max-w-lg w-3/4">
        <Card>
          <img
            src="/media/logo.png"
            alt={LoginScreenText.LOGO_ALT}
            className="w-full"
          />
          <p className="text-center text-2xl font-semibold">
            {LoginScreenText.LOGIN}
          </p>
          <form onSubmit={handleSubmit(handleOnSubmitForm)}>
            <InputField
              label={LoginScreenText.EMAIL}
              type="email"
              name={LoginScreenField.EMAIL}
              register={register}
              errors={errors}
            />
            <InputField
              label={LoginScreenText.PASSWORD}
              type="password"
              name={LoginScreenField.PASSWORD}
              register={register}
              errors={errors}
            />
            <div className="w-full flex justify-center">
              <SubmitButton
                isLoading={userData.isLoading}
                text={LoginScreenText.SUBMIT}
              />
            </div>
          </form>
          <p
            className="text-center mt-5 underline underline-offset-2 cursor-pointer"
            onClick={() => {
              navigate("/sign_up");
            }}
          >
            Not a memeber? Sign up.
          </p>
        </Card>
      </div>
    </div>
  );
};

export default LoginScreen;
