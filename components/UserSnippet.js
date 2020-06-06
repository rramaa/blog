import cs from 'classnames'
import Link from "next/link";
import { config } from "../config/config";

const aboutLink = config.navigation.find(v => v.key === "About").link

export default function UserSnippet({ className }) {
    return <div className={cs(className, "user-thumbnail")}>
        <img alt={"User Thumbnail"} src={"/static/images/thumbnail.png"} />
        <h1>My Space by <Link href={aboutLink} ><a>Ramakrishna</a></Link></h1>
        <style jsx>{`
            .user-thumbnail {
                display: flex;
                align-items: center;
            }
            img {
                margin-right: 2em;
                height: 50px;
                width: 50px;
                border-radius: 100%;
            }
        `}</style>
    </div>
}
