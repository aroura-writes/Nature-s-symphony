import { defineConfig } from "tinacms";

// TinaCMS configuration for "Nature's Symphony"
export default defineConfig({
  branch: "main",
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID, // Get from tina.io
  token: process.env.TINA_TOKEN, // Get from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "uploads",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blogs",
        label: "Blogs",
        path: "content/blogs",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Blog Title",
            isTitle: true,
            required: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
            required: true,
          },
          {
            type: "image",
            name: "featuredImage",
            label: "Featured Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "gallery",
        label: "Gallery",
        path: "content/gallery",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "locationDate",
            label: "Location/Date",
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "image",
            label: "Gallery Image",
          },
        ],
      },
      {
        name: "literacy",
        label: "Nature Literacy",
        path: "content/literacy",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Guide Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "difficultyTag",
            label: "Difficulty/Category Tag",
            options: ["Beginner", "Intermediate", "Advanced", "Expert"],
          },
          {
            type: "string",
            name: "quickTakeaway",
            label: "Quick Takeaway",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "topicImage",
            label: "Topic Image",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Full Guide Content",
            isBody: true,
          },
        ],
      },
      {
        name: "others",
        label: "Others",
        path: "content/others",
        format: "md",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Page Identifier",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "headline",
            label: "Headline",
          },
          {
            type: "string",
            name: "description",
            label: "Body Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "mixedMedia",
            label: "Mixed Media Content",
          },
        ],
      },
    ],
  },
});
