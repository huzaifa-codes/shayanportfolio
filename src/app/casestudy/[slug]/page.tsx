

import Image from "next/image";
import { notFound } from "next/navigation";
import { caseStudies } from "@/data/Casestudy";

type CaseStudy = {
  slug: string;
  title: string;
  overview?: string;
  imageUrl?: string;
  quote?: string;
  author?: string;
  role?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  gallery?: string[];
  technologies?: string[];
};

interface CaseStudyPageProps {
  // params may be a Promise in some Next.js setups, so accept both shapes
  params: { slug: string } | Promise<{ slug: string }>;
}

export default async function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = await params; // <-- important: await params

  const caseStudy = (caseStudies as CaseStudy[]).find((s) => s.slug === slug);

  if (!caseStudy) {
    return notFound();
  }

  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header Section */}
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{caseStudy.title}</h1>
        {caseStudy.overview && (
          <p className="text-lg text-gray-600">{caseStudy.overview}</p>
        )}
      </header>

      {/* Hero Image */}
      {caseStudy.imageUrl && (
        <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
          <Image
            src={caseStudy.imageUrl}
            alt={caseStudy.title}
            fill
            sizes="(max-width: 768px) 100vw, 1200px"
            className="object-cover"
            priority
          />
        </div>
      )}

      {/* Quote Section */}
      <section className="bg-gray-100 rounded-2xl p-6 md:p-10 text-center">
        {caseStudy.quote && (
          <blockquote className="text-xl italic text-gray-800">“{caseStudy.quote}”</blockquote>
        )}
        {(caseStudy.author || caseStudy.role) && (
          <div className="mt-4">
            {caseStudy.author && <p className="font-semibold">{caseStudy.author}</p>}
            {caseStudy.role && <p className="text-sm text-gray-500">{caseStudy.role}</p>}
          </div>
        )}
      </section>

      {/* Challenges, Solutions, Results */}
      <section className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {(caseStudy.challenges && caseStudy.challenges.length > 0) ? (
              caseStudy.challenges.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <li className="text-gray-500">No challenges listed.</li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Solutions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {(caseStudy.solutions && caseStudy.solutions.length > 0) ? (
              caseStudy.solutions.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <li className="text-gray-500">No solutions listed.</li>
            )}
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {(caseStudy.results && caseStudy.results.length > 0) ? (
              caseStudy.results.map((item, i) => <li key={i}>{item}</li>)
            ) : (
              <li className="text-gray-500">No results listed.</li>
            )}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      {caseStudy.gallery && caseStudy.gallery.length > 0 && (
        <section>
          <h2 className="text-xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {caseStudy.gallery.map((img, i) => (
              <div key={i} className="relative w-full h-60 rounded-xl overflow-hidden">
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" sizes="(max-width: 768px) 100vw, 300px" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technologies */}
      <section>
        <h2 className="text-xl font-bold mb-6">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {(caseStudy.technologies && caseStudy.technologies.length > 0) ? (
            caseStudy.technologies.map((tech, i) => (
              <span key={i} className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-medium">{tech}</span>
            ))
          ) : (
            <span className="text-gray-500">No technologies listed.</span>
          )}
        </div>
      </section>
    </main>
  );
}
