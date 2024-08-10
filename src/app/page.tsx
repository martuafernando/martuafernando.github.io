import CommonLayout from "@/presentation/layout/common-layout";
import { FaGithub, FaLinkedin, FaInstagramSquare } from "react-icons/fa";

export default function Home() {
  return (
    <CommonLayout>
      <section className="py-24 md:p-24">
        <h2 className="text-3xl font-bold">Hi, I'm Martua Fernando</h2>
        <p className="text-2xl mt-2">Software Engineer</p>
        <p className="mt-4">
          I'm a Software Engineer from Indonesia with over a year of experience.
          Since 2022, I've been working at eHealth. I'm passionate about
          exploring new opportunities that allow me to expand my horizons and
          gain new experiences.
        </p>

        <div className="flex flex-wrap mt-8 gap-4 font-bold text-lg">
          <a
            href="https://github.com/martuafernando"
            className="flex items-center"
          >
            <FaGithub size={36} />
            <span className="ml-2">Github</span>
          </a>
          <a
            href="https://linkedin.com/in/martuafernando"
            className="flex items-center"
          >
            <FaLinkedin size={36} />
            <span className="ml-2">LinkedIn</span>
          </a>
          <a
            href="https://instagram.com/martuafernando"
            className="flex items-center"
          >
            <FaInstagramSquare size={36} />
            <span className="ml-2">Instagram</span>
          </a>
        </div>
      </section>

      <section className="p-8">
        <h3 className="text-2xl font-semibold">Projects</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-8">
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Project 1</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem, voluptatibus, quod, doloremque voluptatem quae nesciunt
              doloribus quos tempora voluptatum fugit.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Project 2</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem, voluptatibus, quod, doloremque voluptatem quae nesciunt
              doloribus quos tempora voluptatum fugit.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg">
            <h4 className="text-xl font-semibold">Project 3</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
              quidem, voluptatibus, quod, doloremque voluptatem quae nesciunt
              doloribus quos tempora voluptatum fugit.
            </p>
          </div>
        </div>
      </section>
    </CommonLayout>
  );
}
