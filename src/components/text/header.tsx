import { BackButton } from "../common/backButton";

type HeaderProps = {
  title: string;
  backButton?: boolean;
};

export default function Header({ title, backButton }: HeaderProps) {
  return (
    <section className="flex w-full items-center justify-start">
      {backButton && (
        <div className="hidden sm:flex mr-[24px]">
          <BackButton />
        </div>
      )}
      <h1 className="text-h3 sm:text-h2 text-primary-200">{title}</h1>
    </section>
  );
}
