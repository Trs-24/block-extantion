import {UiLogo} from "@/shared/ui/ui-logo.tsx";
import {UiButton} from "@/shared/ui/ui-button.tsx";
import {createTab} from "@/shared/lib/browser.ts";
import {ADMIN_URL} from "@/shared/constants.ts";
import {ToggleBlockingButton} from "@/features/toggle-blocking/ui/ui-toggle-blocking-button.tsx";

export function HomePage() {
    return (
        <div className="p-8 flex flex-col gap-3">
            <UiLogo />
            <ToggleBlockingButton />
            <UiButton variant="outlined" onClick={() => createTab(ADMIN_URL)} >
                Manage extension
            </UiButton>
        </div>
    )
}