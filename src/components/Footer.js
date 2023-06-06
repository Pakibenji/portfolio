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
      <IconBrandHtml5 size={24} className="footer-icons" />
      <IconBrandCss3 size={24} className="footer-icons" />
      <IconBrandSass size={24} className="footer-icons" />
      <IconBrandJavascript size={24} className="footer-icons" />
      <IconBrandReact size={24} className="footer-icons" />
    </div>
  );
};
export default Footer;
