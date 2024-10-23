
const NavBar = () => {
    return (
        <div className="font-mono">
            <div className="navbar bg-blue-950 shadow-2xl w-full flex justify-between">
                <div className="">
                    <a className="btn btn-ghost md:font-bold md:text-3xl">Card Editor
                    </a>
                </div>
                <div>
                    <h1 className="font-semibold text-xs  md:text-2xl md:mr-12">
                        If fonts do not load, refresh.
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default NavBar;