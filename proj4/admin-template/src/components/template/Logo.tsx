export default function Logo() {
    return (
        <>
            <div className={`
                flex flex-col items-center justify-center
                h-10 w-10 rounded-full
                bg-white
            `}>
                <div className={`h-3 w-3 rounded-full bg-red-600 mr-1`}>
                </div>
                <div className={`h-3 w-3 rounded-full bg-yellow-600 ml-2`}></div>
                <div className={`h-3 w-3 rounded-full bg-blue-600 mr-1`}></div>
            </div>
        </>
    )
}