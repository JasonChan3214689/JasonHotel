import styled from "styled-components";
import { useForm } from "react-hook-form";
import { useLogin } from "../hooks/user/useLogin";
import { useUser } from "../hooks/user/useUser";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  width: 100%;
  padding: 5px;
  margin-bottom: 15px;
  border: 0px solid #ddd;
  border-radius: 2px;

  &::placeholder {
    font-size: 1.2rem;
  }
`;

const Button = styled.button`
  padding: 10px 15px;
  background-color: var(--color-gold-300);

  border: none;
  cursor: pointer;
  margin-bottom: 15px;

  &:hover {
    background-color: var(--color-gold-600);
  }
`;

const Title = styled.h6`
  margin-bottom: 10px;
  color: var(--color-white-300);
`;

const HotelIconWrapper = styled.div`
  width: 150px;
  height: auto;
  margin-top: -2rem;

  img {
    width: 100%;
    height: auto;
  }
`;

const SpanWrapper = styled.span`
  text-align: center;
  font-size: 0.8rem;
  color: var(--color-white-300);
`;

const LogInForm = ({ onClose }) => {
  const { login, isLoading } = useLogin();
  const { refetchUser } = useUser();
  const { register, handleSubmit, reset } = useForm();

  function onSumbit({ email, password }) {
    if (!login || !password) return;
    login(
      { email, password },
      {
        onSuccess: () => {
          if (onClose) {
            onClose();
          }
          refetchUser();
          //onSettled: () => reset,
        },
      }
    );
  }
  return (
    <div>
      <FormContainer>
        <HotelIconWrapper>
          <img src="logo-light.png"></img>
        </HotelIconWrapper>
        <Title>請輸入以下的資料</Title>
        <Form onSubmit={handleSubmit(onSumbit)}>
          <Input
            type="email"
            name="email"
            value="aa4321aa456@gmail.com"
            placeholder="電子郵件"
            {...register("email", {
              required: "This field is required",
              pattern: {
                value: /\S+@\S+\.\S+/,
                message: "Please provid a valid email address",
              },
            })}
          />
          <Input
            type="password"
            name="password"
            value="12345678"
            placeholder="密碼"
            {...register("password", {
              required: "This field is required",
              minLength: {
                value: 8,
                message: "Password need a minimum of 8 characters",
              },
            })}
          />

          <Button type="submit">登入</Button>
        </Form>
      </FormContainer>
    </div>
  );
};

export default LogInForm;
