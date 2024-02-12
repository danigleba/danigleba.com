import Head from "next/head"
import Link from "next/link"
import { FaGithubSquare } from "react-icons/fa"
import { FaSquareXTwitter } from "react-icons/fa6"
import { FaLinkedin } from "react-icons/fa"

export default function Index() {
  return (
    <>
      <Head>
        {/* Basic Meta Tags */}
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="I'm shipping a startup a week until I find Product-Market-Fit"/>
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Dani Gleba" />
        <meta property="og:description" content="I'm shipping a startup a week until I find Product-Market-Fit" />
        <meta property="og:image" content="/icon.jpg" />
        <meta property="og:image:width" content="your_image_width" />
        <meta property="og:image:height" content="your_image_height" />
        <meta property="og:url" content="danigleba.com" />
        <meta property="og:type" content="website" />
        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Dani Gleba" />
        <meta name="twitter:description" content="I'm shipping a startup a week until I find Product-Market-Fit" />
        <meta name="twitter:image" content="/icon.jpg" />
        {/* Favicon */}
        <link rel="icon" href="/icon.jpg" />
        {/* Page Title */}
        <title>Dani Gleba</title>
      </Head>
      <main className="flex justify-center items-start text-[#222222] mt-12 mx-6">
        <div className="w-full md:w-2/5 font-light text-base">
          <h2 className="font-semibold text-4xl pb-6">Dani Gleba</h2>
          <div className="flex items-start gap-4">
            <div className="font-black text-xl flex items-end h-4"><div className="w-1.5 aspect-square rounded-full bg-[#222222]"></div></div>
            <div className="pb-3">Started coding video games at 13.</div>
          </div>
          <div className="flex items-start gap-4">
            <div className="font-black text-xl flex items-end h-4"><div className="w-1.5 aspect-square rounded-full bg-[#222222]"></div></div>
            <div className="pb-3"> Built <a href="https://kualify.es" target="_blank" className="font-medium underline">kualify.es</a> in high school.</div>
          </div>
          <div className="flex items-start gap-4">
            <div className="font-black text-xl flex items-end h-4"><div className="w-1.5 aspect-square rounded-full bg-[#222222]"></div></div>
            <div className="pb-3"> Worked as a full-stack developer at <a href="https://scentcraft.ai" target="_blank" className="font-medium underline">scentcraft.ai</a>, a startup making AI chatbots for E-commerce.</div>
          </div>
          <div className="flex items-start gap-4">
            <div className="font-black text-xl flex items-end h-4"><div className="w-1.5 aspect-square rounded-full bg-[#222222]"></div></div>
            <div className="pb-3"> I've also shipped:</div>
          </div>
          <div className="flex items-start gap-2 pl-12">
            <div><a>1. </a></div>
            <div className="pb-3"> <a href="https://feedby.danigleba.com" target="_blank" className="font-medium underline">Feedby</a>: Filter user feedback from your comment section.</div>
          </div>
          <div className="flex items-start gap-2 pl-12">
            <div><a>2. </a></div>
            <div className="pb-3"> <a href="https://plato.danigleba.com" target="_blank" className="font-medium underline">Plato</a>: Find a startup mentor and get to $10k MRR ASAP.</div>
          </div>
          <div className="flex items-start gap-2 pl-12">
            <div><a>3. </a></div>
            <div className="pb-3"> <a href="https://mileto.danigleba.com" target="_blank" className="font-medium underline">Mileto</a>: Solve any math, physics, or engineering problem with AI.</div>
          </div>
          <div className="flex items-start gap-2 pl-12">
            <div><a>4. </a></div>
            <div className="pb-3"> <a className="font-medium">Alba</a>: (WIP) Manage your online students & classes without the headaches.</div>
          </div>
          <div className="pt-12 space-y-2">
            <a href="mailto:daniglebapuig@gmail.com">daniglebapuig@gmail.com</a>
            <div className="flex gap-2">
              <Link className="cursor-pointer" href="https://github.com/danigleba" target="_blank">
                <FaGithubSquare color="#222222" size={25} />
              </Link>
              <Link className="cursor-pointer" href="https://twitter.com/danigleba" target="_blank">
                <FaSquareXTwitter color="#222222" size={25} />
              </Link>
              <Link className="cursor-pointer" href="https://www.linkedin.com/in/danigleba/" target="_blank">
                <FaLinkedin color="#222222" size={25} />
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
