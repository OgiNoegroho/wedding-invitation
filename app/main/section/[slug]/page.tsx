import { notFound } from "next/navigation";
import Hero from "../../sections/Hero";
import Ayat from "../../sections/Ayat";
import Quote from "../../sections/Quote";
import Bridengroom from "../../sections/Bridengroom";
import WeddingEvent from "../../sections/WeddingEvent";
import LoveStory from "../../sections/LoveStory";
import Attendance from "../../sections/Attendance";
import WeddingGifts from "../../sections/WeddingGifts";
import Footer from "../../sections/FooterSection";

const sections: Record<string, any> = {
  hero: Hero,
  ayat: Ayat,
  quote: Quote,
  bridengroom: Bridengroom,
  "wedding-event": WeddingEvent,
  "love-story": LoveStory,
  attendance: Attendance,
  "wedding-gifts": WeddingGifts,
  footer: Footer,
};

export default function SectionPage({ params }: { params: { slug: string } }) {
  const Comp = sections[params.slug];
  if (!Comp) return notFound();
  return <Comp />;
}
