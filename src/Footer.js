import {
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandJavascript,
  IconBrandReact,
  IconBrandSass,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>Benjamin Alcade - 2023</p>
      <IconBrandHtml5 size={24} />
      <IconBrandCss3 size={24} />
      <IconBrandSass size={24} />
      <IconBrandJavascript size={24} />
      <IconBrandReact size={24} />
    </div>
  );
};
export default Footer;
