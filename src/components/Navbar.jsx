import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { navIcons, navLinks } from "#constants";

const Navbar = () => {
  const [now, setNow] = useState(() => dayjs());

  useEffect(() => {
    const timer = setInterval(() => setNow(dayjs()), 1000);
    return () => clearInterval(timer);
  }, []);
  return (
    <nav>
      <div>
        <img src="/images/logo.svg" alt="logo" />
        <p className="font-bold">Firja Portfolio</p>

        <ul>
          {navLinks.map(({ id, name }) => (
            <li key={id}>
              <p>{name}</p>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <ul>
          {navIcons.map(({ id, img }) => (
            <li key={id}>
              <img src={img} className="icon-hover" alt={`icon-${id}`} />
            </li>
          ))}
        </ul>

        <time>{now.format("ddd MMM D")} | {now.format("h:mm:ss A")}</time>
      </div>
    </nav>
  );
};

export default Navbar;
