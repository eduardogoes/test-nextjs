import React from "react";

import Link from "next/link";
import Head from "next/head";

function Home() {
  return (
    <div id="page-root">
      <Head>
        <title>gglass</title>
        <link href="/static/styles.css" rel="stylesheet" />
      </Head>

      <h1>GGlass!</h1>
      <h2>Em construção</h2>
    </div>
  );
}

export default Home;
