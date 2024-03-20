"use client";
import * as React from "react";
import Image from "next/image";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Chip,
  Divider,
  Input,
  NextUIProvider,
  Select,
  SelectItem,
  Spacer,
  Switch,
} from "@nextui-org/react";
import NavBar from "@/components/NavBar";
import bottombg from "../public/hero-bg.png";
import slash from "../public/slash.svg";
import upload from "../public/upload.svg";
import token from "../public/token.svg";
import Footer from "@/components/Footer";
import dropdown from "../public/dropdown.svg";
import dropdownleft from "../public/dropdown-left.svg";
import warn from "../public/warn.svg";
import line from "../public/line.svg";
import nft from "../public/nft.png";

interface FAQItemProps {
  question: string;
  answer: string;
}

interface Steps {
  number: string;
  text: string;
}

export default function Home() {
  const [showSocialLinks, setShowSocialLinks] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);

  const toggleAnswer = () => {
    setIsOpen(!isOpen);
  };

  function FAQItem({ question, answer }: FAQItemProps) {
    const [isOpen, setIsOpen] = React.useState(false);

    const toggleAnswer = () => {
      setIsOpen(!isOpen);
    };

    return (
      <div>
        <div className="flex justify-between items-center">
          <h1 className="font-bold text-xl">{question}</h1>
          <button onClick={toggleAnswer}>
            <Image src={isOpen ? dropdownleft : dropdown} alt="dropdown" />
          </button>
        </div>
        <Spacer y={6} />
        {isOpen && <p className="font-light">{answer}</p>}
        <Spacer y={6} />
        <Divider />
        <Spacer y={6} />
      </div>
    );
  }

  function Step({ number, text }: Steps) {
    return (
      <div className="flex gap-4 justify-start items-center">
        <div className="w-8 h-8 shrink-0 grow-0 rounded-full text-[#368DFF] bg-[#9FA0ED] justify-center flex items-center">
          {number}
        </div>
        <p className="font-light">{text}</p>
      </div>
    );
  }

  return (
    <NextUIProvider>
      <main>
        <NavBar />
        {/* First section */}
        <section className="relative bg-screen h-full">
          {/* Hero Text and Content */}
          <div className="relative z-10 flex flex-col justify-start items-center h-full py-12">
            <div className="mt-12 md:mt-32 items-center flex-col flex">
              <button className="relative inline-flex items-center justify-center p-0.5 mb-4 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-3xl group bg-gradient-to-br to-[#8D1EA2] from-[#090EDB] hover:text-white dark:text-white ">
                <span className="flex items-center font-light gap-2 relative px-4 py-1.5 transition-all ease-in text-sm duration-75 text-[#0E0B29] dark:bg-white rounded-2xl group-hover:bg-opacity-0">
                  Solana Token Creator
                </span>
              </button>
              <p className="font-light text-center text-[#36394A] mb-6">
                An ideal solution for crafting Solana SPL tokens. Streamlined,
                intuitive, and rapid.
              </p>
              <h1 className="text-4xl md:text-7xl font-semibold ">
                Craft{" "}
                <span className="bg-clip-text text-transparent bg-gradient-to-b from-[#F33CC0] to-[#4349FF]">
                  Solana
                </span>{" "}
                Token
              </h1>
              <img src={slash} alt="" className="w-16 md:w-auto" />
              <div className="max-w-screen-lg mx-auto px-6">
                <p className="text-center font-light text-[#36394A] text-lg md:text-xl mt-8">
                  Easily generate your Solana SPL Token using our
                  straightforward 7+1 step process – no coding necessary. Tailor
                  your Solana Token precisely to your specifications. It takes
                  less than 5 minutes and comes at a reasonable price.
                </p>
              </div>
            </div>
          </div>

          <div className="absolute w-full top-96 md:top-20">
            <Image src={bottombg} alt="" className="w-full" />
          </div>
          <div className="flex justify-center items-center">
            <Card className="border-opacity-50 w-full md:w-[82%] flex justify-center">
              <CardBody className="flex flex-col space-y-4 p-4 md:p-24">
                <div className="flex flex-col md:flex-row md:space-x-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor=""
                      className="text-[#344054] text-sm font-light mb-2"
                    >
                      Name
                    </label>
                    <input
                      type="name"
                      className="border px-2 text-black border-[#D0D5DD] bg-transparent rounded-lg py-4 outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor=""
                      className="text-[#344054] text-sm font-light mb-2"
                    >
                      Symbol
                    </label>
                    <input
                      type="symbol"
                      className="border px-2 text-black border-[#D0D5DD] bg-transparent rounded-lg py-4 outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-row md:space-x-4 py-4">
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor=""
                      className="text-[#344054] text-sm font-light mb-2"
                    >
                      Decimal
                    </label>
                    <input
                      type="decimal"
                      className="border px-2 text-white border-[#D0D5DD] bg-transparent rounded-lg py-4 outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-full">
                    <label
                      htmlFor=""
                      className="text-[#344054] text-sm font-light mb-2"
                    >
                      Supply
                    </label>
                    <input
                      type="supply"
                      className="border px-2 text-black border-[#D0D5DD] bg-transparent rounded-lg py-4 outline-none"
                    />
                  </div>
                </div>
                <div className="flex flex-row space-x-4 ">
                  <div className="flex flex-col w-full ">
                    <label
                      htmlFor=""
                      className="text-[#344054] text-sm font-light mb-2"
                    >
                      Description
                    </label>
                    <textarea
                      placeholder="Description goes here"
                      className="border px-2 h-44 text-black border-[#D0D5DD] bg-transparent rounded-lg py-1.5 outline-none"
                    />
                  </div>
                  <div className="flex flex-col w-[400px]">
                    <label
                      htmlFor=""
                      className="text-[#344054] text-sm font-light mb-2"
                    >
                      Image
                    </label>
                    <div className="border justify-center items-center flex text-black h-44 border-[#D0D5DD] bg-transparent rounded-lg py-1.5 outline-none">
                      <button>
                        <Image src={upload} alt="src" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="py-4">
                  <div className="flex justify-center  items-center gap-2">
                    <p className="text-[#344054] font-light">
                      Add Social Links
                    </p>
                    <Switch
                      onChange={() => setShowSocialLinks(!showSocialLinks)}
                    />
                  </div>
                  {showSocialLinks && (
                    <div className="flex flex-row space-x-4 mt-4">
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor=""
                          className="text-[#344054] text-sm font-light mb-2"
                        >
                          Website
                        </label>
                        <input
                          type="name"
                          placeholder="Enter URL"
                          className="border px-2 text-black border-[#D0D5DD] bg-transparent rounded-lg py-3 outline-none"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor=""
                          className="text-[#344054] text-sm font-light mb-2"
                        >
                          Discord
                        </label>
                        <input
                          type="symbol"
                          placeholder="Enter URL"
                          className="border px-2 text-black border-[#D0D5DD] bg-transparent rounded-lg py-3 outline-none"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor=""
                          className="text-[#344054] text-sm font-light mb-2"
                        >
                          Telegram
                        </label>
                        <input
                          type="name"
                          placeholder="Enter URL"
                          className="border px-2 text-black border-[#D0D5DD] bg-transparent rounded-lg py-3 outline-none"
                        />
                      </div>
                      <div className="flex flex-col w-full">
                        <label
                          htmlFor=""
                          className="text-[#344054] text-sm font-light mb-2"
                        >
                          Twitter
                        </label>
                        <input
                          type="symbol"
                          placeholder="Enter URL"
                          className="border px-2 text-black border-[#D0D5DD] bg-transparent rounded-lg py-3 outline-none"
                        />
                      </div>
                    </div>
                  )}

                  <div className="flex flex-col md:flex-row justify-between items-center mt-10 mb-4">
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center">
                      <div className="flex">
                        <p className="font-light">Immutable</p>
                        <Image src={warn} alt="" />
                      </div>
                      <Switch size="sm" />
                      <span className=" md:inline">(+0.1 SOL)</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mt-4 md:mt-0">
                      <div className="flex">
                        <p className="font-light">Revoke Freeze</p>
                        <Image src={warn} alt="" />
                      </div>
                      <Switch size="sm" />

                      <span className=" md:inline">(+0.1 SOL)</span>
                    </div>
                    <div className="flex flex-col md:flex-row gap-2 md:gap-4 items-center mt-4 md:mt-0">
                      <div className="flex">
                        <p className="font-light">Revoke Freeze</p>
                        <Image src={warn} alt="" />
                      </div>
                      <Switch size="sm" />
                      <span className=" md:inline">(+0.1 SOL)</span>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center items-center ">
                  <Button
                    size="lg"
                    className="relative w-96 inline-flex items-center justify-center p-0.5 mb-2 me-2  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl border-2 border-black"
                  >
                    <Image src={token} alt="token" />
                    <span className="flex items-center gap-2 relative px-5 sm:px-4 py-1 sm:py-3 transition-all ease-in text-lg duration-75 ">
                      Create Token
                    </span>
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        <section className="h-full relative mt-10">
          <div className="flex flex-col items-center gap-6 px-6 md:px-10 lg:px-16 xl:px-20">
            <div className="flex flex-col gap-6 md:flex-row">
              <Card className="border bg-opacity-50 w-full md:w-1/2 lg:w-[680px]">
                <CardBody className="p-6">
                  <h1 className="text-2xl font-semibold mb-4 text-[#0E0B29]">
                    Considering a Liquidity Pool Creation?
                  </h1>
                  <p className="text-[#36394A] font-light mb-10">
                    Interested in establishing a liquidity pool? To proceed,
                    you'll need to "Revoke Freeze Authority" of the Token, which
                    can be done right here. The associated cost is 0.1 SOL.
                  </p>
                  <div className="mb-10">
                    <label htmlFor="" className="font-light mb-2">
                      Token
                    </label>
                    <Select className="w-full" label="Select Token">
                      <SelectItem
                        key=""
                        startContent={
                          <Image
                            alt="BabYDinoCoin"
                            className="w-6 h-6"
                            src={nft}
                          />
                        }
                      >
                        BabYDinoCoin
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button
                      size="lg"
                      className="relative w-full inline-flex items-center justify-center  mb-2  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl border-2 border-black"
                    >
                      <span className="flex items-center gap-2 relative px-5 sm:px-4 py-1 sm:py-3 transition-all ease-in text-lg duration-75 ">
                        Select Token
                      </span>
                    </Button>
                  </div>
                </CardBody>
              </Card>
              <Card className="border bg-opacity-50 w-full md:w-1/2 lg:w-[680px]">
                <CardBody className="p-4">
                  <h1 className="text-2xl font-semibold mb-4 text-[#0E0B29]">
                    Revoke Mint Authority
                  </h1>
                  <p className="text-[#36394A] font-light mb-10">
                    Revoking minting authority guarantees that the total supply
                    cannot exceed the predetermined limit, offering assurance
                    and security to buyers. The fee for this action is 0.1 SOL.
                  </p>
                  <div className="mb-12">
                    <label htmlFor="" className="font-light mb-2">
                      Token
                    </label>
                    <Select className="w-full" label="Select Token">
                      <SelectItem
                        key=""
                        startContent={
                          <Image
                            alt="BabYDinoCoin"
                            className="w-6 h-6"
                            src={nft}
                          />
                        }
                      >
                        BabYDinoCoin
                      </SelectItem>
                    </Select>
                  </div>
                  <div className="flex justify-center items-center">
                    <Button
                      size="lg"
                      className="relative w-full inline-flex items-center justify-center  mb-2   bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl border-2 border-black"
                    >
                      <span className="flex items-center gap-2 relative px-5 sm:px-4 py-1 sm:py-3 transition-all ease-in text-lg duration-75 ">
                        Select Token
                      </span>
                    </Button>
                  </div>
                </CardBody>
              </Card>
            </div>
            <Card className="border bg-opacity-50 w-full md:w-[50%] lg:w-[680px]">
              <CardBody className="p-4">
                <h1 className="text-2xl font-semibold mb-4 text-[#0E0B29]">
                  Burn token
                </h1>
                <p className="text-[#36394A] font-light mb-10">
                  Once submitted, this action cannot be undone, so please ensure
                  the accuracy of the information provided
                </p>
                <div className="mb-10">
                  <label htmlFor="" className="font-light mb-2">
                    Token
                  </label>
                  <Select className="w-full" label="Select Token">
                    <SelectItem
                      key=""
                      startContent={
                        <Image
                          alt="BabYDinoCoin"
                          className="w-6 h-6"
                          src={nft}
                        />
                      }
                    >
                      BabYDinoCoin
                    </SelectItem>
                  </Select>
                </div>
                <div className="flex justify-center items-center">
                  <Button
                    size="lg"
                    className="relative w-full inline-flex items-center justify-center p-0.5 mb-2 me-2  bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-xl border-2 border-black"
                  >
                    <span className="flex items-center gap-2 relative px-5 sm:px-4 py-1 sm:py-3 transition-all ease-in text-lg duration-75 ">
                      Burn Token
                    </span>
                  </Button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>

        {/* How to use solana */}

        <section className="py-10 lg:py-20 px-6 md:px-10 lg:px-32 flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="flex flex-col gap-4 w-full lg:w-1/2">
            <div>
              <h1 className="font-bold text-2xl">
                How to use Solana Token Creator
              </h1>
              <div className="mt-4 lg:mt-8 space-y-4">
                <Step number="1" text="Connect your Solana wallet." />
                <Step
                  number="2"
                  text="Specify the desired name for your Token."
                />
                <Step
                  number="3"
                  text="Indicate the symbol (max 8 characters)."
                />
                <Step
                  number="4"
                  text="Select the decimals quantity (0 for Whitelist Token, 5 for utility Token, 9 for meme token)."
                />
                <Step
                  number="5"
                  text="Provide a brief description for your SPL Token."
                />
                <Step
                  number="6"
                  text="Upload the image for your token (PNG)."
                />
                <Step number="7" text="Determine the Supply of your Token." />
                <Step
                  number="8"
                  text="Click on create, accept the transaction and wait until your tokens ready."
                />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-col gap-4 w-full lg:w-2/4 md:mt-24 mt-2">
            <div>
              <p className="font-light mb-6">
                The cost of Token creation is 0.5 SOL, covering all fees for SPL
                Token Creation.
              </p>
              <p className="font-light mb-6">
                Once the creation process starts, it will only take a few
                seconds! Once complete, you will receive the total supply of the
                token in your wallet.
              </p>
              <p className="font-light mb-6">
                Using your wallet, you can manage your token create additional
                supply or freeze it as needed. Experience the simplicity and
                affordability of Solana Token creation with our user-friendly
                platform.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-6 px-6 md:px-10 lg:px-32">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-5xl">
              Frequently Asked Questions
            </h1>
          </div>
          <Spacer y={10} />

          <FAQItem
            question="What is the Solana Token Creator?"
            answer="The Orion Tools Solana Token Creator is an advanced Smart Contract empowering users to effortlessly generate customized SPL Tokens (Solana tokens), specifically tailored to their preferences in terms of supply, name, symbol, description, and image on the Solana Chain. Making tokens is super quick and cheap with our easy process."
          />

          <FAQItem
            question="How much time will the Solana Token Creator Take?"
            answer="The time it takes to use the Solana Token Creator depends on various factors such as your familiarity with the process, customization requirements, and network conditions. Generally, the process is quick and straightforward, allowing users to create tokens efficiently."
          />

          <FAQItem question="How much does it cost?" answer="" />
          <FAQItem
            question="Which wallet can I use?"
            answer="Which wallet can I use?"
          />
        </section>

        {/*  */}
        <section className="py-10 px-6 md:py-20 md:px-10 lg:px-20 xl:px-36">
          <div className="text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-5xl">
              Solana SPL Token Creator
            </h1>
            <Spacer y={10} />

            <p className="font-light">
              If you're seeking a convenient and effective method for generating
              SPL tokens on the Solana blockchain, our online SPL token creator
              offers an ideal solution. Our platform is user-friendly and
              intuitive, enabling users to tailor and launch their tokens within
              minutes.
            </p>
            <Spacer y={6} />

            <p className="font-light">
              Our SPL token creator eliminates the need for expertise in
              blockchain technology; anyone can effortlessly create and manage
              their tokens. Additionally, we prioritize high security and
              privacy for our users. All transactions and token information
              benefit from protection through our on-chain smart contract,
              ensuring the security of your assets throughout and after the
              process.
            </p>
            <Spacer y={6} />

            <p className="font-light">
              Our goal is to provide users with a seamless and efficient
              experience in crafting SPL tokens on the Solana blockchain.
              Through our online creator, you can personalize your tokens with
              unique logos, descriptions, and issuance details, making them
              distinct and reflective of your brand or project.
            </p>
          </div>
          <Spacer y={10} />

          <div className="text-center md:text-left">
            <h1 className="font-bold text-3xl md:text-5xl">
              Why Create Solana Tokens using Orion
            </h1>
            <Spacer y={10} />

            <p className="font-light">
              Whether you're a seasoned developer or just starting out, our SPL
              Token Creator software is tailor-made for you. Experience the ease
              of quickly and securely generating tokens, saving valuable time
              and resources. What sets us apart is our unwavering commitment to
              exceptional support.
            </p>
            <Spacer y={6} />

            <p className="font-light">
              Our dedicated team of experts is available 24/7 to address any
              inquiries or challenges you may encounter. Start your journey of
              creating and managing SPL tokens on Solana today with confidence,
              knowing that our reliable and secure online creator offers an
              unparalleled experience. You won't find a more user-friendly and
              efficient solution elsewhere!
            </p>
          </div>
        </section>
        <Footer />
      </main>
    </NextUIProvider>
  );
}
