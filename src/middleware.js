// middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  // Get the token from the request cookies
  const token = request.cookies.get('token'); // Access the token from the cookies
  const { pathname } = request.nextUrl;

  // List of routes that should only be accessible when the token is present
  //const protectedRoutes = ['/home', '/adjustDeposit', '/billDetail', '/bills', '/contractDetail', '/contracts', '/deposit', '/firstees', '/firstmoove', '/monthlyPayment', '/payBill', '/paymentPlan', '/paymentTerm'];
  const protectedRoutes = 
  [ 
    '/home',
    '/adjustDeposit', 
    '/bills/billDetail', 
    '/bills', 
    '/contracts/contractDetail', 
    '/contracts', 
    '/deposit',  
    '/firstmoove', 
    '/monthlyPayment', 
    '/payBill', 
    '/paymentPlan', 
    '/paymentTerm',
    '/settings'
  ];
    // Defining auth routes that should be inaccessible if a token is present
    const authRoutes = ['/login', '/loginVerification', '/register', '/registerVerification','/forgetPassword', '/newPassword', '/verification', '/passwordChanged'];

  // Check if the current pathname is a protected route
  if (protectedRoutes.includes(pathname) && !token) {

    return NextResponse.redirect(new URL('/login', request.url));
  }

    // Check if user is trying to access an auth route with a token
    if (authRoutes.includes(pathname) && token) {
      return NextResponse.redirect(new URL('/home', request.url));
    }
  // If the route is accessible, proceed to the next middleware or request handler
  return NextResponse.next();
}

// Configure the middleware to match specific paths
export const config = {
 // matcher: ['/home', '/adjustDeposit', '/billDetail', '/bills', '/contractDetail', '/contracts', '/deposit', '/firstees', '/firstmoove', '/monthlyPayment', '/payBill', '/paymentPlan', '/paymentTerm'], // Paths to protect
  matcher: 
    [
      '/home',
      '/adjustDeposit', 
      '/bills/billDetail', 
      '/bills', 
      '/contracts/contractDetail', 
      '/contracts', 
      '/deposit',  
      '/firstmoove', 
      '/monthlyPayment', 
      '/payBill', 
      '/paymentPlan', 
      '/paymentTerm',
      '/settings',
      '/login', 
      '/loginVerification', 
      '/register', 
      '/registerVerification',
      '/forgetPassword', 
      '/newPassword', 
      '/verification', 
      '/passwordChanged'
    ], // Paths to protect

};
