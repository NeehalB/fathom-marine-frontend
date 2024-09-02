import { SubmitHandler, useForm } from "react-hook-form";
import Card from "../../components/Cards/Card";
import InputField from "../../components/Input/InputField";
import { SignupScreenField, SignupScreenText } from "./SignupEnum";
import { Inputs } from "../login/LoginDto";
import SubmitButton from "../../components/Button/SubmitButton";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { UserState } from "../../store/user/User.Slice";
import { addUser } from "../../store/user/User.Actions";

const SignupScreen: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const userDispatch = useAppDispatch();
  const userData = useAppSelector((state: { user: UserState }) => state.user);

  const handleOnSubmitForm: SubmitHandler<Inputs> = (data) => {
    userDispatch(addUser(data));
  };

  return (
    <div className="w-screen h-screen flex justify-center items-center box-border bg-gradient-to-r from-violet-500 to-fuchsia-500">
      <div className="min-w-xs max-w-lg w-3/4">
        <Card>
          <p className="text-center text-2xl font-semibold">
            {SignupScreenText.SIGN_UP}
          </p>
          <form onSubmit={handleSubmit(handleOnSubmitForm)}>
            <InputField
              label={SignupScreenText.FIRST_NAME}
              type="field"
              name={SignupScreenField.FIRST_NAME}
              register={register}
              errors={errors}
            />
            <InputField
              label={SignupScreenText.LAST_NAME}
              type="field"
              name={SignupScreenField.LAST_NAME}
              register={register}
              errors={errors}
            />
            <InputField
              label={SignupScreenText.EMAIL}
              type="email"
              name={SignupScreenField.EMAIL}
              register={register}
              errors={errors}
            />
            <InputField
              label={SignupScreenText.PASSWORD}
              type="password"
              name={SignupScreenField.PASSWORD}
              register={register}
              errors={errors}
            />
            <div className="w-full flex justify-center">
              <SubmitButton
                isLoading={userData.isLoading}
                text={SignupScreenText.SUBMIT}
              />
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default SignupScreen;
