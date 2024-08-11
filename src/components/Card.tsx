type CardProps = {
    display: string
    category?: string
}

export const Card = ({ display, category }: CardProps) => {
    return (
        <>
            <section className="flex-col justify-center items-center border-4 border-black text-green-500 font-bold text-2xl text-center p-4 w-64 h-full m-4 bg-gray-800">
                <div className="text-green-500 font-bold text-2xl text-center pointer">
                    {display}
                </div>
                <div className="text-white text-xl text-center">{category}</div>
            </section>
        </>
    )
}
