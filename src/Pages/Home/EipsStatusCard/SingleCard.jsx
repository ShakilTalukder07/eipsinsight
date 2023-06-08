
const SingleCard = ({ card }) => {

    // console.log(card);
    const { status, number } = card

    return (
        <div className={`flex justify-between items-center w-56 h-24 text-center px-4 py-2 gap-3 shadow-lg rounded-md ${(status == "Living") ? "bg-sky-400" : " " &&
            (status == "Final") ? "bg-orange-400" : " " &&
                (status == "Last Call") ? "bg-cyan-400" : " " &&
                    (status == "Review") ? "bg-blue-400" : " " &&
                        (status == "Draft") ? "bg-purple-400" : " " &&
                            (status == "Stagnant") ? "bg-yellow-400" : " " &&
                                (status == "Withdraw") ? "bg-green-400" : " "
            }`}>

            <div className='w-1/2'>
                <p className='text-sm text-black'>{status}</p>
                <h2 className=" font-bold text-black text-2xl">{number}</h2>
            </div>
            <div className="className='w-1/2'">
            </div>
        </div>
    );
};

export default SingleCard;