import Socials from "./Socials";

export default function Footer() {
  return (
    <footer className="px-4 py-6 text-center space-y-6 bg-[#161819]">
      <Socials />
      <div>
        <span>
          Made with <span className="text-red-500">{"\u2764"}</span> by{" "}
          <a href="/" className="underline">
            Martin Chevestrier
          </a>
        </span>
      </div>
    </footer>
  );
}
