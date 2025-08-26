import Link from "next/link";

const navRoutes = [
  { title: "ბლოგი", href: "/" },
  { title: "სერვისები", href: "/" },
  { title: "შეფასებები", href: "/" },
  { title: "თვის კომპანია", href: "/" },
  { title: "ცხოვრება კომპანიაში", href: "/" },
];

const FooterNavigation: React.FC = () => {
  return (
    <nav>
      <ul className="flex items-center gap-3">
        {navRoutes.map((route) => (
          <li key={`footer-${route.title}`}>
            {
              <Link
                href={route.href}
                className="px-4 py-2 rounded-full text-base-sm bg-blue-light"
              >
                {route.title}
              </Link>
            }
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default FooterNavigation;
