interface SkillsProps{
  title: string;
  stack: string[]
}


export default function Skills ({title, stack}: SkillsProps){
  return(
    <section className="border flex flex-col md:max-w-50 w-full h-fit">
      <div className="border-b py-2 pl-1">
        <h1>{title}</h1>
      </div>
      <div>
        <ul className="flex flex-row flex-wrap gap-2 py-2 px-1">
          {stack.map((item, index) => (
            <li key={index} className="text-base text-[#ABB2BF] font-normal">{item}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}