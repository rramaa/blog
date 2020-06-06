import React from "react";
import NavButton from "../NavButton";
import { config } from "../../config/config.json";
import aboutImage from "../../public/static/images/home_screen_asset.jpg"
import mainImage from "../../public/static/images/blog_button.png"

export default function AboutPageLayout() {
  let homeLinkConfig = config.navigation.find(v => v.key === "Home")
  let blogLink = config.navigation.find(v => v.key === "Blog")
  return (
    <div className="home-page-layout">
      <div className="homeScreenAssetContainer">
        <h1>My Space</h1>
        <img
            alt={"Ramakrishna's image"}
          className="homeScreenAssetContainer__image"
          src={aboutImage}
        />
      </div>
      <div className="navigationButtonContainer">
        <NavButton
            key={blogLink.link}
            src={mainImage}
            link={blogLink.link}
        />
      </div>
      <style jsx>{`
        .home-page-layout {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
        }
        .navigationButtonContainer {
            width: 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
        }
        .homeScreenAssetContainer {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
            justify-content: center;
            align-items: center;
            width: 100%;
        }
        .homeScreenAssetContainer__image {
          max-width: 500px;
          animation: beat 3.33s infinite alternate;
          transform-origin: center;
        }
        @media screen and (max-width: 425px) {
          .homeScreenAssetContainer__image {
            max-width: 300px;
          }
        }
        @keyframes beat{
            to { transform: scale(0.9); }
        }
      `}</style>
    </div>
  );
}
