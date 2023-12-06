import { textConfigurations } from "../../config/textConfig";

export const NavBar = () => {
  const { logoImage, link, menu } = textConfigurations.navBarText;

  return (
    <nav className="py-9 flex justify-between items-center text-[1.3em]">
      <h1>{logoImage}</h1>
      <ul className="flex list-none gap-20">
        {Object.values(menu).map((key) => (
          <li key={key}>{key}</li>
        ))}
      </ul>
      <a href={link.href} className="text-blue-500 hover:text-blue-700">
        {link.title}
      </a>
    </nav>
  );
};
