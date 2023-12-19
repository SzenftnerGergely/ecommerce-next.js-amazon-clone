import Link from "next/link"

interface PaginationBarProps {
    currenctPage: number,
    totalPages: number
}

const PaginationBar = ({ currenctPage, totalPages }: PaginationBarProps) => {
    const maxPage = Math.min(totalPages, Math.max(currenctPage + 4, 10))
    const minPage = Math.max(1, Math.min(currenctPage - 5, maxPage - 9))

    const numberedPageItems: JSX.Element[] = []

    for (let page = minPage; page < maxPage; page++) {
        numberedPageItems.push(
            <Link
                href={"?page=" + page}
                key={page}
                className={`join-item btn ${currenctPage === page ? "btn-active pointer-events-none" : ""}`}>
                {page}
            </Link>
        )
    }

    return (
        <>
            <div className="join hidden sm:block">
                {numberedPageItems}
            </div>

            <div className="join block sm:hidden">
                {currenctPage > 1 &&
                    <Link
                        href={"?page=" + (currenctPage - 1)}
                        className="btn join-item"
                    >
                        «
                    </Link>
                }
                <button className="join-item btn pointer-events-none">
                    Page {currenctPage}
                </button>
                {currenctPage < totalPages &&
                    <Link
                        href={"?page=" + (currenctPage + 1)}
                        className="btn join-item"
                    >
                        »
                    </Link>
                }
            </div>
        </>
    )
}

export default PaginationBar
