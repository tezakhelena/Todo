import AppLayout from "../features/app-layout/view/AppLayout";
import KorisniciContainer from "../features/korisnici/container/KorisniciContainer";
import KorisnikContainer from "../features/korisnici/container/KorisnikContainer";
import NoviZadatakContainer from "../features/zadaci/container/NoviZadatakContainer";
import ZadaciContainer from "../features/zadaci/container/ZadaciContainer";
import ZadatakContainer from "../features/zadaci/container/ZadatakContainer";
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
            },
            {
                path: "/zadaci",
                element: <ZadaciContainer />,
            },
            {
                path: "/zadatak/new",
                element: <NoviZadatakContainer />,
            },
            {
                path: "/zadatak/:zadatakId",
                element: <ZadatakContainer />,
            },
        ],
    },
];