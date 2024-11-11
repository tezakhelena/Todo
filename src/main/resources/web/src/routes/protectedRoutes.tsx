import AppLayout from "../features/app-layout/view/AppLayout";
import KorisniciContainer from "../features/korisnici/container/KorisniciContainer";
import ErrorPage from "../helpers/ErrorPage";

export const protectedRoutes = [
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/korisnici",
                element: <KorisniciContainer />,
            }
        ],
    },
];