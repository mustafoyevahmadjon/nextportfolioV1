import { siteConfig } from "@/config/site.config"
import Head from "next/head"
import { SeoProps } from "./seo.props"

const SEO = ({ children, metaDescription = siteConfig.metaDescription, metaTitle = siteConfig.metaTitle, author = siteConfig.author, metaKeywords = siteConfig.metaKeywords }: SeoProps) => {
    return (
        <>
            <Head>
                <title>{metaTitle}</title>
                <meta httpEquiv='X-UA-Compatible' content='ie=edge' />
                <meta name='keyword' content={metaKeywords} />
                <meta name='author' content={author} />
                <meta name='description' content={metaDescription} />
                <link rel='shortcut icon' href={'/logo.png'} type='image/x-icon' />
            </Head>
            {children}
        </>
    )
}

export default SEO