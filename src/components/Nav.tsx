import { wmLogoBlack } from "@/assets/logos";
import { Box, HamburgerIcon } from "@/components";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-bg">
      <div className="flex gap-4 max-w-6xl mx-auto px-6 h-16 flex items-center justify-between font-inter">
        <Box className="flex items-end h-300 w-full py-2 -translate-y-142 font-semibold px-4">
          <div className="flex items-center font-bold text-lg leading-[1.1] flex-1">
            <img
              src={wmLogoBlack}
              alt="Whakatane Moving Logo"
              className="h-9"
            />
            <p>
              Whakatane <br />
              Moving.
            </p>
          </div>

          <div className="hidden flex-1 justify-center gap-12 md:flex">
            <a href="#about" className="hover:text-highlight">
              About
            </a>
            <a href="#services" className="hover:text-highlight">
              Services
            </a>
            <a
              href="#contact"
              className="hover:text-highlight text-cta whitespace-nowrap"
            >
              Book Now!
            </a>
          </div>
          <div className="hidden md:flex flex-1" />

          <div className="ml-auto md:hidden ml-auto">
            <button
              type="button"
              aria-label="Open navigation menu"
              className="inline-flex h-11 w-11 items-center justify-center rounded-xl text-text transition-colors hover:text-highlight"
            >
              <HamburgerIcon />
            </button>
          </div>
        </Box>
      </div>
    </nav>
  );
}
