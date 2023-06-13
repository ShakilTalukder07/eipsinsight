import StatusCardsLineChart from "../StatusCardsLineChart/StatusCardsLineChart";

const SingleCard = ({ card }) => {

    // console.log(card);
    const { type, number } = card

    return (
        <div className={`flex justify-between items-center w-[250px] h-28 text-center px-4 py-2 gap-3 shadow-lg rounded-md ${
        (type == "Standard Track") ? "bg-sky-400" : " " &&
        (type == "Meta") ? "bg-orange-400" : " " &&
        (type == "Informational") ? "bg-cyan-400" : " " &&
        (type == "Core") ? "bg-blue-400" : " " &&
        (type == "ERC") ? "bg-purple-400" : " " &&
        (type == "Networking") ? "bg-yellow-400" : " " &&
        (type == "Interface") ? "bg-green-400" : " "
    }`}>

            <div className='w-1/2'>
                <p className='text-sm text-black'>{type}</p>
                <h2 className=" font-bold text-black text-2xl">{number}</h2>
            </div>
            <div className="className='w-1/2'">
                <StatusCardsLineChart></StatusCardsLineChart>
            </div>
        </div>
    );
};

export default SingleCard;