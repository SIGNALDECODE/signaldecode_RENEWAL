import { notFound } from "next/navigation";
import Header from "@/components/ui/Header";
import Footer from "@/components/ui/Footer";
import WebProjectDetail from "@/components/web/WebProjectDetail";
import WebWipPage from "@/components/web/WebWipPage";
import {
  getWebProject,
  isWebWipSlug,
  getAllWebSlugs,
} from "@/lib/data";

export function generateStaticParams() {
  return getAllWebSlugs().map((slug) => ({ slug }));
}

export default async function WebProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getWebProject(slug);
  const wip = isWebWipSlug(slug);

  if (!project && !wip) notFound();

  return (
    <>
      <Header />
      {project ? <WebProjectDetail project={project} /> : <WebWipPage />}
      <Footer />
    </>
  );
}
