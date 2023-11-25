export const metadata = {
  title: 'Web',
  other: {
    order: 1,
    bgColor: '#95b665',
    icon: '<svg class="w-16 sm:w-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>',
  }
}

import Main from 'components/Main';

import Section from 'components/skills/Section';
import BlockList from 'components/skills/BlockList';
import Tile from 'components/skills/Tile';

import H1 from 'components/titles/H1';
import H2 from 'components/titles/H2';

import * as img from './images';

export default function Page() {
  return (
    <>
      <H1>Web</H1>
      <Main>
        <Section>
            <H2>Frontend frameworks</H2>
            <BlockList>
                <Tile name="React" icon={ img.react } level={ 4 } />
                <Tile name="Vue 3" icon={ img.vue } level={ 3 } />
                <Tile name="Svelte" icon={ img.svelte } level={ 2 } />
                <Tile name="Alpine.js" icon={ img.alpine } level={ 1 } />
                <Tile name="Preact" icon={ img.preact } level={ 1 } />
                <Tile name="Lit" icon={ img.lit } level={ 1 } />
                <Tile name="SolidJS" icon={ img.solidjs } level={ 1 } />
                <Tile name="Elm" icon={ img.elm } level={ 1 } />
            </BlockList>
        </Section>

        <Section>
            <H2>Backend frameworks</H2>
            <BlockList>
                <Tile name="WordPress" icon={ img.wordpress } level={ 4 } />
                <Tile name="Laravel" icon={ img.laravel } level={ 3 } />
                <Tile name="NestJS" icon={ img.nestjs } level={ 2 } />
                <Tile name="Express" icon={ img.express } level={ 1 } />
                <Tile name="Flask" icon={ img.flask } level={ 1 } />
                {/* <Tile name="Django" icon={ img.django } level={ 0 } /> */}
                <Tile name="Rails" icon={ img.rails } level={ 1 } />
                <Tile name="Phoenix" icon={ img.phoenix } level={ 1 } />
            </BlockList>
        </Section>

        <Section>
            <H2>SSR/SSG frameworks</H2>
            <BlockList>
                <Tile name="Astro" icon={ img.astro } level={ 4 } />
                <Tile name="Next.js" icon={ img.nextjs } level={ 3 } />
                <Tile name="Jekyll" icon={ img.jekyll } level={ 2 } />
                {/* <Tile name="Hugo" icon={ img.hugo } level={ 1 } /> */}
                <Tile name="Gastby" icon={ img.gatsby } level={ 1 } />
            </BlockList>
        </Section>

        <Section>
            <H2>CSS</H2>
            <BlockList>
                <Tile name="Tailwind" icon={ img.tailwind } level={ 4 }  />
                <Tile name="Sass" icon={ img.sass } level={ 4 }  />
                <Tile name="Bootstrap" icon={ img.bootstrap }  level={ 4 } />
                <Tile name="Emotion" icon={ img.emotion }  level={ 2 } />
            </BlockList>
        </Section>

        <Section>
            <H2>Testing</H2>
            <BlockList>
                <Tile name="Selenium" icon={ img.selenium } level={ 3 } />
                <Tile name="Cypress" icon={ img.cypress } level={ 3 } />
            </BlockList>
        </Section>

        <Section>
            <H2>Mobile</H2>
            <BlockList>
                <Tile name="React Native" icon={ img.react } level={ 3 } />
                <Tile name="Flutter" icon={ img.flutter } level={ 2 } />
                <Tile name="Android" icon={ img.android } level={ 1 } />
            </BlockList>
        </Section>

        <Section>
            <H2>CI/CD</H2>
            <BlockList>
                <Tile name="Docker" icon={ img.docker } level={ 4 } />
                <Tile name="Kubernetes" icon={ img.kubernetes } level={ 2 } />
                <Tile name="Terraform" icon={ img.terraform } level={ 1 } />
                <Tile name="Jenkins" icon={ img.jenkins } level={ 2 } />
                {/* <Tile name="Github Actions" icon={ img.github } level={ 1 } /> */}
            </BlockList>
        </Section>

        <Section>
            <H2>Databases</H2>
            <BlockList>
                <Tile name="MariaDB" icon={ img.mariadb } level={ 4 } />
                <Tile name="Redis" icon={ img.redis } level={ 2 } />
                <Tile name="MongoDB" icon={ img.mongodb } level={ 2 } />
                <Tile name="PostgreSQL" icon={ img.postgresql } level={ 1 } />
            </BlockList>
        </Section>

        <Section>
            <H2>Servers</H2>
            <BlockList>
                <Tile name="Apache" icon={ img.apache } level={ 4 } />
                <Tile name="nginx" icon={ img.nginx } level={ 3 } />
                <Tile name="Caddy" icon={ img.caddy } level={ 1 } />
            </BlockList>
        </Section>

        <Section>
            <H2>What I am currently learning:</H2>
            <BlockList>
                {/* <Tile name="Elixir" icon={ img.elixir } level={ 3 } /> */}
                <Tile name="Rust" icon={ img.rust } level={ 2 } />
                <Tile name="OCaml" icon={ img.ocaml } level={ 2 } />
                <Tile name="Haskell" icon={ img.haskell } level={ 1 } />
                <Tile name="Scala" icon={ img.scala } level={ 1 } />
                {/* <Tile name="Go" icon={ img.golang } level={ 1 } /> */}
                {/* <Tile name="Firebase" icon={ img.firebase } /> */}
                {/* <Tile name="Kotlin" icon={ img.kotlin } /> */}
                {/* <Tile name="AWS" icon={ img.aws } /> */}
            </BlockList>
        </Section>
      </Main>
    </>
  );
}
