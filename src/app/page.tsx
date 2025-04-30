import Image from "next/image";
import Projects from "../components/projects";
import { projectsData } from "../data/projectsData";
import Skills from "../components/skills";
import { skillsData } from "../data/skillsData";
export default function Home() {

  const HashPurple = () => {
    return <span className="text-[#C778DD]">#</span>;
  }

  const SectionHeader = (title: string, percentage: string) => (
    <div className="flex flex-row items-center gap-6 py-10 md:text-4xl text-2xl font-semibold">
      <h1>{HashPurple()}{title}</h1>
      <div className="border-t border-purple border-1 w-[]" style={{ width: percentage }}></div>
    </div>
  );

  const Media = () => {
    type MediaItem = {
      name: string;
      icon: string;
      link: string;
    };

    const media: MediaItem[] = [
      {
        name: "LinkedIn",
        icon: "/linkedin-icon.svg",
        link: "https://www.linkedin.com/in/emanuel-cicero-a302191a7/"
      },
      {
        name: "GitHub",
        icon: "/github-icon.svg",
        link: "https://github.com/EmanuelCicero"
      },
    ]

    return (
      media.map((item, index) => (
        <a key={index} href={item.link} target="_blank">
          <Image src={item.icon} alt={item.name} width={20} height={20} />
        </a>
      ))
    )
  }

  const NavBar = () => {
    type NavItem = {
      name: string;
      link: string;
    };

    const links: NavItem[] = [
      {
        name: "projects",
        link: "#projects",
      },
      {
        name: "skills",
        link: "#skills"
      },
      {
        name: "contacts",
        link: "#contacts"
      }
    ]

    return (
      links.map((item, index) => (
        <li key={index}><a href={item.link}>{HashPurple()}{item.name}</a></li>
      ))
    )
  }

  return (
    <>
      <div className="container mx-auto px-6">
        <main>
          <div className="relative">
            <div className="absolute left-[-4%] flex-col items-center gap-2 lg:flex hidden">
              <div className="border-r border-[#ABB2BF] h-25">
                
              </div>
              <div className="flex flex-col gap-2">
                {Media()}
              </div>
            </div>
            <nav className="flex flex-row items-center justify-between py-8">
              <a href="">
                <h1 className="font-semibold text-lg">./emanuel</h1>
              </a>
              <ul className="md:flex hidden flex-row gap-8 text-lg">
                {NavBar()}
              </ul>
            </nav>
          </div>

          <section className="flex flex-row items-center justify-between py-10">
            <div className="flex flex-col items-start gap-6 text-4xl font-semibold leading-normal">
              <h1>
                {HashPurple()}Emanuel<br />
                <span className="text-purple">web designer</span> and <br />
                <span className="text-purple">developer front-end</span>.
              </h1>
              <p className="text-base font-normal">Transforming ideas into digital reality.</p>
            </div>
            <Image src="/image-banner.svg" alt={""} width={500} height={500} className="md:block hidden"></Image>
          </section>

          <section className="py-10">
            {SectionHeader("projects", "58%")}
            <div
              id="projects"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 scroll-mt-25"
            >
              {projectsData.map((item, index) => (
                <div key={index} className="w-full h-full">
                  <Projects
                    image={item.image}
                    stack={item.stack}
                    title={item.title}
                    description={item.description}
                    linkLive={item.linkLive}
                    linkCode={item.linkCode}
                  />
                </div>
              ))}
            </div>
          </section>

          <section id="skills" className="py-10">
            {SectionHeader("skills", "43%")}
            <div className="flex flex-row borderc justify-between">
              <Image src={"/image-skills.svg"} alt="" width={500} height={500} className="md:block hidden"></Image>
              <div className="flex gap-5 flex-wrap flex-row md:justify-end md:max-w-[50%] w-full h-fit">
                {skillsData.map((item, index) => (
                  <Skills
                    key={index}
                    title={item.title}
                    stack={item.stack} />
                ))}
              </div>
            </div>
          </section>

          <section id="contacts" className="py-10">
            {SectionHeader("contacts", "25%")}
            <div className="flex flex-wrap flex-row gap-10 justify-between items-center">
              <p className="md:w-[50%] ">I am open to freelance opportunities or full-time positions. If you have any other requests or questions, feel free to get in touch.</p>
              <div className="flex flex-col gap-4 border w-100 p-3">
                <h2>Message me here</h2>
                <div className="flex flex-row gap-2 items-center">
                  <Image src={"/email-icon.svg"} alt="Linkedin" width={30} height={30}></Image>
                  <p className="break-all">emanuelcicero.contato@gmail.com</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <footer className="border-t mt-20 py-10">
        <div className="container px-6 mx-auto flex flex-row flex-wrap md:justify-between justify-center items-center gap-4 ">
          <div className="flex flex-col gap-4">
            <div className="flex flex-row gap-2 items-center flex-wrap">
              <h1 className="text-2xl text-white font-semibold">./emanuel</h1>
              <p className="text-[#ABB2BF] break-all">emanuelcicero.contato@gmail.com</p>
            </div>
            <div className="text-white">
              <p>Web designer and developer front-end.</p>
            </div>
          </div>
          <div className="flex flex-col gap-4 text-center">
            <h1>Social Media</h1>
            <div className="flex flex-row gap-4 justify-center">
              {Media()}
            </div>
          </div>
        </div>
      </footer>

    </>
  );
}
