import Image from 'next/image'
import React from "react";

export const ProfilePicture: React.FC<{src: string}> = ({src}) => {

    return <Image
        src={src}
        style={{borderRadius: "100%"}}
        width={100}
        height={100}
        alt={'profile_picture'}
    />
}