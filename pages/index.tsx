import type { NextPage } from "next"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Blurhash } from "react-blurhash"
import clsx from "clsx"
import Image from "../src/components/Image"
import { log } from "util"
import { LazyLoadImage } from "react-lazy-load-image-component"

const Thing: React.FC<{ msg: string }> = (props) => {
  return <div>{props.msg}</div>
}

const small =
    "https://addons-media.operacdn.com/media/CACHE/images/extensions/65/117365/1.0.0.1-rev1/images/ccece86b-701f-4bdc-aff2-0a3cd27d5e47/329c447a7462471b4511fc650b94e98d.jpg"
const medium = "https://static.base64.guru/img/logo.png"
const large = "https://i.stack.imgur.com/N4TSy.jpg"
const extraLarge =
    "http://www.wincore.ru/uploads/posts/2018-06/1527839499_wlppr4k-6.jpg"

const images = [
  "https://wallpaperaccess.com/full/327006.jpg",
  "https://wallpaperaccess.com/full/360436.jpg",
  "https://wallpaperaccess.com/full/1356237.jpg",
  "https://wallpaperaccess.com/full/1356282.jpg",
  "https://wallpaperaccess.com/full/1356284.jpg",
  "https://wallpaperaccess.com/full/1356018.jpg",
  "https://www.teahub.io/photos/full/99-995758_nature-images-hd-large-size.jpg",
    extraLarge
]

const Home: NextPage = () => {
  return (
    <div>
      Hello World. <Thing msg="hello" />
      <Link href="/about">
        <a>About</a>
      </Link>
      <br />
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
      {images.map((item, index) => (
        <Image url={item} height={450} width={700} key={item} />
      ))}
        </div>
      <br />

    {/*    <LazyLoadImage*/}
    {/*        src={images[0]}*/}
    {/*        width="700px"*/}
    {/*        height="500px"*/}
    {/*        loading='lazy'*/}
    {/*        onLoad={()=>console.log(33333)}*/}
    {/*    />*/}
    {/*    <br />*/}
    {/*    <LazyLoadImage*/}
    {/*        src={images[1]}*/}
    {/*        width="700px"*/}
    {/*        height="500px"*/}
    {/*        onLoad={()=>console.log(444)}*/}
    {/*    />*/}
    {/*    <br />*/}
    {/*    <LazyLoadImage*/}
    {/*        src={images[2]}*/}
    {/*        width="700px"*/}
    {/*        height="500px"*/}
    {/*        onLoad={()=>console.log(555)}*/}
    {/*    />*/}
    {/*    <br /><LazyLoadImage*/}
    {/*    src={images[3]}*/}
    {/*    width="700px"*/}
    {/*    height="500px"*/}
    {/*    onLoad={()=>console.log(666)}*/}
    {/*/>*/}
    {/*    <br /><LazyLoadImage*/}
    {/*    src={images[4]}*/}
    {/*    width="700px"*/}
    {/*    height="500px"*/}
    {/*    onLoad={()=>console.log(7777)}*/}
    {/*/><br />*/}
    {/*    <LazyLoadImage*/}
    {/*        src={images[5]}*/}
    {/*        width="700px"*/}
    {/*        height="500px"*/}
    {/*        onLoad={()=>console.log(888)}*/}
    {/*    /><br /><LazyLoadImage*/}
    {/*    src={images[6]}*/}
    {/*    width="700px"*/}
    {/*    height="500px"*/}
    {/*    onLoad={()=>console.log(999)}*/}
    {/*/><br />*/}




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
