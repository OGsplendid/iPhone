import { footerLinks } from "../constants"

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
        <div className="screen-max-width">
            <div>
                <p className="font-semibold text-gray text-xs">
                    More ways to shop: {' '}
                    Find {' '}
                    <span className="underline text-blue">
                        an Apple Store
                    </span>
                    {' '} or {' '}
                    <span className="underline text-blue">
                        another retailer
                    </span>
                    {' '} near you.
                </p>
                <p className="font-semibold text-gray text-xs">
                    Or call 000800-040-1966
                </p>
            </div>

            <div className="bg-neutral-700 my-5 h-[1px] w-full"></div>

            <div
                className="flex md:flex-row flex-col
                md:items-center justify-between"
            >
                <p className="font-semibold text-gray text-xs mb-5">
                    Copyright @ 2024 Apple Inc. All rights reserved.
                </p>
                <div className="flex flex-wrap">
                    {footerLinks.map((link) => (
                        <p
                            key={link}
                            className="font-semibold text-gray
                            text-xs mr-2 cursor-pointer
                            hover:opacity-80"
                        >
                            {link}
                        </p>
                    ))}
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer
