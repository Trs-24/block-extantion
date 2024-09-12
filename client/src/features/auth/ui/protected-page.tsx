import {PropsWithChildren, ReactElement} from "react";
import {UiPageSpinner} from "@/shared/ui/ui-page-spinner";
import {useRouter} from "next/router";
import {ROUTES} from "@/shared/constants/routes";
import {useSessionQuery} from "@/entities/session";

export function protectedPage<P>(Component: (props: P) => ReactElement) {
    return function ProtectedPage(props: PropsWithChildren<P>) {

        const router = useRouter();

        const {isLoading, isError} = useSessionQuery();

        if (isLoading) {
            return <UiPageSpinner />
        }

        if (isError) {
            router.replace(ROUTES.SIGN_IN)
        }

        return <Component {...props} />
    }
}