import { Banner } from "Components/Banner/Index"
import { Outlet } from "react-router-dom"

export const PaginaPadrao = () => {
    return(
        <main>
            <Banner/>
            <Outlet />
        </main>
    )
}