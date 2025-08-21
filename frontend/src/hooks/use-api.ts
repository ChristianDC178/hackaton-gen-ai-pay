import { useMutation, useQuery } from "@tanstack/react-query";
import { postApi, postLogin } from "../lib/api";

export const usePostApi = () => {
  return useMutation({
    mutationKey: ["post-api"],
    mutationFn: (body: { province: string; name: string }) => postApi(body),
  });
};

export const usePostLogin = () => {
  return useMutation({
    mutationKey: ["post-login"],
    mutationFn: (body: { email: string; }) => postLogin(body),
  });
};