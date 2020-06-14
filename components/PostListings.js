import React from "react";
import Link from "next/link";
import TagBlock from "./Tags";
import Tabs from './Tabs'

function Listings({ post }) {
    return (
        <React.Fragment>
            <h2 key={`${post.name}-headline`}>
                <Link href={`/blog/${post.name}`}>
                    <a>{post.title}</a>
                </Link>
            </h2>
            <TagBlock tags={post.tags} />
        </React.Fragment>
    )
}

export default function PostListings({ posts }) {
    let categoryWisePosts = posts.reduce((map, post) => {
        map[post.category] = map[post.category] || [];
        map[post.category].push(post)
        return map
    }, {})
    return <Tabs tabs={categoryWisePosts} renderer={(tabItem) => tabItem.map(post => <Listings key={post.name} post={post} />)} />
}
