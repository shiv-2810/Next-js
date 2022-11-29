import { createImageUrlBuider, createCurrentUserHook, createClient} from "next-sanity"

export const config ={
    dataset: process.env.
    NEXT_PUBLIC_SANITY_DATASET || "production",
    projectId:process.env.
    NEXT_PUBLIC_SANITY_PROJECT_ID,
    apiVersion:"2022-11-29",

    useCdn: process.env.NODE_ENV === "production"

}


export const sanityClient = createClient(config)

export const urlFor = (source) => createImageUrlBuider(config).image(source)

export const useCurrentUser = createCurrentUserHook(config);