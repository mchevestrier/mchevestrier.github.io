export const metadata = {
    title: 'Data',
    other: {
        order: 3,
        bgColor: '#d76565',
        icon: '<svg class="w-16 sm:w-32" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path></svg>',
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
        <H1>Data</H1>
        <Main>
            <Section>
                <H2>Machine Learning</H2>
                <BlockList>
                    <Tile name="NumPy" icon={ img.numpy } level={ 2 } />
                    <Tile name="pandas" icon={ img.pandas } level={ 2 } />
                    <Tile name="scikit-learn" icon={ img.scikitlearn } level={ 2 } />
                    <Tile name="TensorFlow" icon={ img.tensorflow } level={ 1 } />
                </BlockList>
            </Section>

            <Section>
                <H2>Natural Language Processing</H2>
                <BlockList>
                    <Tile name="spaCy" icon={ img.spacy } level={ 2 } />
                    <Tile name="Hugging Face Transformers" icon={ img.huggingface } level={ 1 } />
                    {/* <Tile name="NLTK" icon={ img.nltk } /> */}
                </BlockList>
            </Section>

            <Section>
                <H2>What I am currently learning:</H2>
                <BlockList>
                    <Tile name="PyTorch" icon={ img.pytorch } level={ 1 } />
                    <Tile name="R" icon={ img.r } level={ 2 } />
                    <Tile name="Julia" icon={ img.julia } level={ 2 } />
                </BlockList>
            </Section>

            <Section>
                <H2>What I want to learn next:</H2>
                <BlockList>
                    <Tile name="Apache Airflow" icon={ img.airflow } />
                    <Tile name="Apache Hive" icon={ img.hive } />
                </BlockList>
            </Section>
        </Main>
    </>
  );
}
