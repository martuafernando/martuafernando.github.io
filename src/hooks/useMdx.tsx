import { type Component } from "@builder.io/qwik";

export const useMdx = <T extends object>(modules: Record<string, unknown>) => {
	const modulesValue = Object.values(modules) as {
    frontmatter: T;
    default: Component;
  }[];

  return modulesValue.map((it) => ({
    data: it.frontmatter,
    component: it.default,
  }));
};
