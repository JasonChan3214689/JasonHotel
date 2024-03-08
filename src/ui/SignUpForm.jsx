import React, { useState } from "react";
import styled from "styled-components";
import { useSignup } from "../hooks/user/useSignUp";
import { useForm } from "react-hook-form";

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

function SignUpForm({ onClose }) {
  const { signup, isLoading } = useSignup();
  const { register, getValues, handleSubmit } = useForm();

  function onSumbit({ fullName, email, password }) {
    signup(
      { fullName, email, password },
      {
        onSuccess: () => {
          if (onClose) {
            onClose();
          }
        },
      }
    );
  }

  return (
    <FormContainer>
      <HotelIconWrapper>
        <img src="logo-light.png"></img>
      </HotelIconWrapper>
      <Title>請輸入以下的資料</Title>
      <Form onSubmit={handleSubmit(onSumbit)}>
        <Input
          type="text"
          name="FullName"
          placeholder="姓名 *"
          {...register("fullName", { required: "This field is required" })}
        />
        <Input
          type="email"
          name="email"
          placeholder="電子郵件 *"
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
          placeholder="密碼 *"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password need a minimum of 8 characters",
            },
          })}
        />
        <Input
          type="password"
          name="password"
          placeholder="確認密碼 *"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "Passwords need to match",
          })}
        />
        <Button type="submit">註冊</Button>
        <SpanWrapper>*為必須欄位</SpanWrapper>
      </Form>
    </FormContainer>
  );
}

export default SignUpForm;
