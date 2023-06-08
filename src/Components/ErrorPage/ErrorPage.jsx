import { Link } from "react-router-dom";


const ErrorPage = () => {

    return (
        <>
            <section className="flex items-center h-full p-16">
                <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                    <div className="max-w-md text-center">
                        <h2 className="mb-8 font-extrabold text-9xl text-white">
                            <img src="https://i.ibb.co/fFsZJwK/98488-bot-error-404.gif" alt="error page" />
                        </h2>
                        <Link to="/" className="px-8 py-3 font-semibold rounded 
                            bg-[#FF8548]">Back to homepage</Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ErrorPage;