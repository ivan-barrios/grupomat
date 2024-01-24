import Link from "next/link";

const LanguageOption = ({ language, willLocale }) => {
  return (
    <Link href={`/${willLocale}`} className="w-full h-full">
      {language}
    </Link>
  );
};

export default LanguageOption;
