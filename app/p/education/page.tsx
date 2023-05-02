export const metadata = {
    title: 'Education',
    other: {
      order: 4,
      bgColor: '#5b86e3',
      icon: '<svg class="w-16 sm:w-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 14l9-5-9-5-9 5 9 5z"></path><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"></path></svg>'
    },
}

import Main from 'components/Main';
import Section from 'components/skills/Section';
import Card from 'components/history/Card';
import Item from 'components/history/Item';
import CertificateButton from 'components/history/CertificateButton';

import H1 from 'components/titles/H1';
import H2 from 'components/titles/H2';

import * as img from './images';

export default function Page() {
  return (
    <>
      <H1>Education</H1>
      <Main>
          <Section>
              <Card company="ESDES - Lyon Business School" logo={ img.esdes } place="Lyon, France">
                <Item title="Master's Degree" span="2016 - 2021">
                  <p>AACSB & EFMD accredited </p>
                  <p>Marketing & Digital Business Specialization </p>
                  <CertificateButton
                    href="https://certificat.esdes.fr/index.html?key=8624C7AB619B74507879897C08CD2DADCEDD07EBBF523F997D9A15F9673F8A19U2hFTExZWWxDN3o2c0p0UkVyU1FxcjY1RG1RcFBQeVkxbkZBMmd0YVU1a0VKTVBQ"
                  >Certificate</CertificateButton>
                </Item>
              </Card>
          </Section>
          <Section>
              <Card company="Elon University - Love School of Business" logo={ img.elon } place="Elon, NC, USA">
                <Item title="Exchange Semester" span="February - May 2018">
                  Courses :
                  <ul className="list-[circle] list-inside">
                    <li>Management Information Systems </li>
                    <li>International Trade and Finance </li>
                    <li>Introduction to International Business </li>
                    <li>Business Communications </li>
                  </ul>
                </Item>
              </Card>
          </Section>
      </Main>
      <H2>Certifications</H2>
      <Main>
          <Section>
              <Card company="Microsoft Office Specialist - Excel Expert" logo={ img.excel }>
                  <p className="pl-8">Microsoft Office Specialist: Microsoft Excel 2016 Expert </p>
                  <CertificateButton
                    href="https://www.credly.com/badges/829327ab-3cf7-4651-be3c-a42014ac1cce/linked_in_profile"
                  >Certificate</CertificateButton>
              </Card>
          </Section>
          <Section>
              <Card company="Certificat Voltaire" logo={ img.certificatvoltaire }>
                <p className="pl-8">French writing certification. Score: 948/1000</p>
                <CertificateButton
                    href="https://mon.certificat-voltaire.fr/verification-certificat?code=799CEHL"
                >Certificate</CertificateButton>
              </Card>
          </Section>
      </Main>
    </>
  );
}

