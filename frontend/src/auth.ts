'use server';

import {jwtVerify, SignJWT} from "jose";
import {cookies} from "next/headers";

const secretKey = 'secret';
const key = new TextEncoder().encode(secretKey);

export async function encrypt(payload: any) {
    return await new SignJWT(payload)
        .setProtectedHeader({ alg: "HS256"})
        .setIssuedAt()
        .setExpirationTime('10 sec from now')
        .sign(key)
}

export async function decrypt(session: string): Promise<any> {
    const { payload } = await jwtVerify(session, key, {
        algorithms: ['HS256']
    });

    return payload;
}

export async function signIn(formData: FormData): Promise<void> {
    const user = { email: formData.get('email') };

    const expires = new Date(Date.now() + 10 * 1000);
    const session = await encrypt({ user, expires });

    cookies().set('session', session, { expires, httpOnly: true });
}

export async function signOut() {
    cookies().set('session', '', { expires: new Date(0) })
}

export async function getSession(): Promise<any | null> {
    const session = cookies().get('session')?.value;

    if( !session ) return null;

    return await decrypt(session)
}