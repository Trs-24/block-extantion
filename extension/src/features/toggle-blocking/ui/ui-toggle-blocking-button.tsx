import { UiButton } from "@/shared/ui/ui-button";
import {useToggleBlocking} from "@/features/toggle-blocking/model/use-toggle-blocking";

export function ToggleBlockingButton() {
    const {
        isBlockingEnabled,
        toggleBlocking,
        isReady,
        isLoading
    } = useToggleBlocking();

    if (!isReady) {
        return null;
    }

    return (
        <UiButton
            disabled={isLoading}
            onClick={toggleBlocking}
            variant={isBlockingEnabled ? "secondary" : "primary"}
        >
            {isBlockingEnabled ? "Disable Blocking" : "Enable Blocking"}
        </UiButton>
    );
}