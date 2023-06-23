import { RawResponse } from "@/entities/Response";
import { api } from "@/libs/axios";
import parseResponseData from "@/utils/parseResponseData";
import {
  useMutation,
  UseMutationOptions,
  useQuery,
} from "@tanstack/react-query";
import { keyGetSpending, keyListSpending } from "./keys";
import { AxiosError } from "axios";
import { Spending } from "@/entities/Spending/spending";

export const useListSpending = () => {
  return useQuery(keyListSpending(), () =>
    api.get<RawResponse<Spending[]>>(`/api/spendings`).then(parseResponseData)
  );
};

export const useGetCostumer = (id: string) => {
  return useQuery(
    keyGetSpending(id),
    () =>
      api
        .get<RawResponse<Spending>>(`/api/spendings/${id}`)
        .then(parseResponseData),
    {
      enabled: Boolean(id),
    }
  );
};

export const useCreateSpending = (
  options?: UseMutationOptions<Spending, AxiosError, Spending>
) => {
  // return useMutation<Spending, AxiosError, Spending>(
  //   (data) =>
  //     api
  //       .post<RawResponse<Spending>>(`/api/spendings`, data)
  //       .then(parseResponseData),
  //   options
  // );

  const create = async (data: Spending) => {
    const result = await api.post<RawResponse<Spending>>(
      `/api/spendings/`,
      data
    );
    return parseResponseData(result);
  };

  return useMutation(create, options);
};

export const useUpdateSpending = (
  options?: UseMutationOptions<Spending, AxiosError, Spending>
) => {
  return useMutation<Spending, AxiosError, Spending>(
    (data) =>
      api
        .put<RawResponse<Spending>>(`/api/spendings/${data.id}`, data)
        .then(parseResponseData),
    options
  );
};

export const useDeleteSpending = (
  options?: UseMutationOptions<
    Spending,
    AxiosError,
    // DeleteUserExchangeProps,
    Spending
  >
) => {
  return useMutation<Spending, AxiosError, Spending>(
    ({ id }) =>
      api
        .delete<RawResponse<Spending>>(`/api/spendings/${id}`)
        .then(parseResponseData),
    options
  );
};
