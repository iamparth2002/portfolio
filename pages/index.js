import Head from 'next/head';
import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import { BsArrowUpRightCircleFill, BsFillMoonStarsFill } from 'react-icons/bs';
import { CgSandClock } from 'react-icons/cg';
import { useState } from 'react';
import deved from '../public/dev-ed-wave.png';
import code from '../public/code.png';
import design from '../public/design.png';
import consulting from '../public/consulting.png';
import Image from 'next/image';

import web6 from '../public/web6.png';
import bank from '../public/bank.png';
import real_estate from '../public/real-estate.png.png';
import restaurant from '../public/restaurant.png';
import gym from '../public/gym_app.png';
import filmpire from '../public/filmpire.png';

import blog from '../public/blog.png'
import yt from '../public/yt_clone.png'
import prompt from '../public/prompt.png'

import javascript from '../public/javascript.png';
import typescript from '../public/typescript.png';
import react from '../public/react.png';
import html from '../public/html.png';
import figma from '../public/figma.png';
import mu5 from '../public/mu5.png';
import node from '../public/node.png';
import sass from '../public/sass.png';
import css from '../public/css.png';
import tailwind from '../public/tailwind.png';
import firebase from '../public/firebase.png';
import adobe from '../public/adobe.png';
import redux from '../public/redux.png';
import nextjs from '../public/nextjs.svg';
import logo from '../public/logo.png';
// import resume from '../public/parth-gandhi-resume.pdf'

import Typewriter from 'typewriter-effect';
import Link from 'next/link';

export default function Home() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Parth Gandhi</title>
        <meta name="description" content="Parth Gandhi Portfolio Website" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen">
          <nav className="py-10 mb-12 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">developedbyparth</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className=" cursor-pointer text-2xl"
                />
              </li>
              <li>
                <Link href="/parth-gandhi-resume.pdf" download={true}>
                  <button className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8">
                    Resume
                  </button>
                </Link>
              </li>
            </ul>
          </nav>

          <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
            <div className="text-center lg:text-left">
              <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
                Parth Gandhi
              </h2>
              <h3 className="text-2xl py-2 dark:text-white md:text-4xl ">
                <Typewriter
                  options={{
                    strings: [
                      'React Developer',
                      'Web Designer',
                      'React-Native Developer',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h3>
              <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl tracking-wide">
                Welcome to my portfolio website! Whether you're looking to
                create immersive web experiences, powerful mobile applications,
                or dynamic user interfaces, you've come to the right place.
                Let's collaborate and bring your vision to life with the latest
                technologies and design principles, ensuring a truly exceptional
                digital presence.
              </p>
              <div className="text-5xl justify-center lg:justify-start items-center flex gap-16 py-3 text-gray-600 dark:text-gray-400 cursor-pointer">
                <a href="https://twitter.com/iamparth2002" target="_blank">
                  <AiFillTwitterCircle className="hover:text-white" />
                </a>
                <a
                  href="https://www.linkedin.com/in/parth-gandhi-bb8aab135/"
                  target="_blank"
                >
                  <AiFillLinkedin className="hover:text-white" />
                </a>

                <a href="https://github.com/iamparth2002" target="_blank">
                  <AiFillGithub className="hover:text-white" />
                </a>
              </div>
            </div>
            <div className="bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden  md:h-96 md:w-96">
              <Image src={deved} layout="fill" objectFit="cover" />
            </div>
          </div>
        </section>
        <section id="skills">
          <div className="mt-10">
            <h3 className="text-3xl py-4 text-teal-500 md:text-6xl">Skills</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              As a versatile and experienced professional, I possess a strong
              skill set in React, React Native, and web design. With a solid
              foundation in these technologies, I bring a comprehensive
              understanding of frontend development, user interface design, and
              mobile app development. My expertise allows me to create engaging
              and responsive user experiences while maintaining clean and
              efficient code. Combining creativity and technical proficiency, I
              am dedicated to delivering high-quality solutions that exceed
              client expectations.
            </p>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Let us look at the tools and frameworks that i use to create
              immersive web experiences and poweful mobile applications.
            </p>
          </div>
          <div className="lg:flex gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={design} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">
                Design Tools and Libraries I Use
              </h4>
              <div className="flex justify-evenly items-center">
                <Image src={adobe} width={50} height={50} className="rounded" />
                <Image
                  src={figma}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <Image src={tailwind} width={35} height={35} className="" />
                <Image src={mu5} width={50} height={50} className="rounded" />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={code} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">
                Languages and Frameworks I Use
              </h4>
              <div className="flex justify-evenly items-center flex-wrap mt-[-10px]">
                <Image
                  src={typescript}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <Image
                  src={javascript}
                  width={68}
                  height={68}
                  className="rounded-full"
                />
                <Image
                  src={react}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <Image
                  src={nextjs}
                  width={60}
                  height={60}
                  className="rounded"
                />
              </div>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={consulting} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Full Stack Applications
              </h3>
              <p className="py-2">
                Are you interested in Full Stack Applications?
              </p>
              <h4 className="py-4 text-teal-600">Backend Technologies I Use</h4>
              <div className="flex justify-evenly items-center">
                <Image
                  src={node}
                  width={50}
                  height={50}
                  className="rounded-md"
                />
                <Image
                  src={firebase}
                  width={50}
                  height={50}
                  className="rounded-full"
                />
                <Image src={redux} width={50} height={50} className="rounded" />
              </div>
            </div>
          </div>
        </section>
        <section id="projects" className="py-10">
          <div>
            <h3 className="text-3xl md:text-6xl py-1 text-teal-500">
              Projects
            </h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Welcome to the Projects section of my portfolio website! Here,
              you'll discover a curated collection of my innovative and diverse
              projects as a React developer and web designer. Each project
              represents a unique opportunity for me to push the boundaries of
              creativity, problem-solving, and user-centric design.
              <br />
              <br />
              Let's embark on a journey through the world of React development
              and web design, where innovation and imagination converge to shape
              the digital landscape.
            </p>
          </div>
          <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
            <div className="relative basis-1/3 flex-1 group shadow-2xl">
              <Image
                className="rounded-lg object-cover cursor-pointer group-hover:opacity-30 "
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={filmpire}
              />
              <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 class="text-5xl dark:text-white font-bold text-black">
                  FILMPIRE
                </h1>
                <a
                  class="text-xl flex justify-center text-white items-center gap-2 mt-5 px-8 py-3 rounded-full bg-gray-900 hover:bg-teal-600 duration-300"
                  href="https://filmpire-wine.vercel.app/"
                  target="_blank"
                >
                  <BsArrowUpRightCircleFill className="text-3xl" />
                  Visit Project
                </a>
                <a
                  class="text-xl text-white flex justify-center items-center mt-5 px-8 py-3 rounded-full bg-gray-500  hover:bg-amber-600 duration-300 gap-2"
                  href="https://github.com/iamparth2002/filmpire"
                  target="_blank"
                >
                  <AiFillGithub className="text-3xl" />
                  View Code
                </a>
              </div>
            </div>
            <div className="relative basis-1/3 flex-1 group shadow-2xl">
              <Image
                className="rounded-lg object-cover cursor-pointer group-hover:opacity-30 "
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={prompt}
              />
              <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 class="text-5xl text-black dark:text-white font-bold">
                  PROMPTOPIA
                </h1>
                <a
                  class="text-xl flex justify-center text-white items-center gap-2 mt-5 px-8 py-3 rounded-full bg-gray-900 hover:bg-teal-600 duration-300"
                  href="https://promptopia-project-app.vercel.app/"
                  target="_blank"
                >
                  <BsArrowUpRightCircleFill className="text-3xl" />
                  Visit Project
                </a>
                <a
                  class="text-xl text-white flex justify-center items-center mt-5 px-8 py-3 rounded-full bg-gray-500  hover:bg-amber-600 duration-300 gap-2"
                  href="https://github.com/iamparth2002/Promptopia"
                  target="_blank"
                >
                  <AiFillGithub className="text-3xl" />
                  View Code
                </a>
              </div>
            </div>
            <div className="relative basis-1/3 flex-1 group shadow-2xl">
              <Image
                className="rounded-lg object-cover cursor-pointer group-hover:opacity-30 "
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={yt}
              />
              <div class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 class="text-5xl text-black dark:text-white font-bold">
                  YOUTUBE CLONE
                </h1>
                <a
                  class="text-xl flex justify-center text-white items-center gap-2 mt-5 px-8 py-3 rounded-full bg-gray-900 hover:bg-teal-600 duration-300"
                  href="https://minimalist-youtube.vercel.app/"
                  target="_blank"
                >
                  <BsArrowUpRightCircleFill className="text-3xl" />
                  Visit Project
                </a>
                <a
                  class="text-xl text-white flex justify-center items-center mt-5 px-8 py-3 rounded-full bg-gray-500  hover:bg-amber-600 duration-300 gap-2"
                  href="https://github.com/iamparth2002/youtube_clone"
                  target="_blank"
                >
                  <AiFillGithub className="text-3xl" />
                  View Code
                </a>
              </div>
            </div>
            <div className="relative basis-1/3 flex-1 group shadow-2xl">
              <Image
                className="rounded-lg object-cover cursor-pointer group-hover:opacity-30 "
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={restaurant}
              />
              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 className="text-5xl text-black dark:text-white font-bold">
                  COIN SEARCH
                </h1>
                <a
                  className="text-xl flex justify-center text-white items-center gap-2 mt-5 px-8 py-3 rounded-full bg-gray-900 hover:bg-teal-600 duration-300"
                  href="https://coin-search-app-delta.vercel.app/"
                  target="_blank"
                >
                  <BsArrowUpRightCircleFill className="text-3xl" />
                  Visit Project
                </a>
                <a
                  className="text-xl text-white flex justify-center items-center mt-5 px-8 py-3 rounded-full bg-gray-500  hover:bg-amber-600 duration-300 gap-2"
                  href="https://github.com/iamparth2002/CoinSearch"
                  target="_blank"
                >
                  <AiFillGithub className="text-3xl" />
                  View Code
                </a>
              </div>
            </div>
            <div className="relative basis-1/3 flex-1 group shadow-2xl">
              <Image
                className="rounded-lg object-cover cursor-pointer group-hover:opacity-30 "
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={blog}
              />
              <div className="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                <h1 className="text-5xl text-black dark:text-white font-bold">
                  MY BLOGO
                </h1>
                <a
                  className="text-xl flex justify-center text-white items-center gap-2 mt-5 px-8 py-3 rounded-full bg-gray-900 hover:bg-teal-600 duration-300"
                  href="https://mern-stack-app-beta.vercel.app/"
                  target="_blank"
                >
                  <BsArrowUpRightCircleFill className="text-3xl" />
                  Visit Project
                </a>
                <a
                  className="text-xl text-white flex justify-center items-center mt-5 px-8 py-3 rounded-full bg-gray-500  hover:bg-amber-600 duration-300 gap-2"
                  href="https://github.com/iamparth2002/mern-stack-app"
                  target="_blank"
                >
                  <AiFillGithub className="text-3xl" />
                  View Code
                </a>
              </div>
            </div>
            <div className="relative basis-1/3 flex-1 group shadow-2xl">
              <Image
                className="rounded-lg object-cover cursor-pointer blur-lg"
                width={'100%'}
                height={'100%'}
                layout="responsive"
                src={web6}
              />
              <div className="absolute top-0 left-0 w-full flex flex-col justify-center items-center  h-full opacity-100 duration-500">
                <h1 className="text-5xl text-black  font-bold">GO-CHAT</h1>
                <a
                  className="text-xl flex justify-center text-white items-center gap-2 mt-5 px-8 py-3 rounded-full bg-gray-900 hover:bg-teal-600 duration-300"
                  href="#"
                >
                  <CgSandClock classNameName="text-3xl" />
                  Coming soon
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* <!-- Footer container --> */}
        <footer class=" text-neutral-600  dark:text-white lg:text-left">
          <div class="flex items-center justify-center border-b-2 border-neutral-200 p-6 dark:border-neutral-500 lg:justify-between">
            <div class="mr-12 hidden lg:block">
              <span>Get connected with me on social networks:</span>
            </div>
            {/* <!-- Social network icons container --> */}
            <div class="flex justify-center">
              <a
                href="https://twitter.com/iamparth2002"
                target="_blank"
                class="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>

              <a
                href="https://www.linkedin.com/in/parth-gandhi-bb8aab135/"
                target="_blank"
                class="mr-6 text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                </svg>
              </a>
              <a
                href="https://github.com/iamparth2002"
                target="_blank"
                class="text-neutral-600 dark:text-neutral-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* <!-- Main container div: holds the entire content of the footer, including four sections (Tailwind Elements, Products, Useful links, and Contact), with responsive styling and appropriate padding/margins. --> */}
          <div class="mx-6 py-10 text-center md:text-left">
            <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* <!-- Tailwind Elements section --> */}
              <div class="">
                <h6 class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-4 w-4"
                  >
                    <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
                  </svg>
                  Let's keep in touch
                </h6>
                <p>
                  Get in contact with me via the{' '}
                  <span className="text-teal-500">gmail</span> or{' '}
                  <span className="text-teal-500">whatsapp</span> me on the
                  provided phone number
                </p>
              </div>
              {/* <!-- Products section --> */}
              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Products
                </h6>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    React
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    React-Native
                  </a>
                </p>
                <p class="mb-4">
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    MERN Stack
                  </a>
                </p>
                <p>
                  <a href="#!" class="text-neutral-600 dark:text-neutral-200">
                    UI/UX Design
                  </a>
                </p>
              </div>
              {/* <!-- Useful links section --> */}
              <div class="">
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Useful links
                </h6>
                <p class="mb-4">
                  <a href="/" class="text-neutral-600 dark:text-neutral-200">
                    Home
                  </a>
                </p>
                <p class="mb-4">
                  <a
                    href="#skills"
                    class="text-neutral-600 dark:text-neutral-200"
                  >
                    Skills
                  </a>
                </p>
                <p class="mb-4">
                  <a
                    href="#projects"
                    class="text-neutral-600 dark:text-neutral-200"
                  >
                    Projects
                  </a>
                </p>
              </div>
              {/* <!-- Contact section --> */}
              <div>
                <h6 class="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                  Contact
                </h6>
                <p class="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5"
                  >
                    <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                    <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                  </svg>
                  NEW DELHI-110008 , IND
                </p>
                <p class="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5"
                  >
                    <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                    <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                  </svg>
                  iampgandhi@gmail.com
                </p>
                <p class="mb-4 flex items-center justify-center md:justify-start">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    class="mr-3 h-5 w-5"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                      clip-rule="evenodd"
                    />
                  </svg>
                  +91 7011-989-645
                </p>
              </div>
            </div>
          </div>

          {/* <!--Copyright section--> */}
          <div class="p-6 text-center text-teal-500 ">
            <span>© 2023 Copyright - </span>
            <a
              class="font-semibold text-black dark:text-white"
              href="https://tailwind-elements.com/"
            >
              Parth Gandhi
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}
