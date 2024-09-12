import {NotAuthPage} from "@/pages/not-auth.page.tsx";
import {useSessionQuery} from "@/entities/session";
import {UiPageSpinner} from "@/shared/ui/ui-page-spinner.tsx";
import {HomePage} from "@/pages/home.page.tsx";

export function AppRouter() {
    const {isLoading, isSuccess} = useSessionQuery();

    if (isLoading) {
        return <UiPageSpinner />
    }

    if (isSuccess) {
        return <HomePage />
    }

    return <NotAuthPage />
}