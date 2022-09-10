import ScrollIndicator from "./ScrollIndicator";

const Navbar =() => {
    const navItems = ["Home","About us","Contact us","Products"]
    return (
        <>
            <header className="p-4 bg-gray-800 fixed w-full top-0 left-0 z-10">
                <ul className="container flex justify-center items-center gap-4 text-white">
                    {
                        navItems.map((item,index) => (
                            <li className="cursor-pointer" key={index}>{item}</li>
                        ))
                    }
                </ul>
                <ScrollIndicator/>
            </header>
        </>
    );
}

export default Navbar;