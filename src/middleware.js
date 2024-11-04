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

  // Check if the current pathname is a protected route
  if (protectedRoutes.includes(pathname)) {
    // If there's no token, redirect to the login page
    console.log("Point 1")
    console.log(token)
    if (!token) {
      console.log("Point 2")
      return NextResponse.redirect(new URL('/login', request.url));
    }
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
      '/settings'
    ], // Paths to protect

};
