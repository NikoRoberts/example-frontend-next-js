import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import sanity from "../lib/sanity";
import listStyles from "../styles/list";
import imageUrlFor from "../utils/imageUrlFor";

const query = `*[_type == "post"] {
  _id,
  title,
  body,
  poster,
}[0...50]
`;

const Pages = ({ pages }) => {
  return (
    <Layout>
      <div class="container">
        <div v-if="post">
          <h1 class="title" v-text="{post.title}">{post.title}</h1>
          <div class="content">{post.body}</div>
        </div>
      </div>
    </Layout>
  );
};

export const getStaticProps = async () => {
  const pages = await sanity.fetch(query);
  return {
    props: { pages } // will be passed to the page component as props
  };
};

export default Pages;
