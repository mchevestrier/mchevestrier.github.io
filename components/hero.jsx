import Socials from './socials';
import Logo from './logo';

export default function Hero() {
  return (
    <div className="p-4 w-full">
      <div className="mx-auto max-w-max">
        <Logo className="w-48 h-48 mx-auto text-red-400" />
        <h1 className="text-6xl text-center py-4">Martin Chevestrier</h1>
        <p className="text-gray-300 text-justify max-w-[32rem]">Graduated from a French business school and currently employed in the marketing team of an e-learning scale-up, I am looking for some professional challenge in a company that can make use of both my business background and technical skills. </p>
        <p className="text-gray-300 text-justify max-w-[32rem]">I specialize in digital marketing and data analysis, as well as web development and automation. </p>
        <p className="text-gray-300 text-justify max-w-[32rem]">On a personal level, I&apos;m also interested in cybersecurity and linguistics. </p>
        <Socials />
      </div>
    </div>
  );
}
