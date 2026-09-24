import React from "react";
import {
  FiMail,
  FiArrowUpRight,
  FiPaperclip,
} from "react-icons/fi";
import {
  FaLinkedin,
  FaGithub,
  FaXTwitter,
} from "react-icons/fa6";
import { motion } from "motion/react";

const Contact = () => {
  const contacts = [
    {
      name: "GitHub",
      icon: <FaGithub />,
      href: "https://github.com/",
      iconColor: "text-primary",
      hoverColor: "group-hover:text-purple-500",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      href: "https://linkedin.com/",
      iconColor: "text-[#0A66C2]",
      hoverColor: "group-hover:text-[#0A66C2]",
    },
    {
      name: "Twitter",
      icon: <FaXTwitter />,
      href: "https://x.com/",
      iconColor: "text-primary",
      hoverColor: "group-hover:text-sky-400",
    },
    {
      name: "Mail",
      icon: <FiMail />,
      href: "mailto:your@email.com",
      iconColor: "text-rose-400",
      hoverColor: "group-hover:text-rose-400",
    },
    {
      name: "Resume",
      icon: <FiPaperclip />,
      href: "/resume.pdf",
      iconColor: "text-emerald-400",
      hoverColor: "group-hover:text-emerald-400",
    },
  ];

  return (
    <section
      id="contact"
      className="w-full border-t border-dashed border-border bg-background"
    >
      <div className="mx-auto max-w-4xl border-x border-dashed border-border">

        {/* Header */}
        <div className="border-b border-dashed border-border px-5 py-4 sm:px-8 md:px-10">
          <motion.h2
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="font-serif text-[26px] leading-none tracking-[-0.03em] text-primary sm:text-[28px]"
          >
            Contact
          </motion.h2>
        </div>

        {/* Contact Links */}
        <div className="flex w-full items-center justify-around">

          {contacts.map((contact, index) => (
            <motion.a
              key={contact.name}
              href={contact.href}
              target={contact.name === "Mail" ? undefined : "_blank"}
              rel={
                contact.name === "Mail"
                  ? undefined
                  : "noopener noreferrer"
              }
              aria-label={contact.name}
              title={contact.name}
              initial={{
                opacity: 0,
                y: 6,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
              }}
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className={`
                group
                flex
                h-[58px]
                items-center
                justify-center
                text-primary
                transition-colors
                duration-300
                ${contact.hoverColor}
              `}
            >
              {/* Icon */}
              <motion.span
                whileHover={{
                  scale: 1.08,
                  rotate: -4,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 18,
                }}
                className={`
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-[9px]
                  border
                  border-border
                  bg-surface
                  text-[17px]
                  transition-all
                  duration-300
                  group-hover:border-border-hover
                  ${contact.iconColor}
                `}
              >
                {contact.icon}
              </motion.span>

              {/* Desktop Name */}
              <span
                className="
                  ml-2.5
                  hidden
                  text-[13px]
                  font-medium
                  text-primary
                  sm:inline
                "
              >
                {contact.name}
              </span>

              {/* Desktop Arrow */}
              <FiArrowUpRight
                className="
                  ml-1.5
                  hidden
                  h-[13px]
                  w-[13px]
                  text-muted
                  transition-all
                  duration-300
                  group-hover:-translate-y-0.5
                  group-hover:translate-x-0.5
                  group-hover:text-current
                  sm:block
                "
              />
            </motion.a>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Contact;