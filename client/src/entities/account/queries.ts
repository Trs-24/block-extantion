import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {accountControllerGetAccount, accountControllerPatchAccount} from "@/shared/api/generated";

const accountKey = ["account"];
export function useAccountQuery() {

    return useQuery({
        queryKey: accountKey,
        queryFn: accountControllerGetAccount
    })
}

export function useUpdateAccountMutation() {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: accountControllerPatchAccount,
        onSuccess(data) {
            queryClient.setQueryData(accountKey, data);
        },
        async onSettled() {
            await queryClient.invalidateQueries({ queryKey: accountKey });
        },
    })
}