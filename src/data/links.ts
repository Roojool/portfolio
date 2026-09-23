export interface SocialLink {
  name: string;
  url: string;
  label: string;
  username?: string;
}

export const socialLinks = {
  github: {
    name: "GitHub",
    url: "https://github.com/Roojool",
    label: "GitHub",
    username: "Roojool"
  },
  linkedin: {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rujul-talekar/",
    label: "LinkedIn",
    username: "rujul-talekar"
  },
  googleScholar: {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=RWQN9K8AAAAJ&hl=en",
    label: "Google Scholar",
    username: "RWQN9K8AAAAJ"
  },
  orcid: {
    name: "ORCID",
    url: "https://orcid.org/0009-0008-5608-1512",
    label: "ORCID",
    id: "0009-0008-5608-1512"
  },
  email: null,
  resume: null
};

export const primaryLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/Roojool",
    label: "GitHub",
    username: "Roojool"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/rujul-talekar/",
    label: "LinkedIn",
    username: "rujul-talekar"
  },
  {
    name: "Google Scholar",
    url: "https://scholar.google.com/citations?user=RWQN9K8AAAAJ&hl=en",
    label: "Google Scholar",
    username: "RWQN9K8AAAAJ"
  },
  {
    name: "ORCID",
    url: "https://orcid.org/0009-0008-5608-1512",
    label: "ORCID",
    username: "0009-0008-5608-1512"
  }
];
