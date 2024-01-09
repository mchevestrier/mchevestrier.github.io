export const metadata = {
    title: 'Experience',
    other: {
      order: 5,
      bgColor: "#9d5da4",
      icon: '<svg class="w-16 sm:w-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path></svg>',
    },
}

import Main from 'components/Main';
import Section from 'components/skills/Section';
import Card from 'components/history/Card';
import Item from 'components/history/Item';

import H1 from 'components/titles/H1';

import * as img from './images';

export default function Page() {
  return (
    <>
      <H1>Experience</H1>
      <Main>
          {/* <Section>
              <Card company="Some company" logo={ img.company } place="France">
                <Item title="Software Engineer" span="August 2023 - Today">
                  <p> :) </p>
                </Item>
              </Card>
          </Section> */}
          <Section>
              <Card company="Projet Voltaire" logo={ img.projetvoltaire } place="Lyon, France">
                <Item title="Digital Project Manager" span="September 2021 - August 2023">
                  <p>As a Digital Project Manager at Woonoz/Projet Voltaire, I was responsible for the performance of 10 different websites, and the tracking and analysis of user behavior. </p>
                  <p>I was also in charge of marketing automation with Salesforce Marketing Cloud, as well as a variety of other projects, mostly linked with web marketing or automation. </p>
                </Item>
                <Item title="Content & Digital Marketing Assistant" span="September 2019 - August 2021">
                  <p>During this 2-years work-study contract, I acquired various skills such as web analytics, automation, or project management.
                  Most of my tasks were related to web tracking, search engine optimization, and content management. </p>
                </Item>
              </Card>
          </Section>
          <Section>
              <Card company="Média ESDES" logo={ img.mediaesdes } place="Lyon, France">
                <Item title="President" span="January 2019 - June 2021">
                  <p>Média ESDES is an organization that brings together students passionate about information, communication and digital. It manages different student-run projects such as a newspaper, a photography club, a news website, or the school yearbook. It also organizes a few events along the year. </p>
                </Item>
                <Item title="Web Manager" span="September - December 2018">
                  <p>I was in charge of a small team responsible for the content strategy, technical maintenance and monetization of our online assets. </p>
                </Item>
              </Card>
          </Section>
          <Section>
              <Card company="Cookson-CLAL" logo={ img.cookson } place="Lyon, France">
                <Item title="SEO" span="May - August 2019">
                  Throughout this digital marketing internship, I learned everything there is to know about search engine optimization, email marketing and social media management.
                </Item>
              </Card>
          </Section>
          <Section>
              <Card company="Billee" logo={ img.billee } place="Paris, France">
                <Item title="Brand Ambassador" span="July - August 2018">
                  For this part-time student job, I was tasked with presenting a mobile payment app and supporting customers checking out in restaurants.
                </Item>
              </Card>
          </Section>
          <Section>
              <Card company="Elon University Landscaping Department" logo={ img.elon } place="Elon, NC, USA">
                <Item title="Assistant Gardener" span="April - May 2018">
                  Student job as an assistant gardener in the Landscaping Department of the university I was studying in.
                </Item>
              </Card>
          </Section>
          <Section>
              <Card company="Alyzée Marine" logo={ img.sailonboat } place="Lyon, France">
                <Item title="Web Marketing Assistant" span="May - June 2017">
                  During this commercial internship, I pursued different missions such as helping clients, managing social media, and maintaining an e-commerce website.
                </Item>
              </Card>
          </Section>
      </Main>
    </>
  );
}
