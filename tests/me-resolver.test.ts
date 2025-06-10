import { buildSchema } from 'type-graphql';
import { graphql } from 'graphql';
import { describe, it, expect } from 'vitest';

import { MeResolver } from '../src/apollo/resolvers';
import { RESUME_DATA } from '../src/data/resume-data';

function expectedData() {
  return {
    name: RESUME_DATA.name,
    initials: RESUME_DATA.initials,
    location: RESUME_DATA.location,
    locationLink: RESUME_DATA.locationLink,
    about: RESUME_DATA.about,
    summary: String(RESUME_DATA.summary as any),
    avatarUrl: RESUME_DATA.avatarUrl,
    personalWebsiteUrl: RESUME_DATA.personalWebsiteUrl,
    contact: {
      email: RESUME_DATA.contact.email,
      tel: RESUME_DATA.contact.tel,
      social: RESUME_DATA.contact.social.map(({ name, url }) => ({ name, url })),
    },
    education: RESUME_DATA.education.map((e) => ({ ...e })),
    work: RESUME_DATA.work.map(({ logo, ...rest }) => ({
      ...rest,
      description: String(rest.description as any),
    })),
    skills: RESUME_DATA.skills,
    projects: RESUME_DATA.projects.map(({ tags, ...rest }) => ({
      ...rest,
      link: rest.link ? { label: rest.link.label, href: rest.link.href } : null,
    })),
  };
}

describe('MeResolver', () => {
  it('returns resume data', async () => {
    const schema = await buildSchema({ resolvers: [MeResolver] });
    const query = `
      query {
        me {
          name
          initials
          location
          locationLink
          about
          summary
          avatarUrl
          personalWebsiteUrl
          contact { email tel social { name url } }
          education { school degree start end }
          work { company link badges title start end description }
          skills
          projects { title techStack description link { label href } }
        }
      }
    `;
    const result = await graphql({ schema, source: query });
    expect(result.errors).toBeUndefined();
    expect(result.data?.me).toEqual(expectedData());
  });
});
