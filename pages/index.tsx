import type { NextPage } from 'next'
import { useEffect, useState } from "react"
import Link from 'next/link'
import { Blurhash } from "react-blurhash"
import clsx from "clsx"

const Thing: React.FC<{ msg: string }> = (props) => {
    return <div>{props.msg}</div>
}

const small =
    "https://addons-media.operacdn.com/media/CACHE/images/extensions/65/117365/1.0.0.1-rev1/images/ccece86b-701f-4bdc-aff2-0a3cd27d5e47/329c447a7462471b4511fc650b94e98d.jpg"
const medium = "https://static.base64.guru/img/logo.png"
const large = "https://i.stack.imgur.com/N4TSy.jpg"
const extraLarge = "http://www.wincore.ru/uploads/posts/2018-06/1527839499_wlppr4k-6.jpg"

const Home: NextPage = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [isBlurLoaded, setIsBlurLoaded] = useState(false)
    const [url, setUrl] = useState<string>(small)


    useEffect(()=> {

        const width = window.screen.width
        const urlStr = () => {
            if (width > 800) return extraLarge
            if (width > 600 ) return large
            if (width > 400) return medium
            return small
        }

        setUrl(urlStr)

        // setTimeout(()=>setIsBlurLoaded(true),2000)
        setIsBlurLoaded(true)
    },[])

    return (
        <div>
            Hello World. <Thing msg="hello" />
            <Link href="/about">
                <a>About</a>
            </Link>
            <br />

            <div style={{width: '700px', height: "300px", overflow: 'hidden'}}>
                {isLoading && <Blurhash
                    hash={'U79~:9I:1Ha0~CJ756R5jE-;D%Rj}[$*D*NF'}
                    width="100%"
                    height='100%'
                    resolutionX={32}
                    resolutionY={32}
                    punch={1}
                />}
                {isBlurLoaded && <img className={clsx({ "visually-hidden": isLoading })} src={url} onLoad={()=>setIsLoading(false)} width='100%' height='100%'/>}
            </div>
            <br />

            {/*<LazyLoadImage*/}
            {/*    // className={clsx({ "visually-hidden": isLoading })}*/}
            {/*    key={'sdsdf'}*/}
            {/*    src={url}*/}
            {/*    width="100%"*/}
            {/*    height='100%'*/}
            {/*/>*/}

            {/*<picture*/}
            {/*    className={clsx({ "visually-hidden": isLoading })}*/}
            {/*    onLoad={() => {*/}
            {/*        console.log(2222)*/}
            {/*        setIsLoading(false)*/}
            {/*    }}*/}

            {/*>*/}
            {/*    <source srcSet={extraLarge} media="(min-width: 800px)" />*/}
            {/*    <source srcSet={large} media="(min-width: 600px)" />*/}
            {/*    <source srcSet={medium} media="(min-width: 400px)" />*/}
            {/*    <source srcSet={small} media="(min-width: 300px)" />*/}

            {/*    <img src="mdn-logo-narrow.png" alt="MDN" />*/}
            {/*</picture>*/}
            {/* <img
        src={small}
        srcSet={`${large} 600w, ${medium} 400w, ${small} 300w`}
      />*/}
        </div>
    )
}

export default Home
