import {UiTextField} from "@/shared/ui/ui-text-field";
import {UiButton} from "@/shared/ui/ui-button";
import {ROUTES} from "@/shared/constants/routes";
import {UiLink} from "@/shared/ui/ui-link";
import {useSignUpForm} from "@/features/auth/ model/use-sign-up-form";

export function SignUpForm() {
    const {
        handleSubmit,
        register,
        isLoading,
        errorMessage
    } = useSignUpForm();

    return (
        <form
            className="flex flex-col gap-2"
            onSubmit={handleSubmit}
        >
            <UiTextField label="Email" inputProps={{ type: "email", ...register('email', { required: true })}} />
            <UiTextField label="Password" inputProps={{ type: "password", ...register('password', { required: true })}} />
            <UiButton disabled={isLoading} variant="primary">Sign Up</UiButton>
            <UiLink className="text-center" href={ROUTES.SIGN_IN}>Sign In</UiLink>
            {errorMessage && <div className="text-rose-500">{errorMessage}</div>}
        </form>
    )
}