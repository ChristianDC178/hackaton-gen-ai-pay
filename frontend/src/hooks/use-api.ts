import { useMutation, useQuery } from "@tanstack/react-query";
import { getApi, postLogin } from "../lib/api";

export const useGetApi = () => {
  return useQuery({
    queryKey: ["get-api"],
    queryFn: () => getApi(),
  });
};

export const usePostLogin = () => {
  return useMutation({
    mutationKey: ["post-login"],
    mutationFn: (body: { email: string; }) => postLogin(body),
  });
};