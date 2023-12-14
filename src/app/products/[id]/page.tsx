import prisma from "@/lib/db/prisma"

interface ProductPageProps {
    params: {
        id: string,
    }
}

const ProductPage = async ({ params: { id } }: ProductPageProps) => {
    const product = await prisma.product.findUnique({where: {id}})
    

    return (
        <div>

        </div>
    )
}

export default ProductPage
