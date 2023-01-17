const ROUTES = [
    {
        url: '/dashboard',
        auth: false,
        creditCheck: false,
        proxy: {
            target: "http://localhost:8000/dashboard",
            changeOrigin: true,
            pathRewrite: {
                [`^/dashboard`]: '',
            },
        }
    },
    {
        url: '/user',
        auth: true,
        creditCheck: true,
        proxy: {
            target: "http://localhost:18080/api",
            changeOrigin: true,
            pathRewrite: {
                [`^/user`]: '',
            },
        }
    }
]

exports.ROUTES = ROUTES;