import matter from "gray-matter";
import fs from "fs";
import { join } from "path";
import Experience from "@/domain/entities/experience";

const experienceDirectory = join(process.cwd(), "/src/data/content/experience/");

function getAllFiles(dirPath: string, arrayOfFiles: string[] = []): string[] {
  const files = fs.readdirSync(dirPath);

  files.forEach((file) => {
    const fullPath = join(dirPath, file);
    if (fs.statSync(fullPath).isDirectory()) {
      arrayOfFiles = getAllFiles(fullPath, arrayOfFiles);
    } else {
      arrayOfFiles.push(fullPath);
    }
  });

  return arrayOfFiles;
}

export function getAllExperience(): Experience[] {
  const files = getAllFiles(experienceDirectory);
  const experiences = files.map((file) => {
    const id = RegExp(/[^\\/]+$/).exec(file)![0].replace(/\.md$/, "");
    const fileContents = fs.readFileSync(file, "utf8");
    const { data } = matter(fileContents);

    return { ...data, id } as Experience;
  });

  const sortedExperiences = experiences.map((experience) => {
    const positionSorted = [...experience.position].sort((a, b) => {
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime();
    });
  
    return {
      ...experience,
      position: positionSorted,
    };
  });

  return sortedExperiences;
}

export function getExperienceById(id: string): Experience | null {
  const experience = id.replace(/\.md$/, "");
  const fullPath = join(experienceDirectory, `${experience}/${experience}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data } = matter(fileContents);

  return { ...data } as Experience ?? null;
}