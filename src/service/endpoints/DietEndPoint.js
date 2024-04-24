/** @format */

import { ApiService } from "../ApiService";

export const DietApi = ApiService.injectEndpoints({
	endpoints: (builder) => ({
		GetApi: builder.query({
			query: () => ({
				url: "/diet",
				method: "GET",
			}),
		}),
	}),
});

export const { useGetApiQuery } = DietApi;
