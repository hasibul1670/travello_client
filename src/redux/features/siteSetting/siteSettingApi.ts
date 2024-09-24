import {baseApi} from "@/redux/api/baseApi";
import {tagTypes} from "@/redux/reduxConfig/tagTypes";

const SiteSettingApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSiteSetting: builder.query({
      query: (pageId) => ({
        url: `site-settings?updatedAt=&pageId=${pageId}`,
        method: "GET",
      }),
      providesTags: [tagTypes.siteSettings],
    }),
  }),
});

export const {useGetAllSiteSettingQuery} = SiteSettingApi;
