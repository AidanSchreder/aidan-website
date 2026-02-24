import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { getAllBlogs } from "../../../lib/getAllBlogs";
import { Blogs } from "@/components/Blogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Engineering Projects | Aidan Schreder",
  description:
    "Aidan Schreder is a digital designer, problem solver, student and factotum.",
};

export default async function Blog() {
  const blogs = await getAllBlogs();
  const data = blogs.map(({ component, ...meta }) => meta);

  return (
    <Container>
      <Heading className="font-black pb-4">Impactful mechatronics and systems engineering projects</Heading>
      <Paragraph className="pb-10">
        From film equipment, to swerve robots, to 3D prints, I have experience with numerous 
        tools, workflows and mediums that help me implement quickly and effectively.
      </Paragraph>
      <Blogs blogs={data} />
    </Container>
  );
}
