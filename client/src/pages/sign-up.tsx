import {UiHeader} from "@/shared/ui/ui-header";
import {UiFormPageLayout} from "@/shared/ui/layouts/ui-form-page-layout";
import {SignUpForm} from "@/features/auth";

export function SignUpPage() {
    return (
        <UiFormPageLayout
            title="Sign Up"
            header={ <UiHeader /> }
            form={ <SignUpForm /> }
        />
    )
}