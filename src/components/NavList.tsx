import { MotionConfig, motion } from "framer-motion";

type NavLink = {
  href: string;
  label: string;
  external?: boolean;
};

type NavListProps = {
  links: NavLink[];
};

export default function NavList({ links }: NavListProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.ul className="space-y-2" initial={false} animate={false}>
        {links.map((link) => (
          <motion.li key={link.href}>
            <motion.a
              href={link.href}
              target={link.external ? "_blank" : undefined}
              rel={link.external ? "noopener noreferrer" : undefined}
              className="group inline-flex items-center text-sm tracking-[0.12em] uppercase text-neutral-500"
              whileHover={{ x: 2, opacity: 1 }}
              whileTap={{ x: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            >
              <span className="transition-colors duration-150 group-hover:text-neutral-200">
                {link.label}
              </span>
            </motion.a>
          </motion.li>
        ))}
      </motion.ul>
    </MotionConfig>
  );
}
