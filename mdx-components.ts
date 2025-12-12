import type { MDXComponents } from "mdx/types";
import Note from "./components/Note";
import Quote from "./components/Quote";
import Caution from "./components/Caution";
import PageHeader from "./components/PageHeader";
import PageFooter from "./components/PageFooter";
import Math from "./components/Math";
import Image from "./components/Image";
import CoverImage from "./components/CoverImage";

// You don’t need a `useMDXComponents` function if you're not modifying anything.
export const mdxComponents: MDXComponents = {
  Note,
  Caution,
  PageHeader,
  PageFooter,
  Math,
  Image,
  CoverImage,
  Quote,
};
