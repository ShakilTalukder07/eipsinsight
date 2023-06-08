
const SingleCard = ({ card }) => {

    console.log(card);
    const { status, number } = card

    return (
        <div className={`flex justify-center items-center w-40 h-16 text-center px-4 py-2 gap-2 shadow-lg rounded-md ${(status == "Living") ? "bg-sky-400" : " " &&
            (status == "Final") ? "bg-orange-400" : " " &&
                (status == "Last Call") ? "bg-cyan-400" : " " &&
                    (status == "Review") ? "bg-blue-400" : " " &&
                        (status == "Draft") ? "bg-purple-400" : " " &&
                            (status == "Stagnant") ? "bg-yellow-400" : " " &&
                                (status == "Withdraw") ? "bg-green-400" : " "
            }`}>

            <div className='w-1/2'>
                <h2 className=" font-bold text-black text-2xl">{number}</h2>
            </div>
            <div className="className='w-1/2'">
                <p className='text xl text-black'>{status}</p>
            </div>
        </div>
    );
};

export default SingleCard;