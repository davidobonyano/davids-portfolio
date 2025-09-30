import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seriousProjects } from "@/app/projects/data";
import { use } from "react";
import ActionAndDescription from "./ProjectClientSection";
import type { Metadata } from "next";
// keep

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const numericId = Number(id);
  const project = seriousProjects.find((p) => p.id === numericId);

  if (!project) return notFound();

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link href="/" className="text-gray-400 hover:text-white">← Back</Link>
        <h1 className="text-4xl font-bold mt-4 mb-6">{project.title}</h1>
        <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-6">
          {project.image && (
            <Image src={project.image} alt={project.title} fill className="object-cover" />
          )}
        </div>
        <ActionAndDescription
          description={project.description}
          descriptionKey={project.descriptionKey}
          liveUrl={project.liveUrl}
          githubUrl={project.githubUrl}
        />
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        {/* Buttons rendered above in client section */}
      </div>
    </div>
  );
} 

export async function generateMetadata(
  { params }: { params: Promise<{ id: string }> }
): Promise<Metadata> {
  const { id } = await params;
  const numericId = Number(id);
  const project = seriousProjects.find((p) => p.id === numericId);
  if (!project) return {};

  const title = `${project.title} — Project by David Obonyano`;
  const description = project.description.slice(0, 160);
  const image = project.image || "/ddaave.jpg";
  const url = `/projects/${id}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}