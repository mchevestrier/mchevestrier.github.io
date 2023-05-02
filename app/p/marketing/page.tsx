export const metadata = {
    title: 'Marketing',
    other: {
        order: 2,
        bgColor: '#7cc6d2',
        icon: '<svg class="w-16 sm:w-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"></path></svg>',
    },
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
        <H1>Marketing</H1>
        <Main>
            <Section>
                <H2>Google Marketing Platform</H2>
                <BlockList>
                    <Tile name="Google Analytics" icon={ img.googleanalytics } level={ 4 } />
                    <Tile name="Google Optimize" icon={ img.optimize } level={ 1 } />
                    <Tile name="Google Tag Manager" icon={ img.tagmanager } level={ 3 } />
                    {/* TODO: Looker Studio */}
                    <Tile name="Google Data Studio" icon={ img.datastudio } level={ 4 } />
                </BlockList>
            </Section>
            <Section>
                <H2>Search Engine Optimization</H2>
                <BlockList>
                    <Tile name="Google Search Console" icon={ img.searchconsole } level={ 4 } />
                    <Tile name="SEMrush" icon={ img.semrush } level={ 2 } />
                </BlockList>
            </Section>
            <Section>
                <H2>Adobe Creative Suite</H2>
                <BlockList>
                    <Tile name="Adobe Illustrator" icon={ img.illustrator } level={ 4 } />
                    <Tile name="Adobe InDesign" icon={ img.indesign } level={ 3 } />
                    <Tile name="Adobe Photoshop" icon={ img.photoshop } level={ 1 } />
                </BlockList>
            </Section>
            <Section>
                <H2>Marketing Automation</H2>
                <BlockList>
                    <Tile name="Sendinblue" icon={ img.sendinblue } level={ 4 } />
                    <Tile name="Zapier" icon={ img.zapier } level={ 4 } />
                    <Tile name="Salesforce CRM" icon={ img.salesforce } level={ 1 } />
                    <Tile name="Salesforce Marketing Cloud" icon={ img.marketingcloud } level={ 2 } />
                </BlockList>
            </Section>
            <Section>
                <H2>What I want to learn next:</H2>
                <BlockList>
                    <Tile name="Segment" icon={ img.segment } />
                    <Tile name="LaunchDarkly" icon={ img.launchdarkly } />
                    {/* <Tile name="Clearbit" icon={ img.clearbit } /> */}
                    {/* <Tile name="Marketo" icon={ img.marketo } /> */}
                    {/* <Tile name="Mixpanel" icon={ img.mixpanel } /> */}
                    {/* <Tile name="Amplitude" icon={ img.amplitude } /> */}
                    {/* <Tile name="Iterable" icon={ img.iterable } /> */}
                    {/* <Tile name="Matomo" icon={ img.matomo } level={ 1 } /> */}
                    {/* <Tile name="Google Ads" icon={ img.googleads } level={ 1 } /> */}
                </BlockList>
            </Section>
        </Main>
    </>
  );
}
