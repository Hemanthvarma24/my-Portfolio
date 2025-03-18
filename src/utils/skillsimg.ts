import html from '@/assets/svg/skills/html.svg';
import css from '@/assets/svg/skills/css.svg';
import javascript from '@/assets/svg/skills/javascript.svg';
import typescript from '@/assets/svg/skills/typescript.svg';
import react from '@/assets/svg/skills/react.svg';
import nextJS from '@/assets/svg/skills/nextJS.svg';
import tailwind from '@/assets/svg/skills/tailwind.svg';
import git from '@/assets/svg/skills/git.svg';
import bootstrap from '@/assets/svg/skills/bootstrap.svg';
import figma from '@/assets/svg/skills/figma.svg';
import api from '@/assets/svg/skills/api.png';
import github from '@/assets/svg/skills/github-sign.png';

export const skillsImage = (skill: string) => {
  const skillID = skill.toLowerCase();
  switch (skillID) {
    case 'html':
      return html;
    case 'css':
      return css;
    case 'javascript':
      return javascript;
    case 'typescript':
      return typescript;
    case 'react':
      return react;
    case 'next js':
      return nextJS;
    case 'tailwind':
      return tailwind;
    case 'git':
      return git;
    case 'bootstrap':
      return bootstrap;
    case 'figma':
      return figma;
    case 'api':
      return api;
    case 'github':
      return github;
    default:
      return null;
  }
};
