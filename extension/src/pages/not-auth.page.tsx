import {UiLogo} from "@/shared/ui/ui-logo.tsx";
import {UiButton} from "@/shared/ui/ui-button.tsx";
import {createTab} from "@/shared/lib/browser.ts";
import {ADMIN_SIGN_IN_URL} from "@/shared/constants.ts";

export function NotAuthPage() {
    return (
        <div className="p-8 flex flex-col gap-3">
            <UiLogo />

            <h2 className="text-xl">You are not authorized!</h2>
            <UiButton variant="primary" onClick={() => createTab(ADMIN_SIGN_IN_URL)} >Sign In</UiButton>
        </div>
    )
}