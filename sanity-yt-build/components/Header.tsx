import Link from "next/link"

function Header() {
  return (
    <header className="flex justify-between p-5 max-w-7xl mx-auto">
      <div className="flex items-center space-x-5">
        <Link href="/">
          <img
            className="w-24 md:w-44 object-contain cursor-pointer"
            src="https://links.papareact.com/yvf"
            alt="medium"
          />
        </Link>
        <div className="hidden md:inline-flex items-center space-x-5">
          <h3 className="cursor-pointer">About</h3>
          <h3 className="cursor-pointer">Contact</h3>
          <h3 className="text-white bg-green-600 py-1 px-4 rounded-full cursor-pointer">
            Follow
          </h3>
        </div>
      </div>
      <div className="text-xs md:text-xl flex items-center space-x-5 text-green-600">
        <h3>Sign In</h3>
        <h3 className="border px-4 py-1 rounded-full cursor-pointer border-green-600">Get Started</h3>
      </div>
    </header>
  );
}

export default Header