
const SingleType = ({ data }) => {

    const { type, number } = data
    // console.log(data);

    return (
        <div className={`flex justify-center items-center h-16 text-center px-4 py-2 gap-2 shadow-[#FAEA10] shadow-md rounded-md transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-104 duration-200 ... ${
            (type == "Standard Track") ? "bg-sky-400" : " " &&
                (type == "Meta") ? "bg-orange-400" : " " &&
                (type == "Informational") ? "bg-cyan-400" : " " &&
                (type == "Core") ? "bg-blue-400" : " " &&
                (type == "ERC") ? "bg-purple-400" : " " &&
                (type == "Networking") ? "bg-yellow-400" : " " &&
                (type == "Interface") ? "bg-green-400" : " "
            }`}>

            <div className='w-1/2'>
                <h2 className=" font-bold text-black text-2xl">{number}</h2>
            </div>
            <div className="className='w-1/2'">
                <p className='text xl text-black'>{type}</p>
            </div>
        </div>
    );
};

export default SingleType;