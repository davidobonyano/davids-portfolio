"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { seriousProjects } from "@/app/projects/data";
import { use } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function ProjectModal({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const { id } = use(params);
  const numericId = Number(id);
  const project = seriousProjects.find((p) => p.id === numericId);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-[10050] bg-black/70 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={() => router.back()}
    >
      <div
        className="bg-black/95 border border-white/10 rounded-2xl w-full max-w-4xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} details`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-black/80 text-white">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-blue-500" />
            <h2 className="text-lg md:text-xl font-semibold">{project.title}</h2>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => router.back()}
              className="w-9 h-9 rounded-lg bg-white/10 hover:bg-white/15 border border-white/10 text-gray-200 hover:text-white transition"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="max-h-[85vh] overflow-y-auto">
          <div className="p-5 md:p-6">
            {/* Media */}
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-white/10 mb-5">
              {project.image && (
                <Image src={project.image} alt={project.title} fill className="object-cover" />
              )}
            </div>

            {/* Description */}
            <p className="text-gray-300 mb-5 leading-relaxed">
              {project.description}
            </p>

            {/* Tech stack */}
            <div className="mb-6">
              <h3 className="text-white font-semibold mb-3">Tech stack</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3">
              {project.liveUrl && project.liveUrl !== "#" && (
                <Link
                  href={project.liveUrl}
                  target="_blank"
                  className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg text-white transition"
                >
                  Live Demo
                </Link>
              )}
              {project.githubUrl && project.githubUrl !== "#" && (
                <Link
                  href={project.githubUrl}
                  target="_blank"
                  className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-white transition inline-flex items-center gap-2"
                >
                  <FontAwesomeIcon icon={faGithub} />
                  Code
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 