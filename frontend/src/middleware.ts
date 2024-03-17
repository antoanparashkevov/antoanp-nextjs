import { NextRequest, NextResponse } from "next/server";
import Negotiator from "negotiator";
import { match } from "@formatjs/intl-localematcher";

export const supportedLocales = ['en', 'bg'];
export const defaultLocale = 'en';

function getLocale(request: NextRequest): string {
    const headers = new Headers(request.headers);
    const acceptLanguage = headers.get("Accept-Language");
    console.log("acceptLanguage", acceptLanguage)
    if( acceptLanguage ) {
        headers.set("Accept-Language", acceptLanguage.replaceAll("_", "-"));
    }

    const headersObject = Object.fromEntries(headers.entries());
    console.log("headersObject", headersObject)
    const languages = new Negotiator({ headers: headersObject }).languages();
    console.log("languages", languages)
    console.log("match(languages, supportedLocales, defaultLocale)", match(languages, supportedLocales, defaultLocale))
    return match(languages, supportedLocales, defaultLocale);
}

export function middleware(request: NextRequest) {
    let locale = getLocale(request) ?? defaultLocale;
    let pathName = request.nextUrl.pathname;// should be /

    const newUrl = new URL(`/${locale}${pathName}`, request.nextUrl);// transform it from / to /en/

    return NextResponse.rewrite(newUrl);//DOES NOT CHANGE THE ACTUAL URL. IT IS STILL /
}

export const config = {
    matcher: ["/", "/admin"]
};