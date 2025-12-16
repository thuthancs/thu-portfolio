import DetailPage from "@/layouts/DetailPage";
import Image from "next/image";

export default function MiscPage() {
  return (
    <DetailPage
      title="Misc"
      summary="Things that don't fit anywhere else :)"
    >
      <section>
        <h3>Cooking</h3>
        <p>I run an <a className="hover:text-blue-500" href="https://www.instagram.com/divachefs/" target="_blank" rel="noopener noreferrer">Instagram account</a> to share my cooking and design :) I am pretty confident that I am a good cook! My specialty is Vietnamese and Asian food.</p>
        <Image src="/divachefs.png" alt="Diva Chefs Instagram" width={600} height={400} className="my-4 rounded-md shadow-md" />
        <h3>Drawing</h3>
        <p>I also love drawing so I document my progress of imperfect work <a className="hover:text-blue-500" href="https://www.instagram.com/joyfuldrawing_/" target="_blank" rel="noopener noreferrer">here</a> :)</p>
        <Image src="/joyful_drawing.png" alt="Drawing 1" width={400} height={400} className="my-4 rounded-md shadow-md" />
      </section>
    </DetailPage>
  );
}
