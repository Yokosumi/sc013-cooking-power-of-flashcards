type CardProps = {
    display: string
}

export const Card = ({ display }: CardProps) => {
    return (
        <>
            <section className="flex justify-center items-center border-4 border-black text-green-500 font-bold text-2xl text-center p-4 w-64 h-full m-4 bg-gray-800">
                <div className="text-green-500 font-bold text-2xl text-center pointer">
                    {display}
                </div>
            </section>
        </>
    )
}
