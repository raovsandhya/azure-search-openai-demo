import { Example } from "./Example";

import styles from "./Example.module.css";

export type ExampleModel = {
    text: string;
    value: string;
};

const EXAMPLES: ExampleModel[] = [
    {
        text: "How to deploy a service?",
        value: "How to deploy a service?"
    },
    { text: "How to create an OTN Physical Connection?", value: "How to create an OTN Physical Connection?" },
    { text: "Give me the list of containers in NFM-T", value: "Give me the list of containers in NFM-T" }
];

interface Props {
    onExampleClicked: (value: string) => void;
}

export const ExampleList = ({ onExampleClicked }: Props) => {
    return (
        <ul className={styles.examplesNavList}>
            {EXAMPLES.map((x, i) => (
                <li key={i}>
                    <Example text={x.text} value={x.value} onClick={onExampleClicked} />
                </li>
            ))}
        </ul>
    );
};
