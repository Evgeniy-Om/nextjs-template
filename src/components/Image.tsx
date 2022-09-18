import { useState } from "react"
import { Blurhash } from "react-blurhash"
import clsx from "clsx"
import { LazyLoadImage } from "react-lazy-load-image-component"

interface Props {
  url: string;
  width: number;
  height: number;
}

const Image = (props: Props) => {
    const {url, width, height} = props
    const [isLoading, setIsLoading] = useState(true)

    return (
      <div>
        {isLoading && (
          <Blurhash
            hash={"U79~:9I:1Ha0~CJ756R5jE-;D%Rj}[$*D*NF"}
            width={width}
            height={height}
            resolutionX={32}
            resolutionY={32}
            punch={1}
          />
        )}
        <LazyLoadImage
          className={clsx({ "visually-hidden": isLoading })}
          src={url}
          width={width}
          height={height}
          afterLoad={() => {
            setIsLoading(false)
          }}
        />
      </div>
    )
}

export default Image