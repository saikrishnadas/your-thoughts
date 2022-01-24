import {
  createImageUrlBuilder,
  createCurrentUserHook,
  createClient,
} from "next-sanity";

export const config = {
  // Find your Project Id and dataset in `sanity.json` in your studio project
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  apiVersion: "2021-03-25",

  useCdn: process.env.NODE_ENV == "production",
};

//Set up the client for fetching data in the getProps page functions
export const sanityClient = createClient(config);

//Helper function to generate image url from the asset data
export const urlFor = (source) => createImageUrlBuilder(config).image(source);

//Helper function for using the current logged in user account
export const useCurrentUser = createCurrentUserHook(config);
