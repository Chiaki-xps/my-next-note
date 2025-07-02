// app/my-mdx-page-remote/page.js
import { MDXRemote } from "next-mdx-remote/rsc";

import ComponentA from "../local/a";

const components = { ComponentA };

export default function Home(props) {
  return (
    <MDXRemote
      source={`Some **mdx** text, with a component <ComponentA />`}
      components={components}
    />
  );
}
