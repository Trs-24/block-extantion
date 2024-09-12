import {SignOutButton} from "@/features/auth";
import {useSessionQuery} from "@/entities/session";

export function Profile() {
    const { data: session } = useSessionQuery();

    if (!session) return null;

    return (
        <div className="flex gap-2 items-center">
            {session?.email}
            <SignOutButton />
        </div>
    )
}