import ProductCard from "@/components/ProductCard"
import prisma from "@/lib/db/prisma"
import { Metadata } from "next"

interface searchPageProps {
    searchParams: { query: string }
}

export function genrateMetadata({searchParams: {query}}: searchPageProps) : Metadata {
    return {
        title: `Search: ${query} - Junkyard`
    }
}

const searchPage = async ({ searchParams: { query } }: searchPageProps) => {
    const products = await prisma.product.findMany({
        where: {
            OR: [
                {name: {contains: query, mode: "insensitive"}},
                {description: {contains: query, mode: "insensitive"}},
            ]
        },
        orderBy: {id: "desc"}
    })

    if(products.length === 0) {
        return <div className="text-center">No Products found</div>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-col-3 gap-4">
            {products.map(product => (
                <ProductCard product={product} key={product.id} />
            ))}
        </div>
    )
}

export default searchPage
