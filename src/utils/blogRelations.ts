import { getCollection, type CollectionEntry } from "astro:content";
import { findEducationById } from "../data/education";
import { findRoleById } from "../data/experience";

type RelatedContentType = "project" | "education" | "experience";

type ResolvedRelatedItem = {
  href: string;
  label: string;
  typeLabel: string;
};

export async function getBlogsForRelation(type: RelatedContentType, id: string) {
  const posts = await getCollection("blog");
  return posts
    .filter((post) => post.data.related?.type === type && post.data.related.id === id)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());
}

export async function resolveBlogRelatedItem(
  post: CollectionEntry<"blog">,
): Promise<ResolvedRelatedItem | null> {
  const related = post.data.related;

  if (!related) {
    return null;
  }

  if (related.type === "project") {
    const projects = await getCollection("project");
    const project = projects.find((entry) => entry.id === related.id);

    if (!project) {
      throw new Error(`Blog "${post.id}" references missing project "${related.id}".`);
    }

    return {
      href: `/projects/${project.id}`,
      label: project.data.title,
      typeLabel: "Project",
    };
  }

  if (related.type === "education") {
    const education = findEducationById(related.id);

    if (!education) {
      throw new Error(`Blog "${post.id}" references missing education "${related.id}".`);
    }

    return {
      href: `/education/${education.id}`,
      label: education.school,
      typeLabel: "Education",
    };
  }

  const experience = findRoleById(related.id);

  if (!experience) {
    throw new Error(`Blog "${post.id}" references missing experience "${related.id}".`);
  }

  return {
    href: `/experience/${experience.role.id}`,
    label: `${experience.role.title} at ${experience.company.company}`,
    typeLabel: "Experience",
  };
}
