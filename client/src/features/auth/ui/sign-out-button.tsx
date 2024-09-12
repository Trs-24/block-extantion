import {UiButton} from "@/shared/ui/ui-button";
import {useSignOut} from "@/features/auth/ model/use-sign-out";

export function SignOutButton() {
    const {isLoading, signOut} = useSignOut()
    return <UiButton
        disabled={isLoading}
        onClick={() => signOut({})}
        variant="outlined"
    >Sign Out</UiButton>
}