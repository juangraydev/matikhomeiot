export default [
    {
        path: "/",
        component: "modules/landing/index.js",
        name: "Landing Page"
    },
    {
        path: "/auth/signin",
        component: "modules/auth/signin.js",
        name: "Sign In Page"
    },
    {
        path: "/auth/signup",
        component: "modules/auth/signup.js",
        name: "Sign Up Page"
    },
    {
        path: "/dashboard",
        component: "modules/dashboard/index.js",
        name: "User Dashboard"
    },
    {
        path: "*",
        component: "modules/landing/index.js",
        name: "Page not Found"
    },
    
]