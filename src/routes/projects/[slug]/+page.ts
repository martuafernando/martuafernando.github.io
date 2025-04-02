const meta = import.meta.glob('../../../content/projects/**/*.svx');

export async function load({ params }) {
  const files = Object.entries(meta);
  const file = files.find((it) => RegExp(/[^\\/]+$/).exec(it[0])?.[0].replace(/\.svx$/, "") === params.slug)
  const [path, importer] = file

  const project: any = await importer();
  
  return {
    path,
    id: RegExp(/[^\\/]+$/).exec(path)?.[0].replace(/\.svx$/, ""),
    ...project.metadata,
    content: project.default,
  };
}

export const prerender = true;
