import matter from "gray-matter";
import fs from "fs";
import { join } from "path";
import Project from "@/domain/entities/project";

const projectsDirectory = join(process.cwd(), "/src/data/content/projects/");

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

export function getAllProjects(): Project[] {
  const files = getAllFiles(projectsDirectory);
  const projects = files.map((file) => {
    const id = RegExp(/[^\\/]+$/).exec(file)![0].replace(/\.md$/, "");
    const fileContents = fs.readFileSync(file, "utf8");
    const { data } = matter(fileContents);

    return { ...data, id } as Project;
  });

  return projects;
}

export function getProjectById(id: string): Project | null {
  const project = id.replace(/\.md$/, "");
  const fullPath = join(projectsDirectory, `${project}/${project}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return { ...data, content } as Project ?? null;
}