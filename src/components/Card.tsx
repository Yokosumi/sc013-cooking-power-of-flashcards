type CardProps = {
    display: string
}

export const Card = ({ display }: CardProps) => {
    return (
        <>
            <section className="border-4 border-black text-green-500 font-bold text-2xl text-center  w-32 h-16 py-2 m-4 bg-gray-800 pointer">
                {display}
            </section>
        </>
    )
}
