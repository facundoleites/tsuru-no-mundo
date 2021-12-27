import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { graphql } from "gatsby";

// markup
const IndexPage = ({ data }) => {
  return (
    <main className="container">
      <header className="header">
        <h1>Tsuru No Mundo</h1>
        <h2>Tsuru no mundo são historias e origami</h2>
      </header>
      <Gallery posts={data.allInstagramContent} />
      <footer className="footer">
        @TsuruNoMundo - <small>by Facundo Leites</small>
      </footer>
    </main>
  );
};

const Gallery = ({ posts }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {posts.edges.map(
        (item) =>
          item.node.localImage && (
            <GatsbyImage
              image={item.node.localImage.childImageSharp.gatsbyImageData}
              key={item.node.id}
              alt={item.node.caption || "Instagram Post"}
            />
          )
      )}
    </div>
  );
};

export const query = graphql`
  query InstagramPosts {
    allInstagramContent {
      edges {
        node {
          id
          caption
          localImage {
            childImageSharp {
              gatsbyImageData(
                layout: CONSTRAINED
                placeholder: BLURRED
                width: 500
                height: 500
              )
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
