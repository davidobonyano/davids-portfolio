"use client";

import { useLocale } from "@/i18n/LocaleProvider";

export default function ActionAndDescription({
  description,
  descriptionKey,
  liveUrl,
  githubUrl,
}: {
  description: string;
  descriptionKey?: string;
  liveUrl: string;
  githubUrl: string;
}) {
  const { t } = useLocale();
  const text = descriptionKey ? (t(descriptionKey) || description) : description;
  return (
    <>
      <p className="text-gray-300 mb-6 leading-relaxed">{text}</p>
      <div className="flex gap-4">
        {liveUrl && liveUrl !== "#" && (
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
            {t("liveDemo")}
          </a>
        )}
        {githubUrl && githubUrl !== "#" && (
          <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg">
            {t("code")}
          </a>
        )}
      </div>
    </>
  );
}


