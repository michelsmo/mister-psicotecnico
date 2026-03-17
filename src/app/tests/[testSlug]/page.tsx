import { notFound } from "next/navigation";
import { getTestBySlug, tests } from "../../../data/tests";
import { TestRunner } from "../../../components/TestRunner";

type TestPageProps = {
  params: Promise<{
    testSlug: string;
  }>;
};

export default async function TestPage({ params }: TestPageProps) {
  const { testSlug } = await params;
  const test = getTestBySlug(testSlug);

  if (!test) {
    notFound();
  }

  return <TestRunner test={test} />;
}

export async function generateStaticParams() {
  return tests.map((test) => ({
    testSlug: test.slug,
  }));
}

