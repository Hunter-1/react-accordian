import * as React from 'react';

import AccordionItem from './AccordionItem';

export interface AccordionItemI {
    front: React.ReactNode;
    back: React.ReactNode;
}

export interface AccordionProps {
    items: ReadonlyArray<AccordionItemI>;
}

export const Accordion: React.FunctionComponent<Readonly<AccordionProps>> = (props: Readonly<AccordionProps>) => {
    const [activeTab, setActiveTab] = React.useState(-1);
    const { items} = props;

    const Items = () => (
        <>
            {items.map(({ front, back }, index) => (
                <div className="accordion" role="tablist" key={index}>
                    <AccordionItem
                        key={index}
                        title={front}
                        index={index}
                        activeTab={activeTab}
                        activateItem={(i: number): void => {
                            setActiveTab(activeTab === i ? -1 : i);
                                return;
                        }}
                    >
                        {back}
                    </AccordionItem>
                </div>
            ))}
        </>
    );

    return Array.isArray(items) && items.length ? <Items /> : null;
};

export default Accordion;