import AppLayout from "../features/app-layout/view/AppLayout";
import KorisniciContainer from "../features/korisnici/container/KorisniciContainer";
import KorisnikContainer from "../features/korisnici/container/KorisnikContainer";
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
            },
            {
                path: "/korisnik/:korisnikId",
                element: <KorisnikContainer />,
            }
        ],
    },
];