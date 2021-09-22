import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="h-screen flex flex-col justify-center">
      <div>
        <h1 className="font-extrabold">Pierre-Olivier Boulet</h1>
        <h2 className="font-medium text-blue-500">
          I&apos;m a front-end developer
        </h2>
      </div>

      <nav className="menu flex mt-2 space-x-2">
        <Link
          to="/bio"
          className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Who I am
        </Link>
        <Link
          to="what"
          className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          What I do
        </Link>
        <Link
          to="contact"
          className="bg-transparent hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Send me a message
        </Link>
      </nav>
    </div>
  );
}

export default Home;
