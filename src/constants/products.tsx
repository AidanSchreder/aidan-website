import spright1 from "public/images/spright1.png";
import spright2 from "public/images/spright2.png";
import spright3 from "public/images/spright3.png";
import T8541 from "public/images/8541.png";
import T8542 from "public/images/8542.png";
import T8543 from "public/images/8543.png";
import sidefolioMoonbeam2 from "public/images/sidefolio-moonbeam-2.png";
import sidefolioTailwindMasterKit from "public/images/sidefolio-tailwindmasterkit.png";
import sidefolioTailwindMasterKit2 from "public/images/sidefolio-tailwindmasterkit-2.png";

export const products = [
  {
    href: "https://www.instagram.com/sprightgames/",
    title: "Spright Games",
    description:
      "A brand design for an emerging game development studio focused on minecraft content",
    thumbnail: spright1,
    images: [spright2, spright3],
    stack: ["Logo", "Brandmark", "Assets"],
    slug: "spright",
    content: (
      <div>
        <p>
          When designing the logo for Spright Games I took inspiration from the Minecraft Allay for its
          bright and friendly motifs. My initial ideas included a variety of arrangements which I refined into a
          single recognizable form. 
        </p>{" "}
      </div>
    ),
  },
  {
    href: "https://www.team854.org/",
    title: "FIRST Robotics Team 854",
    description:
      "Apparel, logo and branding for a highschool robotics team",
    thumbnail: T8541,
    images: [T8542, T8543],
    stack: ["Logo", "Sweater graphic", "T-shirt graphic"],
    slug: "854",
    content: (
      <div>
        <p>
          Team 854 is dubbed "The Iron Bears" and thus the logo I designed features
          a robotic bear in the schools bright orange. I also designed a sweater graphic,
          T-shirt gaphic and competition pins. Above I have also include several sweater graphics
          that did not make the final cut.
        </p>
        
      </div>
    ),
  },
  //{
  //  href: "https://gomoonbeam.com",
  //  title: "Moonbeam",
  //  description:
  //    "Never write from scratch again with Moonbeam, your AI first writing tool",
  //  thumbnail: sidefolioMoonbeam,
  //  images: [sidefolioMoonbeam, sidefolioMoonbeam2],
  //  stack: ["Nextjs", "Tailwindcss"],
  //  slug: "moonbeam",
  //  content: (
  //    <div>
  //      <p>
  //        Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //        dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //        cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //        cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //        non cupidatat duis esse velit ut culpa et.{" "}
  //      </p>
  //      <p>
  //        Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //        Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //        sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //        Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //        reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //        Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //        excepteur velit adipisicing et Lorem magna.
  //      </p>{" "}
  //    </div>
  //  ),
  //},
  //{
  //  href: "https://tailwindmasterkit.com",
  //  title: "Tailwind Master Kit",
  //  description:
  //    "A beautiful and comprehensive Tailwind CSS components library for building modern websites and applications.",
  //  thumbnail: sidefolioTailwindMasterKit,
  //  images: [sidefolioTailwindMasterKit, sidefolioTailwindMasterKit2],
  //  stack: ["Nextjs", "Tailwindcss"],
  //  slug: "tailwindmasterkit",
  //  content: (
  //    <div>
  //      <p>
  //        Sit eiusmod ex mollit sit quis ad deserunt. Sint aliqua aliqua ullamco
  //        dolore nulla amet tempor sunt est ipsum. Dolor laborum eiusmod
  //        cupidatat consectetur velit ipsum. Deserunt nisi in culpa laboris
  //        cupidatat elit velit aute mollit nisi. Officia ad exercitation laboris
  //        non cupidatat duis esse velit ut culpa et.{" "}
  //      </p>
  //      <p>
  //        Exercitation pariatur enim occaecat adipisicing nostrud adipisicing
  //        Lorem tempor ullamco exercitation quis et dolor sint. Adipisicing sunt
  //        sit aute fugiat incididunt nostrud consequat proident fugiat id.
  //        Officia aliquip laborum labore eu culpa dolor reprehenderit eu ex enim
  //        reprehenderit. Cillum Lorem veniam eu magna exercitation.
  //        Reprehenderit adipisicing minim et officia enim et veniam Lorem
  //        excepteur velit adipisicing et Lorem magna.
  //      </p>{" "}
  //    </div>
  //  ),
  //},
];
