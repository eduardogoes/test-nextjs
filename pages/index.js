import React from "react";

import Link from "next/link";

function Home({ repositories }) {
  return (
    <div>
      <Link href="/sobre">
        <a>Ir para pagina sobre</a>
      </Link>
      {repositories.map((repo) => (
        <h1 key={repo.id}>{repo.name}</h1>
      ))}
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const response = await fetch("https://api.github.com/orgs/rocketseat/repos");

  return { repositories: await response.json() };
};

export default Home;
