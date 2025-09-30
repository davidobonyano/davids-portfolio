import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { seriousProjects } from "@/app/projects/data";
import { use } from "react";

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
        <p className="text-gray-300 mb-6 leading-relaxed">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-8">
          {project.technologies.map((tech) => (
            <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-4">
          {project.liveUrl && project.liveUrl !== "#" && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
              Live Demo
            </a>
          )}
          {project.githubUrl && project.githubUrl !== "#" && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
              Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
} 