export default {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true,
      },
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "name",
        maxLength: 90,
      },
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "details",
      title: "Details",
      type: "string",
    },
    {
      name: "saled",
      title: "Saled?",
      type: "boolean",
    },
    {
      name: "size",
      title: "Size",
      type: "string",
    },
    {
      name: "shoulder",
      title: "Shoulder",
      type: "string",
    },
    {
      name: "sleeve",
      title: "Sleeve",
      type: "string",
    },
    {
      name: "length",
      title: "Length",
      type: "string",
    },
    {
      name: "color",
      title: "Color",
      type: "string",
    },
    {
      name: "fabric",
      title: "Fabric",
      type: "string",
    },
  ],
};
