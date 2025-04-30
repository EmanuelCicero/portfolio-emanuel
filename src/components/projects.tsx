import Image from "next/image";

interface ProjectsProps {
  image: string;
  stack: string[];
  title: string;
  description: string;
  linkLive: string,
  linkCode: string,
}
export default function Projects({ image, stack, title, description, linkLive, linkCode }: ProjectsProps) {

  return(
    <section className="flex flex-col border mx-auto h-fit">
      <div className="w-full">
        <Image src={image} alt="" sizes="100vw" width={1} height={1} className="w-full h-full"/>
      </div>
      <div>
        <ul className="flex flex-row flex-wrap gap-3 border-b border-t p-4">
          {stack.map((item, index) => (
            <li key={index} className="text-base font-normal text-[#ABB2BF]">{item}</li>
          ))}
        </ul>
      </div>
      <div className="flex flex-col h-full justify-center">
        <div className="flex flex-col gap-2 p-4">
          <h1 className="text-2xl font-semibold">{title}</h1>
          <p className="text-base font-normal text-[#ABB2BF]">{description}</p>
        </div>
        <div className="flex flex-wrap gap-4 p-4 text-lg">
          <a href={linkLive} target="_blank" className="px-4 py-2 border text-white hover:border-purple hover:bg-purple/20 transition cursor-pointer">
            Live
          </a>
          <a href={linkCode} target="_blank" className="px-4 py-2 border text-white hover:border-purple hover:bg-purple/20 transition cursor-pointer">
            Code 
          </a>
        </div>
      </div>
    </section>
  )
}