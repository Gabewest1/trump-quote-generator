const POST_QUOTE_SOCIAL_MEDIA = "POST_QUOTE_SOCIAL_MEDIA"

const postQuoteSocialMedia = (socialMediaPlatform, quote) => ({ type: POST_QUOTE_SOCIAL_MEDIA, socialMediaPlatform, quote })

export const constants = {
    POST_QUOTE_SOCIAL_MEDIA,
}

export const actions = {
    postQuoteSocialMedia,
}