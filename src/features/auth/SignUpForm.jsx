import React, { useState } from "react";
import styled from "styled-components";
import { useSignup } from "../../hooks/user/useSignUp";
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
    font-size: 0.8rem;
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

const SpanErrorWrapper = styled.span`
  text-align: center;
  font-size: 0.8rem;
  color: red;
`;

function SignUpForm({ onClose }) {
  const { signup, isLoading } = useSignup();
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm();

  function onSumbit(data) {
    signup(data, {
      onSuccess: () => {
        if (onClose) {
          onClose();
        }
      },
    });
  }

  return (
    <FormContainer>
      <HotelIconWrapper>
        <img src="logo-light.png" alt="Hotel Logo"></img>{" "}
      </HotelIconWrapper>
      <Title>請輸入以下的資料</Title>
      <Form onSubmit={handleSubmit(onSumbit)}>
        <Input
          type="text"
          placeholder="姓名 *"
          {...register("fullName", { required: "This field is required" })}
        />
        {errors.fullName && (
          <SpanErrorWrapper>{errors.fullName.message}</SpanErrorWrapper>
        )}

        <Input
          type="email"
          placeholder="電子郵件 *"
          {...register("email", {
            required: "This field is required",
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "請提供正確的電子鄱件",
            },
          })}
        />
        {errors.email && (
          <SpanErrorWrapper>{errors.email.message}</SpanErrorWrapper>
        )}

        <Input
          type="password"
          placeholder="密碼 *"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "密碼至少要八字符長度",
            },
          })}
        />
        {errors.password && (
          <SpanErrorWrapper>{errors.password.message}</SpanErrorWrapper>
        )}

        <Input
          type="password"
          placeholder="確認密碼 *"
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              value === getValues().password || "密碼並不一致",
          })}
        />
        {errors.passwordConfirm && (
          <SpanErrorWrapper>{errors.passwordConfirm.message}</SpanErrorWrapper>
        )}

        <Button type="submit" disabled={isLoading}>
          註冊
        </Button>
        <SpanWrapper>*為必須欄位</SpanWrapper>
      </Form>
    </FormContainer>
  );
}

export default SignUpForm;
