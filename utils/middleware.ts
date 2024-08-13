// middleware.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    // URL dari request yang masuk
    const url = request.nextUrl.clone();

    // Daftar rute yang bisa diakses tanpa login
    const publicRoutes = ['/auth/register', '/auth/login', '/home'];

    // Periksa apakah URL adalah salah satu dari rute publik
    if (publicRoutes.includes(url.pathname)) {
        return NextResponse.next();
    }

    // Periksa apakah pengguna sudah login (misalnya, dengan memeriksa cookie atau session)
    const token = request.cookies.get('authToken');

    // Jika tidak ada token dan URL bukan salah satu rute publik, arahkan ke login
    if (!token) {
        url.pathname = '/auth/login';
        return NextResponse.redirect(url);
    }

    // Jika pengguna sudah login, lanjutkan permintaan
    return NextResponse.next();
}

// Tentukan bagian yang menggunakan middleware
export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'], // Mengatur rute yang harus melalui middleware
};