import React from "react";
import NavButton from "../NavButton";
import { config } from "../../config/config.json";

export default function HomePageLayout({ homePath }) {
  let homeLinkConfig = config.navigation.find(v => v.link === homePath)
  let otherLinks = config.navigation.filter(v => v.link !== homePath)
  return (
    <div className="homeScreenLayout">
      <div className="homeScreenAssetContainer">
        <h1>My personal thoughts</h1>
        <img
            alt={"Ramakrishna's image"}
          className="homeScreenAssetContainer__image"
          src={homeLinkConfig.imageSrc}
        />
      </div>
      <div className="navigationButtonContainer">
        {otherLinks.map(v => (
            <NavButton
                key={v.link}
                src={v.imageSrc}
                link={v.link}
            />
        ))}
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
