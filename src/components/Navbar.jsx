  
const Navbar = () => {
    return (
        <nav className="bg-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center h-16">
            <div className="flex">
              <div className="flex-shrink-0 flex items-center text-white mr-6 justify-center">
                <span className="text-xl font-semibold pl-3">Star Wars</span>
              </div>
            </div>
            {/* Otros elementos del navbar */}
          </div>
        </div>
      </nav>
    );
  };
  
  export default Navbar;