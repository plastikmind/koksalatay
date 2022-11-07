import React from "react";
import Header from "../../components/Header";

import { client, urlFor } from "../../lib/client";

const CollectionDetails = ({ collection, collections }) => {
  const { image, name } = collection;

  return (
    <div>
      <Header />
      <div className="container mx-auto">
        <div className="py-8 px-4">
          <div className="flex flex-wrap -mx-4">
            <div className="flex w-1/2 px-4 mt-20">
              <h1 className="font-light tracking-widest uppercase relative text-7xl my-8 ">
                {name}
              </h1>
            </div>

            {image?.map((item, i) => (
              <div className="md:w-1/2 px-4 mt-8" key={i}>
                <img key={i} src={urlFor(item)} />
              </div>
            ))}
            {/* <ProductFooter /> */}
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "collection"] {
    slug {
      current
    }
  }
  `;

  const collections = await client.fetch(query);

  const paths = collections.map((collection) => ({
    params: {
      slug: collection.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "collection" && slug.current == '${slug}'][0]`;
  const collectionsQuery = '*[_type == "collection"]';

  const collection = await client.fetch(query);
  const collections = await client.fetch(collectionsQuery);

  console.log(collection);

  return {
    props: { collections, collection },
  };
};

export default CollectionDetails;
