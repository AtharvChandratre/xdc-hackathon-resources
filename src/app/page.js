import Image from "next/image";

import {linkData} from "@/app/data";

export default function Home() {
  return (
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
          <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-lg lg:flex">
          </div>
          <div className="hero">
              <div className="hero-content text-center">
                  <div className="max-w-lg">
                      <h1 className="text-5xl font-bold">Welcome #builders</h1>
                      <p className="py-6">Here are all the links you need to get started for building on XDC for
                          ETHDenver!</p>
                  </div>
              </div>
          </div>

          <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">
              {linkData.map((linkInfo, x) =>
                      <a
                          key={x}
                          href={linkInfo.url}
                          className=" group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
                          target="_blank"
                          rel="noopener noreferrer"
                      >
                          <h2 className={`mb-3 text-2xl font-semibold`}>
                              {linkInfo.title + " "}
                              <span
                                  className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                          </h2>
                          <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                              {linkInfo.description}
                          </p>
                      </a>
              )}
          </div>

          {/*<div className="hero">*/}
          {/*    <div className="hero-content text-center pt-7">*/}
          {/*        <div className="max-w-lg">*/}
          {/*            <h1 className="text-5xl font-bold">General Resources</h1>*/}
          {/*            <p className="py-6">Here are some links to get to know more about XDC and to get involved in the community</p>*/}
          {/*        </div>*/}
          {/*    </div>*/}
          {/*</div>*/}
          {/*<div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-4 lg:text-left">*/}
          {/*    {linkData.map((linkInfo, x) =>*/}
          {/*            <a*/}
          {/*                key={x}*/}
          {/*                href={linkInfo.url}*/}
          {/*                className=" group rounded-lg border border-transparent px-5 py-8 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"*/}
          {/*                target="_blank"*/}
          {/*                rel="noopener noreferrer"*/}
          {/*            >*/}
          {/*                <h2 className={`mb-3 text-2xl font-semibold`}>*/}
          {/*                    {linkInfo.title + " "}*/}
          {/*                    <span*/}
          {/*                        className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">*/}
          {/*    -&gt;*/}
          {/*  </span>*/}
          {/*                </h2>*/}
          {/*                <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>*/}
          {/*                    {linkInfo.description}*/}
          {/*                </p>*/}
          {/*            </a>*/}
          {/*    )}*/}
          {/*</div>*/}

      </main>
  );
}
