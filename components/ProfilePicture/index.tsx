import React from "react";
import stringToGradient from "./stringToGradient";
import styles from "./style.module.css";

export interface Props {
    className?: string;
    name: string;
    imageProps?: {
        src: string;
        size: CSSStyleDeclaration['backgroundSize']
        repeat: CSSStyleDeclaration['backgroundSize']
        positionX: CSSStyleDeclaration['backgroundPositionX']
        positionY: CSSStyleDeclaration['backgroundPositionY']
    }
}

export const ProfilePicture: React.FC<Props> = ({imageProps, className, name}) => {
    //
    return (
        <div
            className={`${styles.avatar} ${className ?? ""}`}
            style={{
                backgroundImage: `url(${imageProps?.src}), ${stringToGradient(name)}`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: imageProps?.size,
                backgroundPositionX: imageProps?.positionX,
                backgroundPositionY: imageProps?.positionY
            }}
        >
            {!imageProps && (
                <svg className={styles.letterPlaceholder} viewBox="0 0 60 60">
                    <text x="50%" y="52%" textAnchor="middle" alignmentBaseline="middle">
                        {Array.from(name)[0].toUpperCase()}
                    </text>
                </svg>
            )}
        </div>
    );
};


