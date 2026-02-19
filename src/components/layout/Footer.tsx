import { Container } from "@/components/ui/Container";
import { CONTENT } from "@/constants/content";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white py-12">
      <Container>
        <div className="flex flex-wrap items-start justify-between gap-8">
          <div className="flex flex-col gap-6">
            <a href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-black text-white">
                <span className="text-sm font-bold">g</span>
              </div>
              <span className="text-xl font-semibold text-[#1A1A1A]">goji</span>
            </a>
            <div className="rounded-2xl border border-gray-200 bg-white p-6">
              <p className="font-semibold text-[#1A1A1A]">
                {CONTENT.footer.companyName}
              </p>
              <p className="mt-2 text-sm text-gray-500">
                {CONTENT.footer.address}
              </p>
              <p className="mt-1 text-sm text-gray-500">
                {CONTENT.footer.phone}
              </p>
            </div>
          </div>
          <div className="flex flex-col items-end gap-2 text-right">
            <p className="text-sm text-gray-500">{CONTENT.footer.copyright}</p>
            <a
              href={CONTENT.privacyLink}
              className="text-sm text-gray-600 underline hover:text-gray-800"
            >
              {CONTENT.footer.privacy}
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
