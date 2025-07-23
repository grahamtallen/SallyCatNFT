const nftsMetadata = [
  {
    description: "Will hurt and scratch",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://sallycoin.s3.us-east-2.amazonaws.com/IMG_4646.JPG",
    name: "Yikes",
    attributes: [
      {
        trait_type: "BackgroundColor",
        value: "Warning",
      },
      {
        trait_type: "Clothing",
        value: "FERAL",
      },
      {
        trait_type: "Stamina",
        value: 42,
      },
    ],
  },
  {
    description: "Sooo purdy",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://sallycoin.s3.us-east-2.amazonaws.com/IMG_4484.JPG",
    name: "AWE",
    attributes: [
      {
        trait_type: "Eyes",
        value: "DisneyEyes",
      },
      {
        trait_type: "Clothing",
        value: "Bowtie",
      },
      {
        trait_type: "Stamina",
        value: 38,
      },
    ],
  },
  {
    description: "What style and pose!",
    external_url: "https://austingriffith.com/portfolio/paintings/", // <-- this can link to a page for the specific file too
    image: "https://sallycoin.s3.us-east-2.amazonaws.com/IMG_5546.JPG",
    name: "BANDANA WINK HOLO SALLY",
    attributes: [
      {
        trait_type: "Clothing",
        value: "Bandana",
      },
      {
        trait_type: "Holo",
        value: "true",
      },
      {
        trait_type: "Stamina",
        value: "WINK",
      },
    ],
  },
];

export type NFTMetaData = (typeof nftsMetadata)[number];

export default nftsMetadata;
