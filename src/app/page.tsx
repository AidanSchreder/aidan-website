import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Heading className="font-black"> Designer, Engineer and Creative</Heading>
      <Paragraph className="max-w-xl mt-4">
        Hello and welcome! My name is Aidan, I am a Systems Design Engineering student at the
        University of Waterloo, and a professional graphic designer. I love building and learning new things.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        If you are looking for a {" "} <Highlight>professional logo or brand design</Highlight> send
        me a note via the contact form and I will get back to you with some ideas and a quote.
      </Paragraph>
      <Paragraph className="max-w-xl mt-4">
        If you are looking for an {" "} <Highlight>engineering intern</Highlight> starting in 
        Fall 2025, check out my resume below and feel free to reach out.
      </Paragraph>
      <Heading
        as="h2"
        className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
      >
        Recent graphic design projects
      </Heading>
      <Products />
      <TechStack />
    </Container>
  );
}
