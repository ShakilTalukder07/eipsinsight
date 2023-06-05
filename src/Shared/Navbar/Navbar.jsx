import { Link } from "react-router-dom";


const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-[#1B3838] text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinknecap="round" strokeLinknejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-[#1B3838] w-[300px] mr-2 text-white rounded-box">
                            <Link className="mx-3 mt-2 text-xl" to="/alleips">AllEIPs</Link>
                            <Link className="mx-3 mt-2 text-xl" to="/type">Type</Link>
                            <Link className="mx-3 mt-2 text-xl" to="/status">Status</Link>
                            <Link className="mx-3 mt-2 text-xl" to="/insight">Insight</Link>
                            <li tabIndex={0}>
                                <details>
                                    <summary className="text-xl">Resources</summary>
                                    <ul className="p-2">
                                        <li><a>EIPs & Strandardization Process</a></li>
                                        <li><a>Ethereum Network Upgrade Process</a></li>
                                        <li><a>EIP:20 Token Standard</a></li>
                                    </ul>
                                </details>
                            </li>
                        </ul>
                    </div>

                    <Link to="/" className="normal-case text-3xl font-bold">EIPs</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 bg-[#1B3838] text-white">
                        <Link className="mx-4 mt-2 text-xl" to="/alleips">AllEIPs</Link>
                        <Link className="mx-4 mt-2 text-xl" to="/type">Type</Link>
                        <Link className="mx-4 mt-2 text-xl" to="/status">Status</Link>
                        <Link className="mx-4 mt-2 text-xl" to="/insight">Insight</Link>
                        <li tabIndex={0}>
                            <details>
                                <summary className="text-xl">Resources</summary>
                                <ul className="p-2">
                                    <li className="bg-[#1B3838] rounded-lg my-1"><a>EIPs & Standardization Process</a></li>
                                    <li className="bg-[#1B3838] rounded-lg mb-1"><a>Ethereum Network Upgrade Process</a></li>
                                    <li className="bg-[#1B3838] rounded-lg"><a>EIP:20 Token Standard</a></li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                            <li className="bg-[#1B3838] rounded-lg my-1"><a>Settings</a></li>
                            <li className="bg-[#1B3838] rounded-lg"><a>Logout</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;