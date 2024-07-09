"use client"

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/empty-org";
import { BoardList } from "./_components/board-list";
import { useSearchParams } from "next/navigation";

// interface DashboardPageProps{
//     searchParams:{
//         search?: string;
//         favorites?: string;
//     }
// }

const DashboardPage = () => {
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";
    const favorites = searchParams.get("favorites") || "";

    const query = {
        search: search || undefined,
        favorites: favorites || undefined,
    };

    const { organization } = useOrganization();

    return (
        <div className="flex-1 h-[calc(100%-80px)] p-6">
            {!organization ? (
                <EmptyOrg />
            ) : (
                <BoardList
                    orgId={organization.id}
                    query={query}
                />
            )}
        </div>
    );
};
export default DashboardPage;