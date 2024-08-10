type CardProps = {
    display: string
}

export const Card = ({ display }: CardProps) => {
    return (
        <>
            <section className="flex justify-center items-center border-4 border-black text-green-500 font-bold text-2xl text-center p-4 w-64 h-32 m-4 bg-gray-800 pointer">
                {display}
            </section>
        </>
    )
}
