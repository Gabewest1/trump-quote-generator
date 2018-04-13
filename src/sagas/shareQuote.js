import { take } from "redux-saga/effects"
import { constants as socialMediaConstants } from "../actions/socialMedia"

const mapPlatformsToUrls = {
    facebook: "https://www.facebook.com/dialog/feed?app_id=145634995501895&message=",
    tumblr: "https://api.tumblr.com/v2/blog/citriccomics.tumblr.com/post/text?api_key=zYSYZcJ75NLX7y4Gg48iK6ARpEwrvzcDchPNcqK4mEyECycLPk&body=",
    twitter: "https://twitter.com/intent/tweet?text=",
}

export function* shareQuote() {
    while(true) {
        let { socialMediaPlatform, quote } = yield take(socialMediaConstants.POST_QUOTE_SOCIAL_MEDIA)

        let url = mapPlatformsToUrls[socialMediaPlatform] + quote

        window.open(url, "_blank")
    }
}