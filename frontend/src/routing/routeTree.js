import { createRootRoute } from "@tanstack/react-router"
// import { homePageRoute } from "./homepage"
import { authRoute } from "./auth.route"
import App from "../App"
import { dasboardRoute } from "./dashBoard"
import { homePageRoute } from "./homePage"
// import RootLayout from "../RootLayout"

export const rootRoute = createRootRoute({
    component: App
})

export const routeTree =rootRoute.addChildren([
    homePageRoute, 
    authRoute, 
    dasboardRoute
])