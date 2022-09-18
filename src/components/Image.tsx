import { useEffect, useState } from "react"

const small =
    "https://addons-media.operacdn.com/media/CACHE/images/extensions/65/117365/1.0.0.1-rev1/images/ccece86b-701f-4bdc-aff2-0a3cd27d5e47/329c447a7462471b4511fc650b94e98d.jpg"
const medium = "https://static.base64.guru/img/logo.png"
const large = "https://i.stack.imgur.com/N4TSy.jpg"
const extraLarge = "http://www.wincore.ru/uploads/posts/2018-06/1527839499_wlppr4k-6.jpg"

const Image = () => {
    // const [isLoading, setIsLoading] = useState(true)
    const [url, setUrl] = useState<string>()


    useEffect(()=> {
        // const img = new Image()

        const width = window.screen.width
        if (width > 800) setUrl(extraLarge)
        if (width > 600 && width <= 800) setUrl(large)
        if (width > 400 && width <= 600) setUrl(medium)
        if (width <= 400) setUrl(small)

        // setUrl(img.src)
        // img.onload = () => {
        //     setIsLoading(false)
        // }
    },[])
    return (
        <img src={url} width='100%' height='100%'/>
    )
}

export default Image