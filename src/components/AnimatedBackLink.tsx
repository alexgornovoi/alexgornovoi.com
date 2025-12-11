import { MotionConfig, motion } from "framer-motion";

type AnimatedBackLinkProps = {
  href: string;
  label?: string;
};

export default function AnimatedBackLink({ href, label = "../" }: AnimatedBackLinkProps) {
  return (
    <MotionConfig reducedMotion="user">
      <motion.a
        href={href}
        className="inline-flex items-center gap-1 px-2 py-1 -ml-1 no-link-underline"
        initial={false}
        whileHover={{ x: -4 }}
        whileTap={{ x: -2 }}
        transition={{ type: "spring", stiffness: 350, damping: 24 }}
      >
        {label}
      </motion.a>
    </MotionConfig>
  );
}
