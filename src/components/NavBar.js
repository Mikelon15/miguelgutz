import { Link } from 'react-scroll';

const NavBar = ({ main, others, vis, passRef }) => {
    return (
        <div ref={passRef} id={main} className="z-10 p-2 md:p-0 flex sticky top-0 bg-stone-800" >
            <div className='md:w-1/4'></div>
            <div className='w-full md:w-3/4 flex items-end justify-between text-left px-2 md:px-12'>
                <div className="">
                    <h2 className="text-3xl text-blue-300 font-semibold py-4">{main}</h2>
                </div>
                <div className={`flex text-right flex-col md:flex-row items-end md:pr-12 opacity-0 ${vis === main ? 'fade-in-start' : ''}`}>
                    <div className="w-36 md:w-auto text-lg md:text-xl text-stone-400 md:p-4">
                        <button>
                            <Link to={others[0].replace(/\s/g, '')} smooth={true} duration={500}>
                                {others[0]}
                            </Link>
                        </button>
                    </div>
                    <div className="text-lg md:text-xl text-stone-400 md:p-4">
                        <button>
                            <Link to={others[1].replace(/\s/g, '')} smooth={true} duration={500}>
                                {others[1]}
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NavBar;