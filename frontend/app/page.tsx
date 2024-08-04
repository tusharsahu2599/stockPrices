import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href="/dashboard">Go to Dashboard</Link>
    </div>
  );
};

export default Home;
