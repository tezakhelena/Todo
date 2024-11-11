import AppLayout from "../features/app-layout/view/AppLayout";
import DetaljiKorisnikaContainer from "../features/detalji-korisnika/container/DetaljiKorisnikaContainer";
import KorisniciContainer from "../features/korisnici/container/KorisniciContainer";
import DetaljiZadatkaContainer from "../features/zadaci/container/DetaljiZadatkaContainer";
import DodajZadatakContainer from "../features/zadaci/container/DodajZadatakContainer";
import UrediZadatakContainer from "../features/zadaci/container/UrediZadatakContainer";
import ZadaciContainer from "../features/zadaci/container/ZadaciContainer";
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
                path: "/korisnici/detalji/:id",
                element: <DetaljiKorisnikaContainer />,
            },
            {
                path: "/zadaci",
                element: <ZadaciContainer />,
            },
            {
                path: "/zadaci/dodaj",
                element: <DodajZadatakContainer />
            },
            {
                path: "/zadaci/detalji/:zadatakId",
                element: <DetaljiZadatkaContainer />
            },
            {
                path: "/zadaci/azuriraj/:zadatakId",
                element: <UrediZadatakContainer />
            }
        ],
    },
];