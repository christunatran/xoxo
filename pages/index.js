import Head from "next/head";
import {
  UserCircleIcon,
  PhotoIcon,
  BanknotesIcon,
  PencilSquareIcon,
  EnvelopeIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";
import {
  LoginButton,
  MintButton,
  useAccount,
  useMint,
  useSignMessage,
  useGetSharedSecret,
} from "@comet-labs/react";
import { Work_Sans } from "@next/font/google";
const work_sans = Work_Sans({ subsets: ["latin"] });

import styles from "../styles/Home.module.css";

export default function Home() {
  const account = useAccount();

  const { startMint } = useMint({ collectionId: "22c6ecefe246" });
  const { signMessage } = useSignMessage({ message: "<MESSAGE>" });
  const { getSharedSecret } = useGetSharedSecret({
    publicKey: "Dgq5B8i5NJJfPoUgpkFZDzRr84zd1BJrUBntJt1EBvgd",
  });

  return (
    <>
      <Head>
        <title>muaHAHAHAHHAHAHAHAHAH!!!</title>
        <meta
          name="description"
          content="The Comet React SDK lets you launch new Solana NFT collections in your app!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/cometfavicon.png" />
      </Head>

      <main className={work_sans.className}>
        <div className={"isolate bg-white " + styles.main}>
          <div className="px-6 pt-6 lg:px-8">
            <nav
              className="flex items-center justify-between"
              aria-label="Global"
            >
              <div className="flex lg:flex-1">
                <a
                  href="https://www.withcomet.com"
                  target="_blank"
                  className="-m-1.5 p-1.5"
                >
                  <span className="sr-only">Comet React SDK</span>
                  <img className="h-8" src="/cometfavicon.png" alt="" />
                </a>
              </div>
            </nav>
          </div>
          <main>
            <div className="relative py-24 sm:py-32 lg:pb-40">
              <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                    you are being put into a trance... by @realtunapee on twitter...
                  </h1>

                  <div className="marquee">
                    <div className="marquee__group">
                      <img src="../mushroom_run.gif" width="100px" />
                      <img src="../mushroom_run.gif" width="100px" />
                      <img src="../mushroom_run.gif" width="100px" />
                      <img src="../mushroom_run.gif" width="100px" />
                      <img src="../mushroom_run.gif" width="100px" />
                    </div>

                    <div aria-hidden="true" class="marquee__group">
                      <img src="../mushroom_run.gif" width="100px" />
                      <img src="../mushroom_run.gif" width="100px" />
                      <img src="../mushroom_run.gif" width="100px" />
                      <img src="../mushroom_run.gif" width="100px" />
                      <img src="../mushroom_run.gif" width="100px" />
                    </div>
                  </div>

                  <div className="mt-8 flow-root max-w-2xl m-auto">
                    <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
                      <div className="bg-white rounded-md shadow-2xl ring-1 ring-gray-900/10">
                        <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-6 sm:p-6 rounded-md">
                          <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                          Oh mushrooms, symbols of love and bliss,
                          Their gentle scent, a sweet lover's kiss.
                          </h2>
                          <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                          Imagine yourself in a forest on a hill,
                          Where mushrooms grow, strong and still.
                          </h2>
                          <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                          Embrace their love, let your heart dance,
                          In a world where love has a chance.
                          </h2>
                          <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                          Let the magic of mushrooms put a smile on your face,
                          For they remind us of love's sweet embrace.
                          </h2>
                          <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                          On this Valentine's Day, let their love be well,
                          A symbol of all that love can bring, so true and real.
                          </h2>
                          {/* <div className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-600 text-white sm:h-12 sm:w-12">
                              <UserCircleIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                Login with Comet
                              </p>
                              <p className="mt-1 text-sm text-gray-500 mb-3">
                                Let your users sign in with Comet
                              </p>
                              <LoginButton className="z-50" />
                            </div>
                          </div> */}

                          <h2 className="text-xl font-bold tracking-tight text-gray-800 sm:text-2xl">
                            This Solana NFT is a symbol of our love's connection, forever growing like a beautiful mushroom:
                          </h2>

                          <div className="-m-3 flex items-start rounded-lg p-3 transition duration-150 ease-in-out hover:bg-gray-50">
                            <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-md bg-slate-600 text-white sm:h-12 sm:w-12">
                              <BanknotesIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            </div>
                            <div className="ml-4">
                              <p className="text-base font-medium text-gray-900">
                                FREE SHROOMS!!!!!
                              </p>
                              <p className="mt-1 text-sm text-gray-500 mb-2">
                                CLICK HERE!!!!!
                              </p>
                              <MintButton collectionId="774ad6d93387" /> 
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </main>
        </div>
      </main>
    </>
  );
}
