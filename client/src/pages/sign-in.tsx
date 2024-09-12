import {UiHeader} from "@/shared/ui/ui-header";
import {UiFormPageLayout} from "@/shared/ui/layouts/ui-form-page-layout";
import {SignInForm} from "@/features/auth";

export function SignInPage() {
    return (
        <UiFormPageLayout
            title="Sign In"
            header={ <UiHeader /> }
            form={ <SignInForm /> }
        />
    )
}