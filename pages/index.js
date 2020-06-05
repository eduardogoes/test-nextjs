import React from "react";

import Link from "next/link";
import Head from "next/head";

function Home({ repositories }) {
  return (
    <div id="page-root">
      <Head>
        <title>gglass</title>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>

      <h1>GGlass</h1>
      <h2>Em construção</h2>

      {repositories.map((repo) => (
        <p key={repo.id}>{repo.name}</p>
      ))}
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const response = await fetch("https://api.github.com/orgs/rocketseat/repos");

  return { repositories: await response.json() };
};

export default Home;
