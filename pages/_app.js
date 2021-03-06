import App, { Container } from "next/app";
import Head from "next/head";
import NextSeo from "next-seo";
import { createSEOConfig } from "../utils/seo";
import getPostData from "../utils/get-post-data";
import BlogEngine from "../utils/blog-engine";
import { renderLayout } from "../utils/render-app-layout";
import { checkForSW } from "../utils/check-for-sw";
import { globalStyles } from "../styles";
import Router from 'next/router';

// ga for pageview
// const isProduction = process.env.NODE_ENV === "production";
//
// if (isProduction) {
//     Router.events.on('routeChangeComplete', url => gtag.pageview(url));
// }
//
export default class MyApp extends App {
    constructor(props) {
        super(props);
        this.state = { navOpen: false, postData: props.postData };
    }

    static async getInitialProps({ Component, router, ctx }) {
        // For page view GA
        let pageProps = {};

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx);
        }

        const [allData, pageData, postData] = await Promise.all([
            BlogEngine("posts"),
            BlogEngine("pages"),
            getPostData(router)
        ]).catch(error => {
            console.error("Error in _app.js getInitialProps()", error);
            throw error
        });

        const propsObj = Object.assign(
            {},
            { router, postData, allData, ...pageProps }
        );
        delete propsObj.router
        return { ...propsObj };
    }

    async componentDidMount() {
        await checkForSW();
    }

    async componentDidUpdate(prevProps, prevState) {
        const postData = await getPostData(this.props.router);
        if (!prevState.postData || postData.name !== this.state.postData.name) {
            this.setState({ postData });
        }
    }

    render() {
        const { postData } = this.state;

        const seoData = createSEOConfig(postData);
        if (postData) {
            const tagsString = postData.tags.join(", ");
            return (
                <>
                    {/* (1) SEO  */}
                    <Head>
                        <meta name="keywords" content={tagsString} />
                    </Head>
                    <NextSeo config={seoData} />

                    {/* (3) page body */}
                    <React.Fragment>
                        {renderLayout(this.props, this.state)}
                    </React.Fragment>

                    {/* (5) global and local styles */}
                    <style global jsx>
                        {globalStyles}
                    </style>
                    <style jsx>{`
                        .icon-button {
                            margin: 15px;
                        }
                    `}</style>
                </>
            );
        } else {
            return null;
        }
    }
}
