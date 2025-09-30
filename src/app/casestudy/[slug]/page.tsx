// app/case-studies/[slug]/page.tsx
import Image from "next/image";
 // tumhari array of case studies
import { caseStudies } from "@/data/Casestudy";
interface CaseStudyPageProps {
  params: { slug: string };
}

export default function CaseStudyPage({ params }: CaseStudyPageProps) {
  const { slug } = params;

  const caseStudy = caseStudies.find((study) => study.slug === slug);

    if (!caseStudy) {
    return (
      <main className="max-w-6xl mx-auto px-6 py-12 text-center">
        <h1 className="text-2xl font-bold">Case Study Not Found</h1>
        <p className="text-gray-600">The case study you’re looking for doesn’t exist.</p>
      </main>
    );
  }


  return (
    <main className="max-w-6xl mx-auto px-6 py-12 space-y-12">
      {/* Header Section */}
      <header className="space-y-4 text-center">
        <h1 className="text-4xl font-bold">{caseStudy.title}</h1>
        <p className="text-lg text-gray-600">{caseStudy.overview}</p>
      </header>

      {/* Hero Image */}
      <div className="relative w-full h-[400px] rounded-2xl overflow-hidden">
        <Image
          src={caseStudy.imageUrl}
          alt={caseStudy.title}
          fill
          className="object-cover"
        />
      </div>

      {/* Quote Section */}
      <section className="bg-gray-100 rounded-2xl p-6 md:p-10 text-center">
        <blockquote className="text-xl italic text-gray-800">
          “{caseStudy.quote}”
        </blockquote>
        <p className="mt-4 font-semibold">{caseStudy.author}</p>
        <p className="text-sm text-gray-500">{caseStudy.role}</p>
      </section>

      {/* Challenges, Solutions, Results */}
      <section className="grid md:grid-cols-3 gap-8">
        <div>
          <h2 className="text-xl font-bold mb-4">Challenges</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {caseStudy.challenges.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Solutions</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {caseStudy.solutions.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-xl font-bold mb-4">Results</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            {caseStudy.results.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Gallery */}
      {caseStudy.gallery && (
        <section>
          <h2 className="text-xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {caseStudy.gallery.map((img, i) => (
              <div key={i} className="relative w-full h-60 rounded-xl overflow-hidden">
                <Image src={img} alt={`Gallery ${i}`} fill className="object-cover" />
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Technologies */}
      <section>
        <h2 className="text-xl font-bold mb-6">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {caseStudy.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 rounded-full bg-gray-200 text-gray-800 text-sm font-medium"
            >
              {tech}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}
